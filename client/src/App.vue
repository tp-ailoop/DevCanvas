<template>
    <div class="flex flex-col min-h-screen font-sans text-gray-800 antialiased">
        <Navbar />
        <main class="flex-grow">
            <router-view />
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>
