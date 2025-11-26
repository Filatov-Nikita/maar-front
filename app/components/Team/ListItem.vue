<template>
  <article class="item">
    <div class="photo-wrap">
      <img class="w-full" width="680" height="470" :src="photoUrl" :alt="name" loading="lazy">
    </div>
    <h3 class="name">{{ name }}</h3>
    <p class="position">{{ position }}</p>
  </article>
</template>

<script setup lang="ts">
  defineProps<{
    name: string,
    position: string,
    photoUrl: string,
  }>();
</script>

<style scoped lang="scss">
  .item {
    border-bottom: 1px solid var(--color-black-1-2);
    padding-bottom: 10px;
  }

  .name, .position {
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: -0.02em;
  }

  .name {
    margin-top: 10px;
  }

  .position {
    opacity: 0.5;
  }
</style>
