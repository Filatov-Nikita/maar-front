<template>
  <NuxtLink class="item" to="/">
    <div class="img-wrap">
      <img class="w-full" :width="photo.width" :height="photo.height" :src="photo.url" loading="lazy" :alt="name" />
    </div>
    <div class="name">{{ name }}</div>
    <div class="date">{{ date }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">
  defineProps<{
    photo: {
      width: number,
      height: number,
      url: string,
    },
    name: string,
    date: string,
  }>();
</script>

<style scoped lang="scss">
  .item {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-black-1-2);

    &:hover {
      opacity: 0.7;
    }
  }

  .img-wrap {
    margin-bottom: 10px;
  }

  .name {
    font-size: 25px;
    line-height: 1;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
  }

  .date {
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: -0.02em;
  }
</style>
