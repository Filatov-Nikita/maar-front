<template>
  <section>
    <BaseHeaderSec class="title" tag="h2" design="secondary" :size="grid.md ? 'lg' : 'sm'">
      Планировка
    </BaseHeaderSec>
    <HousesFloor
      class="plan__floor"
      :floorNumber="1"
      :places="house['1floor_elements']"
      :floorMapImg="house['1floor_map']"
      :gallery="house['1floor_galery']"
    />
    <HousesFloor
      class="plan__floor"
      :floorNumber="2"
      :places="house['2floor_elements']"
      :floorMapImg="house['2floor_map']"
      :gallery="house['2floor_galery']"
    />
  </section>
</template>

<script setup lang="ts">
  import type { HouseOne } from '@/repositories/houses';

  defineProps<{
    house: HouseOne,
  }>();

  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 14px;

    @include lg {
      margin-bottom: 24px;
    }
  }

  .plan {
    &__floor {
      & + & {
        margin-top: 85px;

        @include lg {
          margin-top: 150px;
        }
      }
    }
  }
</style>
