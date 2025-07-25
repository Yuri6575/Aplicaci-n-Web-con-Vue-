<template>
    <div class="p-6">
        <h2 class="text-2xl font-bold text-orange-600 mb-4">
            <span class="mr-2">🐇</span> Conejos Registrados
        </h2>

        <div v-if="reproducers.length === 0" class="text-gray-500 italic">
            No hay conejos registrados todavía.
        </div>

        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ReproducerCard
                v-for="(reproducer, index) in reproducers"
                :key="index"
                :name="reproducer.name"
                :breed="reproducer.breed"
                :age="reproducer.age"
                :type="reproducer.type"
                :color="reproducer.color" />
        </div>
    </div>
</template>

<script setup>
import { useReproducerStore } from '@/stores/reproducerStore'
import ReproducerCard from '@/components/ReproducerCard.vue'

const store = useReproducerStore()
const reproducers = store.reproducers
</script>

<style scoped>
h2 {
    border-bottom: 2px solid #f97316;
    padding-bottom: 0.5rem;
    display: inline-flex;
    align-items: center;
}
</style>
