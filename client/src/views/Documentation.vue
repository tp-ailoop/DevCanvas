<template>
    <div class="bg-gradient-to-br from-green-50 to-emerald-50">
        <!-- Hero Section -->
        <section class="relative py-16 overflow-hidden">
            <div class="absolute inset-0 opacity-10 overflow-hidden">
                <div
                    class="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
                ></div>
            </div>

            <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
                <h1
                    class="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-600 to-emerald-500 inline-block text-transparent bg-clip-text text-center w-full"
                >
                    Documentation
                </h1>
                <p
                    class="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-8"
                >
                    Tout ce dont vous avez besoin pour maîtriser le template
                    DevCanvas et accélérer vos projets de développement.
                </p>
            </div>
        </section>

        <!-- Navigation Section - Amélioré pour mobile -->
        <section class="bg-white py-4 z-10 shadow-md">
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
                <!-- Menu pour écrans larges -->
                <nav class="hidden md:flex flex-wrap justify-center gap-4">
                    <a
                        href="#"
                        class="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md hover:bg-green-50 transition-colors"
                        @click.prevent="scrollToSection('presentation')"
                        >Présentation</a
                    >
                    <a
                        href="#"
                        class="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md hover:bg-green-50 transition-colors"
                        @click.prevent="scrollToSection('installation')"
                        >Installation</a
                    >
                    <a
                        href="#"
                        class="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md hover:bg-green-50 transition-colors"
                        @click.prevent="scrollToSection('migrations')"
                        >Migrations</a
                    >
                    <a
                        href="#"
                        class="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md hover:bg-green-50 transition-colors"
                        @click.prevent="scrollToSection('dependances')"
                        >Dépendances</a
                    >
                    <a
                        href="#"
                        class="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md hover:bg-green-50 transition-colors"
                        @click.prevent="scrollToSection('sauvegarde')"
                        >Sauvegarde</a
                    >
                    <a
                        href="#"
                        class="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md hover:bg-green-50 transition-colors"
                        @click.prevent="scrollToSection('hooks')"
                        >Hooks Git</a
                    >
                    <a
                        href="#"
                        class="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md hover:bg-green-50 transition-colors"
                        @click.prevent="scrollToSection('versions')"
                        >Versions</a
                    >
                </nav>

                <!-- Menu déroulant pour mobile -->
                <div class="md:hidden">
                    <button
                        class="w-full flex items-center justify-between px-4 py-2 text-gray-700 bg-white rounded-lg focus:outline-none"
                        @click="toggleMobileMenu"
                    >
                        <span class="font-medium">Navigation</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            :class="{ 'transform rotate-180': mobileMenuOpen }"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    <div
                        v-if="mobileMenuOpen"
                        class="mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1"
                    >
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                            @click.prevent="
                                scrollToSectionMobile('presentation')
                            "
                            >Présentation</a
                        >
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                            @click.prevent="
                                scrollToSectionMobile('installation')
                            "
                            >Installation</a
                        >
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                            @click.prevent="scrollToSectionMobile('migrations')"
                            >Migrations</a
                        >
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                            @click.prevent="
                                scrollToSectionMobile('dependances')
                            "
                            >Dépendances</a
                        >
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                            @click.prevent="scrollToSectionMobile('sauvegarde')"
                            >Sauvegarde</a
                        >
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                            @click.prevent="scrollToSectionMobile('hooks')"
                            >Hooks Git</a
                        >
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                            @click.prevent="scrollToSectionMobile('versions')"
                            >Versions</a
                        >
                    </div>
                </div>
            </div>
        </section>

        <!-- Documentation Content -->
        <section class="py-10 bg-white">
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
                <!-- Présentation -->
                <div id="presentation" class="mb-16">
                    <h2 class="text-3xl font-bold text-gray-800 mb-6">
                        Présentation
                        <div
                            class="w-20 h-1 bg-green-500 mt-2 rounded-full"
                        ></div>
                    </h2>

                    <p class="text-lg text-gray-700 mb-6">
                        DevCanvas est un modèle complet pour le développement
                        d'applications web. Il fournit un environnement
                        préconfiguré avec des outils essentiels et les
                        meilleures pratiques pour aider les développeurs à
                        démarrer rapidement de nouveaux projets.
                    </p>

                    <p class="text-lg text-gray-700 mb-8">
                        Ce modèle inclut une configuration robuste pour le
                        frontend (Vue.js) et le backend (NestJS), une
                        intégration avec PostgreSQL, et des workflows de
                        développement pour accélérer votre processus de
                        développement d'applications.
                    </p>

                    <div
                        class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100"
                    >
                        <h3 class="text-xl font-semibold text-gray-800 mb-4">
                            Accès aux services
                        </h3>
                        <ul class="space-y-4">
                            <li>
                                <div class="flex items-start">
                                    <div
                                        class="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0 mt-1"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4 text-green-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <span class="font-medium"
                                            >Frontend:</span
                                        >
                                        <a
                                            href="http://localhost:5173"
                                            target="_blank"
                                            class="text-green-600 hover:underline break-words"
                                            >http://localhost:5173</a
                                        >
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-start">
                                    <div
                                        class="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0 mt-1"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4 text-green-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <span class="font-medium"
                                            >Backend API:</span
                                        >
                                        <a
                                            href="http://localhost:3001"
                                            target="_blank"
                                            class="text-green-600 hover:underline break-words"
                                            >http://localhost:3001</a
                                        >
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-start">
                                    <div
                                        class="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0 mt-1"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4 text-green-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <span class="font-medium"
                                            >API Doc:</span
                                        >
                                        <a
                                            href="http://localhost:3001/api"
                                            target="_blank"
                                            class="text-green-600 hover:underline break-words"
                                            >http://localhost:3001/api</a
                                        >
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-start">
                                    <div
                                        class="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0 mt-1"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4 text-green-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <span class="font-medium"
                                            >pgAdmin:</span
                                        >
                                        <a
                                            href="http://localhost:8080"
                                            target="_blank"
                                            class="text-green-600 hover:underline break-words"
                                            >http://localhost:8080</a
                                        >
                                        <div class="text-gray-600 mt-1">
                                            Email:
                                            <span
                                                class="bg-gray-100 px-2 py-0.5 rounded font-mono text-sm break-all"
                                                >admin@admin.com</span
                                            >
                                        </div>
                                        <div class="text-gray-600 mt-1">
                                            Mot de passe:
                                            <span
                                                class="bg-gray-100 px-2 py-0.5 rounded font-mono text-sm"
                                                >admin</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Installation -->
                <div id="installation" class="mb-16">
                    <h2 class="text-3xl font-bold text-gray-800 mb-6">
                        Installation du projet
                        <div
                            class="w-20 h-1 bg-green-500 mt-2 rounded-full"
                        ></div>
                    </h2>

                    <h3 class="text-xl font-semibold text-gray-800 mb-4">
                        Prérequis
                    </h3>
                    <p class="text-gray-700 mb-4">
                        Avant de commencer, assurez-vous d'avoir installé :
                    </p>
                    <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                        <li>
                            <a
                                href="https://www.docker.com/get-started"
                                target="_blank"
                                class="text-green-600 hover:underline"
                                >Docker</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://docs.docker.com/compose/install/"
                                target="_blank"
                                class="text-green-600 hover:underline"
                                >Docker Compose</a
                            >
                        </li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mb-4">
                        Étapes d'installation
                    </h3>
                    <ol class="list-decimal pl-6 mb-6 space-y-6">
                        <li class="text-gray-700">
                            <strong class="text-gray-900"
                                >Cloner le projet :</strong
                            >
                            <div
                                class="bg-gray-800 rounded-lg mt-2 overflow-hidden"
                            >
                                <pre
                                    class="text-gray-100 p-4 overflow-x-auto"
                                ><code>git clone https://github.com/votre-repo/devcanvas.git
  cd devcanvas</code></pre>
                            </div>
                        </li>
                        <li class="text-gray-700">
                            <strong class="text-gray-900"
                                >Créer un fichier .env pour le backend</strong
                            >
                            (si non existant) :
                            <div
                                class="bg-gray-800 rounded-lg mt-2 overflow-hidden"
                            >
                                <pre
                                    class="text-gray-100 p-4 overflow-x-auto"
                                ><code>cp server/.env.example server/.env</code></pre>
                            </div>
                            <p class="mt-2">Le fichier devrait contenir :</p>
                            <div
                                class="bg-gray-800 rounded-lg mt-2 overflow-hidden"
                            >
                                <pre
                                    class="text-gray-100 p-4 overflow-x-auto"
                                ><code>DB_HOST=db
  DB_PORT=5432
  DB_USERNAME=postgres
  DB_PASSWORD=postgres
  DB_DATABASE=devcanvas
  COOKIE_SECURE=false</code></pre>
                            </div>
                        </li>
                        <li class="text-gray-700">
                            <strong class="text-gray-900"
                                >Lancer l'application avec Docker Compose
                                :</strong
                            >
                            <div
                                class="bg-gray-800 rounded-lg mt-2 overflow-hidden"
                            >
                                <pre
                                    class="text-gray-100 p-4 overflow-x-auto"
                                ><code>docker compose up --watch</code></pre>
                            </div>
                            <p class="mt-2">Cette commande va :</p>
                            <ul
                                class="list-disc pl-6 mt-2 space-y-1 text-gray-600"
                            >
                                <li>
                                    Construire et démarrer les conteneurs (<code
                                        class="bg-gray-100 px-1 rounded text-sm"
                                        >frontend</code
                                    >,
                                    <code
                                        class="bg-gray-100 px-1 rounded text-sm"
                                        >backend</code
                                    >,
                                    <code
                                        class="bg-gray-100 px-1 rounded text-sm"
                                        >db</code
                                    >,
                                    <code
                                        class="bg-gray-100 px-1 rounded text-sm"
                                        >pgadmin</code
                                    >)
                                </li>
                                <li>
                                    Synchroniser automatiquement les
                                    modifications dans
                                    <code
                                        class="bg-gray-100 px-1 rounded text-sm"
                                        >client/src</code
                                    >
                                    et
                                    <code
                                        class="bg-gray-100 px-1 rounded text-sm"
                                        >server/src</code
                                    >
                                </li>
                                <li>
                                    Recompiler le projet si
                                    <code
                                        class="bg-gray-100 px-1 rounded text-sm"
                                        >package.json</code
                                    >
                                    est modifié
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>

                <!-- Migrations -->
                <div id="migrations" class="mb-16">
                    <h2 class="text-3xl font-bold text-gray-800 mb-6">
                        Gestion des migrations avec TypeORM
                        <div
                            class="w-20 h-1 bg-green-500 mt-2 rounded-full"
                        ></div>
                    </h2>

                    <p class="text-lg text-gray-700 mb-6">
                        Le projet utilise TypeORM pour gérer les migrations de
                        base de données, ce qui permet de contrôler les
                        changements de schéma de manière sécurisée et
                        versionnée.
                    </p>

                    <div
                        class="rounded-xl bg-gradient-to-tr from-emerald-50 to-green-50 p-6 border border-emerald-100"
                    >
                        <h3 class="text-xl font-semibold text-gray-800 mb-4">
                            Commandes pour les migrations
                        </h3>
                        <p class="text-gray-700 mb-3">
                            Toutes ces commandes doivent être exécutées dans le
                            conteneur backend :
                        </p>

                        <div class="space-y-4">
                            <div
                                class="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                            >
                                <div class="font-medium text-gray-800 mb-2">
                                    Créer une migration vide
                                </div>
                                <div
                                    class="bg-gray-800 rounded-lg overflow-hidden"
                                >
                                    <pre
                                        class="text-gray-100 p-3 text-sm overflow-x-auto"
                                    ><code>docker compose exec backend npm run migration:create --name=NomDeLaMigration</code></pre>
                                </div>
                            </div>

                            <div
                                class="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                            >
                                <div class="font-medium text-gray-800 mb-2">
                                    Générer une migration basée sur les
                                    changements d'entités
                                </div>
                                <div
                                    class="bg-gray-800 rounded-lg overflow-hidden"
                                >
                                    <pre
                                        class="text-gray-100 p-3 text-sm overflow-x-auto"
                                    ><code>docker compose exec backend npm run migration:generate --name=NomDeLaMigration</code></pre>
                                </div>
                            </div>

                            <div
                                class="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                            >
                                <div class="font-medium text-gray-800 mb-2">
                                    Exécuter toutes les migrations en attente
                                </div>
                                <div
                                    class="bg-gray-800 rounded-lg overflow-hidden"
                                >
                                    <pre
                                        class="text-gray-100 p-3 text-sm overflow-x-auto"
                                    ><code>docker compose exec backend npm run migration:run</code></pre>
                                </div>
                            </div>

                            <div
                                class="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                            >
                                <div class="font-medium text-gray-800 mb-2">
                                    Annuler la dernière migration appliquée
                                </div>
                                <div
                                    class="bg-gray-800 rounded-lg overflow-hidden"
                                >
                                    <pre
                                        class="text-gray-100 p-3 text-sm overflow-x-auto"
                                    ><code>docker compose exec backend npm run migration:revert</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Dépendances -->
                <div id="dependances" class="mb-16">
                    <h2 class="text-3xl font-bold text-gray-800 mb-6">
                        Gestion des dépendances
                        <div
                            class="w-20 h-1 bg-green-500 mt-2 rounded-full"
                        ></div>
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div
                            class="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                        >
                            <h3
                                class="text-xl font-semibold text-gray-800 mb-4"
                            >
                                Ajouter au frontend
                            </h3>
                            <div class="bg-gray-800 rounded-lg overflow-hidden">
                                <pre
                                    class="text-gray-100 p-4 overflow-x-auto"
                                ><code>docker compose exec frontend npm install &lt;nom_du_package&gt;</code></pre>
                            </div>
                        </div>

                        <div
                            class="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                        >
                            <h3
                                class="text-xl font-semibold text-gray-800 mb-4"
                            >
                                Ajouter au backend
                            </h3>
                            <div class="bg-gray-800 rounded-lg overflow-hidden">
                                <pre
                                    class="text-gray-100 p-4 overflow-x-auto"
                                ><code>docker compose exec backend npm install &lt;nom_du_package&gt;</code></pre>
                            </div>
                        </div>
                    </div>

                    <div
                        class="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200"
                    >
                        <h3
                            class="flex items-center text-xl font-semibold text-gray-800 mb-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 mr-2 text-amber-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            À savoir sur les dépendances
                        </h3>
                        <p class="text-gray-700 mb-4">
                            Avec notre configuration Docker, il
                            <strong>n'est pas nécessaire</strong> d'installer
                            les dépendances en local. Docker s'occupe
                            d'installer et gérer toutes les dépendances à
                            l'intérieur des conteneurs.
                        </p>
                        <p class="text-gray-700">
                            Si vous souhaitez avoir les dépendances en local
                            (pour l'autocomplétion dans votre IDE par exemple) :
                        </p>
                        <div
                            class="bg-gray-800 rounded-lg mt-3 overflow-hidden"
                        >
                            <pre
                                class="text-gray-100 p-4 overflow-x-auto"
                            ><code>cd client
  npm install
  
  cd ../server
  npm install</code></pre>
                        </div>
                    </div>
                </div>

                <!-- Sauvegarde -->
                <div id="sauvegarde" class="mb-16">
                    <h2 class="text-3xl font-bold text-gray-800 mb-6">
                        Sauvegarde et restauration de la base de données
                        <div
                            class="w-20 h-1 bg-green-500 mt-2 rounded-full"
                        ></div>
                    </h2>

                    <p class="text-lg text-gray-700 mb-6">
                        Le projet contient un dossier
                        <code class="bg-gray-100 px-1 py-0.5 rounded text-sm"
                            >db</code
                        >
                        structuré avec les outils nécessaires pour sauvegarder
                        et restaurer la base de données.
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                        <div
                            class="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                        >
                            <div
                                class="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 text-green-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                                    />
                                </svg>
                            </div>
                            <h3
                                class="text-xl font-semibold text-gray-800 mb-3"
                            >
                                Exécuter une sauvegarde
                            </h3>
                            <div
                                class="bg-gray-800 rounded-lg overflow-hidden mb-4"
                            >
                                <pre
                                    class="text-gray-100 p-4 overflow-x-auto"
                                ><code>.\db\script\backup-db.ps1</code></pre>
                            </div>
                            <p class="text-gray-700">Ce script :</p>
                            <ol
                                class="list-decimal pl-5 space-y-1 text-gray-600 mt-2"
                            >
                                <li>
                                    Crée un dossier
                                    <code
                                        class="bg-gray-100 px-1 rounded text-sm"
                                        >db/backups/</code
                                    >
                                    s'il n'existe pas
                                </li>
                                <li>
                                    Génère un dump de la base de données avec un
                                    horodatage
                                </li>
                                <li>
                                    Met à jour
                                    <code
                                        class="bg-gray-100 px-1 rounded text-sm"
                                        >db/dump.sql</code
                                    >
                                    avec la dernière sauvegarde
                                </li>
                            </ol>
                        </div>

                        <div
                            class="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                        >
                            <div
                                class="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                    />
                                </svg>
                            </div>
                            <h3
                                class="text-xl font-semibold text-gray-800 mb-3"
                            >
                                Restaurer la base de données
                            </h3>
                            <div class="bg-gray-800 rounded-lg overflow-hidden">
                                <pre
                                    class="text-gray-100 p-4 overflow-x-auto"
                                ><code>.\db\script\restore-db.ps1</code></pre>
                            </div>
                            <p class="text-gray-700 mt-4">
                                Ce script restaure la base de données à partir
                                du dernier dump disponible dans le répertoire.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Hooks Git -->
                <div id="hooks" class="mb-16">
                    <h2 class="text-3xl font-bold text-gray-800 mb-6">
                        Hooks Git avec Husky
                        <div
                            class="w-20 h-1 bg-green-500 mt-2 rounded-full"
                        ></div>
                    </h2>

                    <p class="text-lg text-gray-700 mb-6">
                        Le projet utilise Husky pour gérer les hooks Git, ce qui
                        permet d'automatiser les vérifications de qualité du
                        code avant chaque commit.
                    </p>

                    <div
                        class="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                    >
                        <h3 class="text-xl font-semibold text-gray-800 mb-4">
                            Configuration actuelle
                        </h3>

                        <div class="space-y-6">
                            <div class="flex">
                                <div
                                    class="rounded-full bg-purple-100 w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 text-purple-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900 mb-2">
                                        Hook pre-commit
                                    </h4>
                                    <ul
                                        class="list-disc pl-5 space-y-1 text-gray-600"
                                    >
                                        <li>
                                            Vérifie que les conteneurs Docker
                                            sont en cours d'exécution
                                        </li>
                                        <li>
                                            Exécute les vérifications de linting
                                            du backend et frontend
                                        </li>
                                        <li>Formate automatiquement le code</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="flex">
                                <div
                                    class="rounded-full bg-indigo-100 w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900 mb-2">
                                        Hook commit-msg
                                    </h4>
                                    <ul
                                        class="list-disc pl-5 space-y-1 text-gray-600"
                                    >
                                        <li>
                                            Vérifie que les messages de commit
                                            respectent les conventions définies
                                        </li>
                                        <li>
                                            Assure la cohérence des messages
                                            pour la gestion de version
                                            automatique
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Versions -->
                <div id="versions" class="mb-16">
                    <h2 class="text-3xl font-bold text-gray-800 mb-6">
                        Gestion des versions
                        <div
                            class="w-20 h-1 bg-green-500 mt-2 rounded-full"
                        ></div>
                    </h2>

                    <p class="text-lg text-gray-700 mb-6">
                        Ce projet suit la convention
                        <a
                            href="https://www.conventionalcommits.org/"
                            class="text-green-600 hover:underline"
                            >Conventional Commits</a
                        >
                        et utilise
                        <a
                            href="https://github.com/googleapis/release-please"
                            class="text-green-600 hover:underline"
                            >Release Please</a
                        >
                        pour automatiser la gestion des versions.
                    </p>

                    <div
                        class="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8"
                    >
                        <h3 class="text-xl font-semibold text-gray-800 mb-4">
                            Types de commits utilisés
                        </h3>

                        <div
                            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                        >
                            <div
                                class="bg-gray-50 rounded p-3 border border-gray-100"
                            >
                                <code
                                    class="bg-green-100 text-green-800 px-2 py-0.5 rounded font-mono"
                                    >feat</code
                                >
                                <span class="ml-2 text-gray-700"
                                    >Nouvelles fonctionnalités</span
                                >
                            </div>

                            <div
                                class="bg-gray-50 rounded p-3 border border-gray-100"
                            >
                                <code
                                    class="bg-red-100 text-red-800 px-2 py-0.5 rounded font-mono"
                                    >fix</code
                                >
                                <span class="ml-2 text-gray-700"
                                    >Corrections de bugs</span
                                >
                            </div>

                            <div
                                class="bg-gray-50 rounded p-3 border border-gray-100"
                            >
                                <code
                                    class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-mono"
                                    >docs</code
                                >
                                <span class="ml-2 text-gray-700"
                                    >Documentation</span
                                >
                            </div>

                            <div
                                class="bg-gray-50 rounded p-3 border border-gray-100"
                            >
                                <code
                                    class="bg-pink-100 text-pink-800 px-2 py-0.5 rounded font-mono"
                                    >style</code
                                >
                                <span class="ml-2 text-gray-700"
                                    >Formatage</span
                                >
                            </div>

                            <div
                                class="bg-gray-50 rounded p-3 border border-gray-100"
                            >
                                <code
                                    class="bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-mono"
                                    >refactor</code
                                >
                                <span class="ml-2 text-gray-700"
                                    >Refactorisation</span
                                >
                            </div>

                            <div
                                class="bg-gray-50 rounded p-3 border border-gray-100"
                            >
                                <code
                                    class="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-mono"
                                    >test</code
                                >
                                <span class="ml-2 text-gray-700">Tests</span>
                            </div>

                            <div
                                class="bg-gray-50 rounded p-3 border border-gray-100"
                            >
                                <code
                                    class="bg-gray-200 text-gray-800 px-2 py-0.5 rounded font-mono"
                                    >chore</code
                                >
                                <span class="ml-2 text-gray-700"
                                    >Maintenance</span
                                >
                            </div>
                        </div>
                    </div>

                    <div
                        class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100"
                    >
                        <h3 class="text-xl font-semibold text-gray-800 mb-4">
                            Incrémentation automatique des versions
                        </h3>

                        <div class="space-y-6">
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <div
                                    class="flex flex-col sm:flex-row sm:items-start"
                                >
                                    <code
                                        class="bg-red-100 text-red-800 px-2 py-0.5 rounded font-mono mt-0.5 mb-2 sm:mb-0 inline-block sm:inline"
                                        >fix</code
                                    >
                                    <div class="sm:ml-4">
                                        <div class="font-medium text-gray-900">
                                            Incrémente la version PATCH
                                        </div>
                                        <div class="text-gray-600 mt-1">
                                            1.0.0 → 1.0.1
                                        </div>
                                        <div
                                            class="mt-2 bg-gray-50 p-3 rounded-lg border border-gray-100 overflow-auto"
                                        >
                                            <pre
                                                class="text-gray-700 text-sm whitespace-pre-wrap sm:whitespace-pre"
                                            ><code>fix(auth): corriger le problème de validation des tokens JWT

Le système ne vérifiait pas correctement l'expiration des tokens,
ce qui pouvait poser des problèmes de sécurité.</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <div
                                    class="flex flex-col sm:flex-row sm:items-start"
                                >
                                    <code
                                        class="bg-green-100 text-green-800 px-2 py-0.5 rounded font-mono mt-0.5 mb-2 sm:mb-0 inline-block sm:inline"
                                        >feat</code
                                    >
                                    <div class="sm:ml-4">
                                        <div class="font-medium text-gray-900">
                                            Incrémente la version MINOR
                                        </div>
                                        <div class="text-gray-600 mt-1">
                                            1.0.0 → 1.1.0
                                        </div>
                                        <div
                                            class="mt-2 bg-gray-50 p-3 rounded-lg border border-gray-100 overflow-auto"
                                        >
                                            <pre
                                                class="text-gray-700 text-sm whitespace-pre-wrap sm:whitespace-pre"
                                            ><code>feat(thread): ajouter la pagination des messages

Implémente une pagination avec 5 messages par page pour
améliorer les performances et l'expérience utilisateur.</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <div
                                    class="flex flex-col sm:flex-row sm:items-start"
                                >
                                    <code
                                        class="bg-green-100 text-green-800 px-2 py-0.5 rounded font-mono mt-0.5 mb-2 sm:mb-0 inline-block sm:inline"
                                        >feat</code
                                    >
                                    <div class="sm:ml-4">
                                        <div class="font-medium text-gray-900">
                                            Avec BREAKING CHANGE: Incrémente la
                                            version MAJOR
                                        </div>
                                        <div class="text-gray-600 mt-1">
                                            1.0.0 → 2.0.0
                                        </div>
                                        <div
                                            class="mt-2 bg-gray-50 p-3 rounded-lg border border-gray-100 overflow-auto"
                                        >
                                            <pre
                                                class="text-gray-700 text-sm whitespace-pre-wrap sm:whitespace-pre"
                                            ><code>feat(api): refondre l'API des messages

BREAKING CHANGE: La structure de l'API a été modifiée.
- GET /api/messages retourne maintenant un objet avec pagination
- Les champs 'author' sont renommés en 'pseudo'
- Format de date modifié de ISO à timestamp</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-16 bg-green-600">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                <h2 class="text-3xl font-bold text-white mb-6">
                    Prêt à développer votre prochain projet ?
                </h2>
                <p class="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                    Rejoignez DevCanvas et bénéficiez d'un environnement de
                    développement optimisé pour créer des applications web
                    performantes.
                </p>
                <a
                    href="/"
                    class="inline-block bg-white hover:bg-green-50 text-green-600 px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                >
                    Retour à l'accueil
                </a>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
};

// Version mobile qui ferme le menu après la navigation
const scrollToSectionMobile = (sectionId) => {
    mobileMenuOpen.value = false;
    setTimeout(() => {
        scrollToSection(sectionId);
    }, 100);
};

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>
