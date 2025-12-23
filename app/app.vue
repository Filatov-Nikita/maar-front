<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import 'swiper/css';
  import 'animate.css';
</script>

<style lang="scss">
  @use '~/assets/scss/app.scss';
</style>
