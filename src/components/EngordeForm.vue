<template>
  <form @submit.prevent="handlesubmit" class="p-4">
    <div
      v-if="success"
      class="mv-4 p-3 text-green-800 bg-green-100 border border-green-300 rounded"
    >
      ✅Registro exitoso
    </div>
    <FormInput
      v-model="fecha"
      inputLabel="Fecha"
      inputName="fecha"
      placeholder="Ingrese la fecha"
    />
    <FormInput
      v-model="cantidad"
      inputLabel="cantidad"
      inputName="cantidad"
      placeholder="Ingrese la cantidad de animales"
    />
    <FormInput
      v-model="peso"
      inputLabel="peso"
      inputName="peso"
      placeholder="Ingrese el peso de animales"
    />
    <FormInput
      v-model="precio"
      inputLabel="precio"
      inputName="precio"
      placeholder="Ingrese el precio unidad"
    />
    <BaseButton type="submit"> Registrar</BaseButton>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
import FormInput from './FormInput.vue'
import { useEngordeStore } from '@/stores/forms'

const engordeStore = useEngordeStore()

const fecha = ref('')
const cantidad = ref(0)
const peso = ref(0)
const precio = ref(0)
const success = ref(false)

function handlesubmit() {
  if (!fecha.value || !cantidad.value || !peso.value || !precio.value) {
    engordeStore.addReproducer({
      fecha: fecha.value,
      cantidad: cantidad.value,
      peso: peso.value,
      precio: precio.value,
    })
    fecha.value = null
    cantidad.value = null
    peso.value = null
    precio.value = null
  }
  success.value = true
  setTimeout(() => (success.value = false), 3000)
}
</script>
