<template>
    <div class="bg-white p-4 rounded shadow">
        <h3 class="text-lg font-bold mb-2">
            {{ name }} <span class="text-sm text-gray-500">({{ typeIcon }})</span>
        </h3>
        <p>🐇 Breed: {{ breed }}</p>
        <p>📆 Age: {{ age }} years</p>
        <p>🔖 Type: {{ type }}</p>
    </div>
</template>

<script setup>
const props = defineProps(['name', 'breed', 'age', 'type'])

const typeIcon = props.type === 'male' ? '♂️' : '♀️'
</script>
