<template>
  <NuxtLink class="item" to="/">
    <div v-if="photo" class="img-wrap">
      <img class="img" :width="photo.width" :height="photo.height" :src="photo.url" :alt="title" loading="lazy">
    </div>
    <div class="title">{{ title }}</div>
    <div class="text-wrap">
      <span>{{ categoryName }}</span>
      <span>·</span>
      <span>{{ authorName }}</span>
      <span>·</span>
      <span>{{ createdAt }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  defineProps<{
    photo?: {
      width: number,
      height: number,
      url: string,
    },
    title: string,
    categoryName: string,
    authorName: string,
    createdAt: string,
  }>();
</script>

<style scoped lang="scss">
  .item {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-black-1-2);

    &:hover {
      .title, .img-wrap {
        opacity: 0.5;
      }
    }
  }

  .text-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: 0.01em;
    opacity: 0.5;
  }

  .title {
    margin-bottom: 8px;
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: -0.03em;
  }

  .img-wrap {
    margin-bottom: 16px;
  }

  .img {
    width: 100%;
  }
</style>
