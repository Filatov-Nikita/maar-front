<template>
  <section>
    <BaseHeaderSec
      class="title"
      :design="grid.lg ? 'primary' : 'secondary'"
      :size="grid.lg ? 'lg' : 'sm'"
    >
      Похожие участки
    </BaseHeaderSec>
    <Swiper
      :slides-per-view="1.2"
      :space-between="16"
      :breakpoints="{
        [$thresholds.md]: {
          slidesPerView: 2.2,
        },
        [$thresholds.lg]: {
          slidesPerView: 3,
        },
      }"
    >
      <SwiperSlide
        v-for="item in items"
        :key="item.id"
      >
        <AreasListItem class="list-item" :item="item" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
  const props = defineProps<{
    currentId: string,
  }>();

  const grid = useAppGrid();

  const api = useNuxtApp().$api;
  const items = useDataOrFail(
    await useAsyncData(
      () => api.areas.all({ cnt: 3, hideid: props.currentId }),
    ),
  );
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 20px;
  }

  .list-item {
    display: block;
    width: 100%;
  }
</style>
