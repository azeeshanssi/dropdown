<template>
  <select @change="onselect" id="opt" class="cursor-pointer border rounded-md py-2 px-3 h-10">
    <option value="default" disabled selected>Select an option</option>
    <option v-for="option in options" :key="option.id" :value="options.id">
      {{ option.title }}
    </option>
  </select>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'
const props = defineProps(['options'])
const emit = defineEmits(['selected'])
const onselect = (event) => {
  const emitid = event.target.value
  emit('selected', emitid)
}
</script>
