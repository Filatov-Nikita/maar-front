<template>
  <main class="page-py">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread-mb" />
      <HousesList class="processing-list" type="4" />
      <HousesList type="5" />
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
