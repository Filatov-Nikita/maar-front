<template>
  <section>
    <BaseHeaderSec class="title" :size="grid.lg ? 'xl' : 'md'">
      Галерея проектов
    </BaseHeaderSec>
    <ProjectsGalleryList />
  </section>
</template>

<script setup lang="ts">
  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 25px;

    @include lg {
      margin-bottom: 30px;
    }
  }
</style>
