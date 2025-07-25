<template>
  <div class="mb-4">
    <label :for="inputName" class="block text-sm font-medium text-gray-700">
      {{ inputLabel }}
      <span v-if="inputName === 'age'" class="text-xs text-gray-500">(en meses)</span>
    </label>

    <input
      :id="inputName"
      v-model="modelValue"
      :type="inputType || 'text'"
      :name="inputName"
      :placeholder="placeholder"
      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      @input="$emit('update:modelValue', $event.target.value)"
    >

    <div v-if="inputName === 'breed'" class="mt-1 text-xs text-gray-500">
      Cabeza de León, Holandés Enano, Rex, Angora
    </div>

    <div v-if="inputName === 'color'" class="mt-1 text-xs text-gray-500">
      Blanco, Negro, Marrón, Manchado
    </div>
  </div>
</template>

<script setup>
defineProps({
  inputLabel: {
    type: String,
    required: true
  },
  inputName: {
    type: String,
    required: true
  },
  inputType: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>
