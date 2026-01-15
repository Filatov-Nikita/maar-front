<template>
  <div>
    <p v-if="items.length === 0">
      Нет свободных участков
    </p>
    <div v-else class="items">
      <AreasListItem
        class="list-item"
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { AreaItem } from '@/repositories/areas';

  defineProps<{
    items: AreaItem[],
  }>();
</script>

<style scoped lang="scss">
  .items {
    @include row();
    @include gap(16px, 30px);
  }

  .list-item {
    @include col();
    @include size(100%);
    @include size-md(50%);
    @include size-lg(33.3%);
  }
</style>
