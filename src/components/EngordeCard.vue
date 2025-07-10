<template>
  <div class="bg-white p-4 rounded shadow">
    <h3 class="text-lg font-bold mb-2">
      {{ name }} <span class="text-sm text-gray-500">({{ typeIcon }})</span>
    </h3>
    <p>📅 fecha: {{ fecha }}</p>
    <p>🤏 cantidad {{ cantidad }}</p>
    <p>⚖ peso: {{ peso }}</p>
    <p>💲precio: {{ precio }}</p>
  </div>
</template>

<script setup></script>
