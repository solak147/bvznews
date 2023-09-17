<template>
  <div>
    <NuxtLayout>
      <template #header>
        <NavPC></NavPC>
      </template>

      <div class="flex h-screen w-full flex-col overflow-y-hidden">
        <HeaderCpt></HeaderCpt>
        <NavMobile></NavMobile>
        <NuxtPage :call-alert="callAlert" />

        <!-- 這裡用v-show無法達成浮現後3秒消失  -->
        <AlertCpt v-if="showAlert" :type="alertType" :message="alertMsg"></AlertCpt>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const showAlert = ref(false)
const alertMsg = ref('')
const alertType = ref('')

const callAlert = (type, message) => {
  alertType.value = type
  alertMsg.value = message

  showAlert.value = true
  setTimeout(() => {
    showAlert.value = false
  }, 4000)
}
</script>
