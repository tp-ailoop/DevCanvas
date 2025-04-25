import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '../utils/api.utils';
import type { AxiosError } from 'axios';

interface LoginCredentials {
    email: string;
    password: string;
}

export const useAuthStore = defineStore(
    'auth',
    () => {
        // État principal - stocke uniquement l'utilisateur après connexion réussie
        const user = ref(null);
        const error = ref<string | null>(null);
        const isLoading = ref(false);

        // Vérification basée uniquement sur l'existence des données utilisateur
        const isAuthenticated = computed(() => !!user.value);

        // Fonction pour vérifier les rôles
        async function hasRole(roles: string | string[]): Promise<boolean> {
            if (!isAuthenticated.value) return false;

            try {
                // S'assure que nous avons des rôles à vérifier
                if (!roles || (Array.isArray(roles) && roles.length === 0)) {
                    console.warn('Aucun rôle spécifié pour la vérification');
                    return false;
                }

                const rolesToCheck = Array.isArray(roles) ? roles : [roles];

                const response = await api.get('auth/verify-roles', {
                    params: {
                        // Envoi du tableau comme une chaîne séparée par des virgules
                        roles: rolesToCheck.join(',')
                    }
                });

                return !!response?.data?.hasAccess;
            } catch (err) {
                console.error('Erreur lors de la vérification des rôles:', err);
                console.error(
                    "Détails de l'erreur:",
                    (err as AxiosError).response?.data || (err as Error).message
                );
                return false;
            }
        }

        // Fonction de connexion
        async function login(credentials: LoginCredentials) {
            error.value = null;
            isLoading.value = true;

            try {
                const result = await api.post('auth/login', credentials);
                if (result?.data?.user) {
                    // Stocke les données de l'utilisateur de la réponse de login
                    user.value = result.data.user;
                    return true;
                }
                return false;
            } catch (err) {
                const axiosError = err as AxiosError<{ message: string }>;
                error.value =
                    axiosError.response?.data?.message || 'Échec de connexion';
                return false;
            } finally {
                isLoading.value = false;
            }
        }

        // Déconnexion
        async function logout() {
            isLoading.value = true;
            try {
                await api.post('auth/logout', {});
            } catch (err) {
                console.warn('Erreur lors de la déconnexion:', err);
            } finally {
                user.value = null;
                isLoading.value = false;
            }
        }

        return {
            user,
            error,
            isLoading,
            isAuthenticated,
            hasRole,
            login,
            logout
        };
    },
    {
        persist: {
            key: 'auth',
            storage: sessionStorage,
            serializer: {
                serialize: (state) => {
                    const { error, isLoading, ...rest } = state;

                    console.debug('Propriétés non persistées:', {
                        error,
                        isLoading
                    });

                    return JSON.stringify(rest);
                },
                deserialize: (str) => JSON.parse(str)
            }
        }
    }
);
