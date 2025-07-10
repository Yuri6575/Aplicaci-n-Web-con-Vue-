<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-blue-800 mb-4">📋 Registro de Contacto</h2>

    <div v-if="Contacto.length === 0" class="text-gray-500">No hay registros en la Kardes.</div>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ContactCard
        v-for="(Contact, index) in Contacto"
        :key="index"
        :nombre="Contact.nombre"
        :numero="Contact.numero"
      />
    </div>
  </div>
</template>

<script setup>
import { useContactStore } from '@/stores/forms'
import ContactCard from '@/components/ContactCard.vue'

const store = useContactStore()
const Contacto = store.Contacto
</script>
