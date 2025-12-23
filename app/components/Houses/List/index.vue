<template>
  <div class="houses">
    <BaseHeaderSec class="title" tag="p" :size="grid.lg ? 'xl' : 'lg'" design="primary">
      {{ type === '4' ? 'Готовые' : 'Строящиеся' }}
    </BaseHeaderSec>
    <div class="items">
      <HousesListItem
        v-for="item in items"
        :key="item.id"
        class="items__item"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { AllParams } from '@/repositories/houses';

  const props = defineProps<{
    type: Exclude<AllParams['type'], undefined>,
  }>();

  const grid = useAppGrid();

  const api = useNuxtApp().$api;

  const key = computed(() => `list-type-${props.type}`);
  const res = await useAsyncData(key, () => api.houses.all({ type: props.type }));
  const items = useDataOrFail(res);
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
