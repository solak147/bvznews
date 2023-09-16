<template>
  <!-- Desktop Header -->
  <header class="hidden w-full items-center bg-white px-6 py-2 sm:flex">
    <div class="w-1/2"></div>
    <div class="relative flex w-1/2 justify-end">
      <button
        class="realtive z-10 h-12 w-12 overflow-hidden rounded-full border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
        @click="isOpen = !isOpen"
      >
        <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
      </button>
      <button
        v-show="isOpen"
        class="fixed inset-0 h-full w-full cursor-default"
        @click="isOpen = false"
      ></button>
      <div v-show="isOpen" class="absolute mt-16 w-32 rounded-lg bg-white py-2 shadow-lg">
        <a href="#" class="account-link block px-4 py-2 hover:text-white">Account</a>
        <a href="#" class="account-link block px-4 py-2 hover:text-white">Support</a>
        <a href="#" class="account-link block px-4 py-2 hover:text-white">Sign Out</a>
      </div>
    </div>
  </header>
</template>

<script setup>
const isOpen = ref(false)
</script>
