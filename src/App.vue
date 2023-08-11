<template>
  <div class="bg-slate-200 w-screen h-screen text-gray-600 flex items-center justify-center">
    <div id="card" class="bg-blue-100 w-4/5 h-2/3 flex rounded-md overflow-hidden shadow-md">
      <div id="dropdown" class="flex-1 flex flex-col items-center justify-center h-full">
        <header class="">
          <h1 class="mb-2 text-3xl text-gray-800 font-medium">Choose Value</h1>
        </header>
        <DropDown :options="options" @selected="onSelection"></DropDown>
      </div>
      <div class="flex-1 h-full flex flex-col items-center justify-center bg-green-200">
        <h1 class="text-3xl text-gray-800 font-medium mb-2">Your Chosen Value is:</h1>
        <div v-if="id!=null" id="selected">{{ options[id-1].title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DropDown from './components/DropDown.vue'
import { ref } from 'vue'
//dropdown
const options = [
  { id: 1, title: 'Ruby on Rails' },
  { id: 2, title: 'Vue.js' },
  { id: 3, title: 'Tailwind CSS' },
  { id: 4, title: 'Node JS' }
]
//id display
const id = ref(null)
const onSelection = (iid) => {
  id.value = iid
}
</script>
