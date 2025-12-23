<template>
  <div class="houses">
    <BaseHeaderSec
      class="title"
      tag="h2"
      :size="grid.lg ? 'xl' : 'sm'"
      :design=" grid.lg ? 'primary' : 'secondary'"
    >
      Готовые и строящиеся
    </BaseHeaderSec>
    <Swiper
      :spaceBetween="16"
      :slidesPerView="1.1"
      :breakpoints="{
        [$thresholds.md]: {
          slidesPerView: 1.5,
        },
        [$thresholds.lg]: {
          slidesPerView: 3,
        }
      }"
    >
      <SwiperSlide
        v-for="item in items"
        :key="item.id"
      >
        <HousesListItem :item="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      count?: number,
    }>(),
    { count: 3 },
  );

  const grid = useAppGrid();
  const api = useNuxtApp().$api;
  const res = await useAsyncData(() => api.houses.all({ cnt: props.count }));
  const items = useDataOrFail(res);
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 20px;
  }
</style>
