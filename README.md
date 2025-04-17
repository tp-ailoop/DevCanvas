# DevCanvas - Modèle de projet de démarrage

DevCanvas est un modèle de projet complet pour le développement d'applications web. Il fournit un environnement préconfiguré avec des outils essentiels et les meilleures pratiques pour aider les développeurs à démarrer rapidement de nouveaux projets. Ce modèle inclut une configuration robuste pour le frontend et le backend, une intégration de base de données, et des workflows de développement pour accélérer votre processus de développement d'applications.

## Sommaire
- [Installation](docs/installation.md)
- [Migrations avec TypeORM](docs/migrations.md)
- [Sauvegarde et Restauration de la base de données](docs/sauvegarde-restauration.md)
- [Gestion des Dépendances](docs/gestion-dependances.md)
- [Hooks Git avec Husky](docs/hooks-git.md)
- [Gestion des Versions](docs/gestion-versions.md)

## Accès aux Services

- **Frontend** : [http://localhost:5173](http://localhost:5173)
- **Backend API** : [http://localhost:3001](http://localhost:3001)
- **API Documentation** : [http://localhost:3001/api](http://localhost:3001/api)
- **pgAdmin** : [http://localhost:8080](http://localhost:8080)
  - Email : `admin@admin.com`
  - Mot de passe : `admin`
  
### Connexion à PostgreSQL depuis pgAdmin

1. Après vous être connecté à pgAdmin, cliquez sur "Add New Server"
2. Dans l'onglet "General", donnez un nom au serveur (ex: "DevCanvas DB")
3. Dans l'onglet "Connection", entrez les informations suivantes :
   - Host name/address: `db`
   - Port: `5432`
   - Maintenance database: `devcanvas`
   - Username: `postgres`
   - Password: `postgres`
4. Cliquez sur "Save"