<template>
  <div>
    <NuxtLayout>
      <template #header>
        <NavPC></NavPC>
      </template>

      <div class="flex h-screen w-full flex-col overflow-y-hidden">
        <HeaderCpt v-if="token"></HeaderCpt>
        <NavMobile></NavMobile>
        <NuxtPage :call-alert="callAlert" />

        <!-- 這裡用v-show無法達成浮現後3秒消失  -->
        <AlertCpt :show-alert-obj="showAlertObj" :type="alertType" :message="alertMsg"></AlertCpt>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const token = useCookie('jwt-token')
const showAlertObj = reactive({ data: false })
const alertMsg = ref('')
const alertType = ref('')

const callAlert = (type, message) => {
  alertType.value = type
  alertMsg.value = message

  showAlertObj.data = true
  setTimeout(() => {
    showAlertObj.data = false
  }, 4000)
}
</script>
