<template>
    <form @submit.prevent="handleSubmit" class="space-y-4 bg-white p-6 rounded shadow-md">
        <div v-if="success" class="mb-4 p-3 text-green-800 bg-green-100 border border-green-300 rounded">
            ✅ Conejo registrado exitosamente!
        </div>
        <FormInput v-model="name" inputLabel="Nombre" inputName="name" placeholder="Ingrese nombre" />
        <FormInput v-model="breed" inputLabel="Raza" inputName="breed" placeholder="Ingrese raza" />

        <FormInput v-model="age" inputLabel="Edad" inputName="age" inputType="number" placeholder="Ingrese edad en meses" />

        <div class="mb-4">
            <label for="type" class="block text-sm font-medium text-gray-700">Tipo</label>
            <select v-model="type" id="type" class="w-full border px-3 py-2 rounded">
                <option disabled value="">Seleccione uno</option>
                <option value="male">♂ Macho</option>
                <option value="female">♀ Hembra</option>
            </select>
        </div>

        <div class="mb-4">
            <label for="color" class="block text-sm font-medium text-gray-700">Color</label>
            <input v-model="color" id="color" type="text" class="w-full border px-3 py-2 rounded" placeholder="Ingrese color">
        </div>

        <BaseButton type="submit">Registrar Conejo</BaseButton>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useReproducerStore } from '@/stores/reproducerStore'
import FormInput from './FormInput.vue'
import BaseButton from './BaseButton.vue'

const store = useReproducerStore()

const name = ref('')
const breed = ref('')
const age = ref(null)
const type = ref('')
const color = ref('')

const success = ref(false)

function handleSubmit() {
    if (name.value && breed.value && age.value > 0 && type.value && color.value) {
        store.addReproducer({
            name: name.value,
            breed: breed.value,
            age: age.value,
            type: type.value,
            color: color.value
        })

        // Reset form
        name.value = ''
        breed.value = ''
        age.value = null
        type.value = ''
        color.value = ''
    }

    success.value = true
    setTimeout(() => (success.value = false), 3000)
}
</script>
