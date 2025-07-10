<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-blue-800 mb-4">📋 Registro Kardes</h2>

    <div v-if="Engorde.length === 0" class="text-gray-500">No hay registros en la Kardes.</div>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <EngordeCard
        v-for="(engorde, index) in Engorde"
        :key="index"
        :fecha="engorde.fecha"
        :cantidad="engorde.cantidad"
        :peso="engorde.peso"
        :precio="engorde.precio"
      />
    </div>
  </div>
</template>

<script setup>
import { useEngordeStore } from '@/stores/forms'
import EngordeCard from '@/components/EngordeCard.vue'

const store = useEngordeStore()
const Engorde = store.Engorde
</script>
