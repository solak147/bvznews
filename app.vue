<template>
  <div>
    <NuxtLayout>
      <template #header>
        <NavPC></NavPC>
      </template>

      <div class="flex h-screen w-full flex-col overflow-y-hidden">
        <HeaderCpt></HeaderCpt>
        <NavMobile></NavMobile>
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>
