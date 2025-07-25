<template>
    <button @click="$emit('click')" class="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
        <slot />
    </button>
</template>
