<template>
    <div class="min-h-screen bg-gray-100">
        <header class="bg-orange-600 text-white px-6 py-4">
            <RouterLink to="/reproducers" class="flex items-center gap-2">
                <h1 class="text-xl font-bold">🐇 Gestión de Conejos</h1>
            </RouterLink>
        </header>

        <nav class="bg-white shadow px-6 py-2 flex gap-4">
            <RouterLink to="/reproducers" class="text-orange-700 hover:underline py-1 px-2 rounded transition-colors"
                :class="{ 'font-bold bg-orange-50': $route.path === '/reproducers' }">
                📋 Listado
            </RouterLink>
            <RouterLink to="/reproducers/register" class="text-orange-700 hover:underline py-1 px-2 rounded transition-colors"
                :class="{ 'font-bold bg-orange-50': $route.path === '/reproducers/register' }">
                ➕ Registrar
            </RouterLink>
        </nav>

        <main class="p-6">
            <!-- Aquí se cargan las vistas hijas -->
            <RouterView />
        </main>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
</script>

<style scoped>
.router-link-active {
    @apply font-bold bg-orange-50;
}

nav a:hover {
    @apply bg-orange-100;
}
</style>
