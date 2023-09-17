<template>
  <LoginCpt :call-alert="props.callAlert"></LoginCpt>
</template>

<script setup>
definePageMeta({
  layout: 'empty'
})

const props = defineProps({
  callAlert: {
    type: Function,
    default: null
  }
})
</script>
