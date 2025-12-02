<template>
  <section ref="targetRef">
    <div
      class="grid"
      :class="{
        'op-0': !isIntersect,
        'animate__animated animate__fadeIn': isIntersect,
      }"
    >
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
  const { targetRef, isIntersect } = useIntersect({ threshold: 0.2, once: true });
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
