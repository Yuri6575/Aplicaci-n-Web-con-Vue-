<template>
  <form @submit.prevent="handlesubmit" class="p-4">
    <div
      v-if="success"
      class="mv-4 p-3 text-green-800 bg-green-100 border border-green-300 rounded"
    >
      ✅Registro exitoso
    </div>
    <ContacForm
      v-model="nombre"
      inputLabel="nombre"
      inputName="nombre"
      placeholder="Ingrese el nombre"
    />
    <ContacForm
      v-model="numero"
      inputLabel="numero"
      inputName="numero"
      placeholder="Ingrese su numero de telefono"
    />
  <BaseButton type="submit"> Registrar</BaseButton>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
import ContacForm from './ContacForm.vue'
import { useContactStore } from '@/stores/forms'

const contactStore = useContactStore()

const nombre = ref('')
const numero = ref(0)
const success = ref(false)

function handlesubmit() {
  if (!nombre.value || !numero.value ) {
    ContactStore.addReproducer({
      nombre: nombre.value,
      numero: numero.value,
    })
    nombre.value = null
    numero.value = null
    }
  success.value = true
  setTimeout(() => (success.value = false), 3000)
}
</script>
