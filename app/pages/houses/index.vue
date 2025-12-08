<template>
  <main class="page-py">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread-mb" />
      <HousesList class="processing-list" title="Готовые" />
      <HousesList title="Строящиеся" />
    </div>
  </main>
</template>

<script setup lang="ts">
  useBreadcrumbsStore().setPathsNames('index', 'houses');
</script>

<style scoped lang="scss">
  .processing-list {
    margin-bottom: 74px;

    @include lg {
      margin-bottom: 150px;
    }
  }
</style>
