<template>
  <div class="houses">
    <BaseHeaderSec class="title" tag="p" :size="grid.lg ? 'xl' : 'lg'" design="primary">
      {{ title }}
    </BaseHeaderSec>
    <div class="items">
      <HousesListItem
        class="items__item"
        name="Майами"
        date="Июн. 2026"
        :photo="{
          width: 918,
          height: 512,
          url: houseImage,
        }"
      />
      <HousesListItem
        class="items__item"
        name="Майами"
        date="Июн. 2026"
        :photo="{
          width: 918,
          height: 512,
          url: houseImage,
        }"
      />
      <HousesListItem
        class="items__item"
        name="Майами"
        date="Июн. 2026"
        :photo="{
          width: 918,
          height: 512,
          url: houseImage,
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import houseImage from '@/assets/images/temp/house.jpg';

  defineProps<{
    title: string,
  }>();

  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 30px;
  }

  .items {
    @include row();
    @include gap(0px, 16px);
    @include gap-md(16px, 30px);

    &__item {
      @include col();
      @include size(100%);
      @include size-md(50%);
      @include size-lg(33.3%);
    }
  }
</style>
