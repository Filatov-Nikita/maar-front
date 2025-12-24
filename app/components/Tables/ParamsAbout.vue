<template>
  <div>
    <BaseHeaderSec class="title" tag="h2" :size="grid.lg ? 'lg' : 'sm'" design="secondary">
      Описание
    </BaseHeaderSec>
    <div class="grid">
      <div class="row"
        v-for="row in rows"
      >
        <div class="cols">
          <div class="col">{{ row.label }}</div>
          <div class="col">{{ row.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Row {
    label: string,
    value: string,
  }

  defineProps<{
    rows: Row[],
  }>();

  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 16px;

    @include lg {
      margin-bottom: 20px;
    }
  }

  .row {
    padding: 8px 0px;
    border: 0px solid var(--color-dark-1-2);
    border-top-width: 1px;

    &:last-child {
      border-bottom-width: 1px;
    }
  }

  .cols {
    @include row();
    @include gap(20px, 0px);
  }

  .col {
    @include col();
    @include size(50%);
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.02em;
  }
</style>
