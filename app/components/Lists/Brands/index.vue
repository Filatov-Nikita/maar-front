<template>
  <div class="list">
    <div
      class="row"
      v-for="row in rows"
    >
      <div class="content">
        <p class="name">{{ row.name }}</p>
        <p class="country">{{ row.country }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Row {
    name: string,
    country: string,
  }

  defineProps<{
    rows: Row[],
  }>();
</script>

<style scoped lang="scss">
  .content {
    @include row();
    @include gap(16px, 0px);
    font-size: 16px;
    line-height: 1.1;
    letter-spacing: -0.02em
  }

  .name, .country {
    @include col();
    @include size(50%);
  }

  .country {
    opacity: 0.5;
  }

  .row {
    border-top: 1px solid var(--color-black-1-2);
    padding: 12px 0;

    @include lg {
      padding: 8px 0;
    }
  }
</style>
