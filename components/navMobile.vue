<template>
  <!-- Mobile Header & Nav -->
  <header x-data="{ isOpen: false }" class="bg-sidebar w-full px-6 py-5 sm:hidden">
    <div class="flex items-center justify-between">
      <a href="index.html" class="text-3xl font-semibold uppercase text-white hover:text-gray-300"
        >Admin</a
      >
      <button class="text-3xl text-white focus:outline-none" @click="isOpen = !isOpen">
        <i v-show="!isOpen" class="fas fa-bars"></i>
        <i v-show="isOpen" class="fas fa-times"></i>
      </button>
    </div>

    <!-- Dropdown Nav -->
    <nav :class="isOpen ? 'flex' : 'hidden'" class="flex flex-col pt-4">
      <a href="index.html" class="active-nav-link nav-item flex items-center py-2 pl-4 text-white">
        <i class="fas fa-tachometer-alt mr-3"></i>
        Dashboard
      </a>
      <a
        href="blank.html"
        class="nav-item flex items-center py-2 pl-4 text-white opacity-75 hover:opacity-100"
      >
        <i class="fas fa-sticky-note mr-3"></i>
        Blank Page
      </a>
      <a
        href="tables.html"
        class="nav-item flex items-center py-2 pl-4 text-white opacity-75 hover:opacity-100"
      >
        <i class="fas fa-table mr-3"></i>
        Tables
      </a>
      <a
        href="forms.html"
        class="nav-item flex items-center py-2 pl-4 text-white opacity-75 hover:opacity-100"
      >
        <i class="fas fa-align-left mr-3"></i>
        Forms
      </a>
      <a
        href="tabs.html"
        class="nav-item flex items-center py-2 pl-4 text-white opacity-75 hover:opacity-100"
      >
        <i class="fas fa-tablet-alt mr-3"></i>
        Tabbed Content
      </a>
      <a
        href="calendar.html"
        class="nav-item flex items-center py-2 pl-4 text-white opacity-75 hover:opacity-100"
      >
        <i class="fas fa-calendar mr-3"></i>
        Calendar
      </a>
      <a
        href="#"
        class="nav-item flex items-center py-2 pl-4 text-white opacity-75 hover:opacity-100"
      >
        <i class="fas fa-cogs mr-3"></i>
        Support
      </a>
      <a
        href="#"
        class="nav-item flex items-center py-2 pl-4 text-white opacity-75 hover:opacity-100"
      >
        <i class="fas fa-user mr-3"></i>
        My Account
      </a>
      <a
        href="#"
        class="nav-item flex items-center py-2 pl-4 text-white opacity-75 hover:opacity-100"
      >
        <i class="fas fa-sign-out-alt mr-3"></i>
        Sign Out
      </a>
      <button
        class="cta-btn mt-3 flex w-full items-center justify-center rounded-lg bg-white py-2 font-semibold shadow-lg hover:bg-gray-300 hover:shadow-xl"
      >
        <i class="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
      </button>
    </nav>
    <!-- <button class="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                <i class="fas fa-plus mr-3"></i> New Report
            </button> -->
  </header>
</template>

<script setup>
const isOpen = ref(false)
</script>
