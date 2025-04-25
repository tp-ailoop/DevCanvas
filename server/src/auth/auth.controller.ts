import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Body,
  Res,
  Query,
} from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { AuthService } from './auth.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiCookieAuth,
} from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { Request as ExpressRequest, Response } from 'express';
import { Session, SessionData } from 'express-session';
import { Role } from '../users/entities/role.entity';
import { RateLimitGuard, SetRateLimit } from '../utils/guards/rate-limit.guard';

interface RequestWithUser extends ExpressRequest {
  user: {
    id: string;
    name: string;
    firstname: string;
    roles: Role[];
    estVerifie: boolean;
  };
  session: Session & Partial<SessionData>;
}

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(RateLimitGuard, LocalAuthGuard)
  @SetRateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 tentatives maximum
    message: 'Trop de tentatives de connexion, veuillez réessayer plus tard',
  })
  @Post('login')
  @ApiOperation({ summary: 'Connecte un utilisateur' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: 200,
    description: 'Utilisateur connecté avec succès',
    schema: {
      properties: {
        message: { type: 'string', example: 'Connexion réussie' },
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Identifiants invalides' })
  login(@Request() req: RequestWithUser, @Body() loginDto: LoginDto) {
    console.log(`Tentative de connexion avec l'email: ${loginDto.email}`);
    return this.authService.login(req.user);
  }

  @Get('verify-roles')
  @UseGuards(AuthenticatedGuard)
  @ApiOperation({
    summary:
      "Vérifie si l'utilisateur possède un ou plusieurs rôles spécifiques",
  })
  @ApiCookieAuth()
  @ApiResponse({
    status: 200,
    description: 'Résultat de la vérification des rôles',
    schema: {
      properties: {
        hasAccess: {
          type: 'boolean',
          description:
            "Indique si l'utilisateur possède au moins un des rôles demandés",
          example: true,
        },
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Non authentifié' })
  async verifyRoles(
    @Request() req: RequestWithUser,
    @Query('roles') roles: string | string[],
  ) {
    await Promise.resolve();

    const rolesToCheck: string[] = Array.isArray(roles) ? roles : [roles];

    // Récupère les rôles de l'utilisateur depuis la session
    const userRoles: string[] =
      req.user?.roles?.map((role: Role | string) =>
        typeof role === 'string' ? role : role.name,
      ) || [];

    // Vérifie si l'utilisateur a au moins un des rôles demandés
    const hasAccess: boolean = rolesToCheck.some((role: string) =>
      userRoles.includes(role),
    );

    return { hasAccess };
  }

  @UseGuards(RateLimitGuard, AuthenticatedGuard)
  @SetRateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 30, // 30 requêtes maximum
    message: 'Trop de requêtes, veuillez réessayer plus tard',
  })
  @Get('profile')
  @ApiOperation({ summary: "Récupère le profil de l'utilisateur connecté" })
  @ApiCookieAuth()
  @ApiResponse({
    status: 200,
    description: "Profil de l'utilisateur",
    schema: {
      properties: {
        name: { type: 'string' },
        firstname: { type: 'string' },
        email: { type: 'string' },
        phone: { type: 'string', nullable: true },
        siret: { type: 'string' },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' },
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Non authentifié' })
  getProfile(@Request() req: RequestWithUser) {
    return this.authService.getProfile(req.user.id);
  }

  @Post('logout')
  @ApiOperation({ summary: "Déconnecte l'utilisateur" })
  @ApiCookieAuth()
  @ApiResponse({
    status: 200,
    description: 'Déconnexion réussie',
    schema: {
      properties: {
        message: { type: 'string', example: 'Déconnexion réussie' },
      },
    },
  })
  logout(
    @Request() req: RequestWithUser,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.logout(req.session, res);
  }
}
