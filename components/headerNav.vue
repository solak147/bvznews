<template>
  <aside class="bg-sidebar relative hidden h-screen w-64 shadow-xl sm:block">
    <div class="p-6">
      <a href="index.html" class="text-3xl font-semibold uppercase text-white hover:text-gray-300"
        >Admin</a
      >
      <button
        class="cta-btn mt-5 flex w-full items-center justify-center rounded-bl-lg rounded-br-lg rounded-tr-lg bg-white py-2 font-semibold shadow-lg hover:bg-gray-300 hover:shadow-xl"
      >
        <i class="fas fa-plus mr-3"></i> New Report
      </button>
    </div>
    <nav class="pt-3 text-base font-semibold text-white">
      <a href="index.html" class="active-nav-link nav-item flex items-center py-4 pl-6 text-white">
        <i class="fas fa-tachometer-alt mr-3"></i>
        Dashboard
      </a>
      <a
        href="blank.html"
        class="nav-item flex items-center py-4 pl-6 text-white opacity-75 hover:opacity-100"
      >
        <i class="fas fa-sticky-note mr-3"></i>
        Blank Page
      </a>
      <a
        href="tables.html"
        class="nav-item flex items-center py-4 pl-6 text-white opacity-75 hover:opacity-100"
      >
        <i class="fas fa-table mr-3"></i>
        Tables
      </a>
      <a
        href="forms.html"
        class="nav-item flex items-center py-4 pl-6 text-white opacity-75 hover:opacity-100"
      >
        <i class="fas fa-align-left mr-3"></i>
        Forms
      </a>
      <a
        href="tabs.html"
        class="nav-item flex items-center py-4 pl-6 text-white opacity-75 hover:opacity-100"
      >
        <i class="fas fa-tablet-alt mr-3"></i>
        Tabbed Content
      </a>
      <a
        href="calendar.html"
        class="nav-item flex items-center py-4 pl-6 text-white opacity-75 hover:opacity-100"
      >
        <i class="fas fa-calendar mr-3"></i>
        Calendar
      </a>
    </nav>
    <a
      href="#"
      class="upgrade-btn active-nav-link absolute bottom-0 flex w-full items-center justify-center py-4 text-white"
    >
      <i class="fas fa-arrow-circle-up mr-3"></i>
      Upgrade to Pro!
    </a>
  </aside>
</template>

<style scoped>
.AA {
}
</style>
