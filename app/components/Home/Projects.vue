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
    display: flex;
    flex-wrap: wrap;
    margin: -15px;
  }

  .link-item {
    padding: 15px;
    width: 100%;
  }

  .btn-wrap {
    margin-top: 24px;
  }
</style>
