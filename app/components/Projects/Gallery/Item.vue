<template>
  <NuxtLink class="item" to="/">
    <div class="photo-wrap">
      <img class="w-full" width="918" height="582" :src="photoUrl" :alt="name" loading="lazy" />
    </div>
    <div class="text-body">
      <div class="name">{{ name }}</div>
      <div class="period">{{ period }}</div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  defineProps<{
    name: string,
    period: string,
    photoUrl: string,
  }>();
</script>

<style scoped lang="scss">
  .item {
    padding-bottom: 10px;
    border-bottom: 1px solid var(--color-black-1-2);

    &:hover {
      opacity: 0.8;
    }
  }

  .text-body {
    margin-top: 10px;
  }

  .name {
    margin-bottom: 8px;
    font-size: 25px;
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .period {
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: -0.02em;
  }
</style>
