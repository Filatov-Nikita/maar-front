<template>
  <div class="items">
    <template v-for="(item, index) in items">
      <NuxtLink
        class="item"
        v-if="item.to"
        :to="item.to"
      >
        {{ item.name }}
      </NuxtLink>
      <a v-else-if="item.href" :href="item.href">
        {{ item.name }}
      </a>
      <span class="item" v-if="index < items.length - 1">›</span>
    </template>
  </div>
</template>

<script setup lang="ts">
  const { items } = storeToRefs(useBreadcrumbsStore());
</script>

<style scoped lang="scss">
  .items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
  }

  .item {
    padding: 4px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: -0.03em;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
</style>
