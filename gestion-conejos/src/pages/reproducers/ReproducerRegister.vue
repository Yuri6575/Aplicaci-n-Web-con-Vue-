<template>
    <div class="max-w-2xl mx-auto p-6">
        <h2 class="text-2xl font-bold text-orange-600 mb-6">
            <span class="mr-2">🐇</span> Registrar Nuevo Conejo
        </h2>

        <ReproducerForm />

        <router-link to="/reproducers" class="mt-6 inline-block text-sm text-orange-700 hover:underline">
            ← Volver al listado
        </router-link>
    </div>
</template>

<script setup>
import ReproducerForm from '@/components/ReproducerForm.vue'
</script>

<style scoped>
h2 {
    border-bottom: 2px solid #f97316;
    padding-bottom: 0.5rem;
}
</style>
