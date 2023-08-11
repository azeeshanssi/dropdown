<template>
  <div id="dropdown" class="relative">
    <button
      @click="isOpen = !isOpen"
      class="cursor-pointer border rounded-lg bg-white p-3 h-10 hover:bg-gray-400 flex items-center justify-between"
    >
      <span class="mr-2">Select Your Tech</span>
      <svg
        :class="{'transform rotate-180': isOpen}"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <div v-if="isOpen" class="absolute mt-2 w-full border bg-white shadow-md rounded-md">
      <span
        v-for="option in options"
        :key="option.id"
        :value="option.id"
        class="block p-2 cursor-pointer hover:bg-gray-200"
        @click="onSelect(option.id)"
      >
        {{ option.title }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';
import { ref } from 'vue';

const props = defineProps(['options']);
const emit = defineEmits(['selected']);
const isOpen = ref(false);

const onSelect = (id) => {
  isOpen.value = !isOpen.value;
  const emitid = id;
  emit('selected', emitid);
};
</script>

<style scoped>
/* #dropdown {
  width: 200px;
} */
</style>
