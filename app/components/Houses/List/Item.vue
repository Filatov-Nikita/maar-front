<template>
  <NuxtLink class="item" :to="{ name: 'houses-code', params: { code: item.code } }">
    <div class="img-wrap">
      <BaseServerImage
        class="w-full"
        :image="photo"
        :alt="item.name"
        loading="lazy"
      />
    </div>
    <div class="name">{{ item.name }}</div>
    <div class="location">{{ item.location }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { HouseItem } from '@/repositories/houses';

  const props = defineProps<{
    item: HouseItem,
  }>();

  const photo = computed(() => {
    if(props.item.photo.length <= 0) return null;
    return props.item.photo[0] ?? null;
  });
</script>

<style scoped lang="scss">
  .item {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-black-1-2);
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

  .location {
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: -0.02em;
  }
</style>
