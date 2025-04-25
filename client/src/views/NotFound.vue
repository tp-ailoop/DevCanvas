<template>
    <div
        class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 px-4"
    >
        <div
            class="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100"
        >
            <div class="p-8 text-center">
                <div class="flex justify-center mb-6">
                    <div class="rounded-full bg-green-50 p-6 inline-block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-16 w-16 text-green-600 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                </div>

                <div
                    class="text-8xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-500 inline-block text-transparent bg-clip-text"
                >
                    404
                </div>

                <h1 class="text-2xl font-bold text-gray-800 mb-4">
                    Page non trouvée
                </h1>

                <p class="text-gray-600 mb-8 max-w-xs mx-auto">
                    La page que vous recherchez semble avoir disparu dans le
                    code source ou n'a jamais existé.
                </p>

                <!-- Options de navigation -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <router-link
                        to="/"
                        class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        Retour à l'accueil
                    </router-link>

                    <button
                        class="border border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-800 px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                        @click="goBack"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Page précédente
                    </button>
                </div>

                <!-- Documentation link -->
                <div class="mt-8 text-gray-500 text-sm">
                    Besoin d'aide ? Consultez notre
                    <router-link
                        to="/docs"
                        class="text-green-600 hover:text-green-700 hover:underline transition-colors duration-200"
                    >
                        documentation
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const goBack = () => {
    window.history.length > 1 ? window.history.back() : (window.location = '/');
};
</script>
