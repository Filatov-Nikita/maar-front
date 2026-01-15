<template>
  <NuxtLink class="item" :to="{ name: 'areas-code', params: { code: item.code } }">
    <Swiper v-if="item.photo.length > 0" :resistanceRatio="0">
      <SwiperSlide
        v-for="image in item.photo"
      >
        <div class="img-wrap">
          <BaseServerImage class="w-full" :image="image" />
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="img-wrap" v-else>
      <BaseServerImage class="w-full" :image="item.photo[0] ?? null" />
    </div>
    <div class="text-wrap">
      <div class="name">{{ item.name }}</div>
      <div class="params">
        <span>{{ item.area }}</span>
        <span>·</span>
        <span>{{ item.mkad }}</span>
        <span>·</span>
        <span>{{ item.location }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { AreaItem } from '@/repositories/areas';

  defineProps<{
    item: AreaItem,
  }>();
</script>

<style scoped lang="scss">
  .item {
    overflow: hidden;

    &:hover .name {
      opacity: 0.7;
    }
  }

  .text-wrap {
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--color-black-1-2);
  }

  .name {
    margin-bottom: 8px;
  }

  .params {
    display: flex;
    gap: 6px;
    white-space: nowrap;
  }

  .name {
    font-size: 25px;
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .params {
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: -0.02em;
  }
</style>
