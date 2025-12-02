<template>
  <section>
    <div class="grid">
      <div class="link-item">
        <ProjectsListItem />
      </div>
      <div class="link-item">
        <ProjectsListItem />
      </div>
    </div>
    <div class="text-center btn-wrap">
      <BaseLinkNext class="w-full-sm" href="/">Все проекты</BaseLinkNext>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .grid {
    @include row();
    @include gap(16px, 30px);
  }

  .link-item {
    @include col();
    @include size(100%);
    @include size-md(50%);
  }

  .btn-wrap {
    margin-top: 24px;

    @include lg {
      margin-top: 140px;
    }
  }
</style>
