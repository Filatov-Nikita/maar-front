<template>
  <article class="item">
    <div class="img-wrap">
      <slot name="img"></slot>
    </div>
    <div class="content">
      <p class="title">
        <slot name="title"></slot>
      </p>
      <div class="text">
        <slot name="text"></slot>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .item {
    padding: 16px;
    padding-bottom: 48px;
    background-color: var(--color-white);
  }

  .img-wrap {
    margin-bottom: 16px;
  }

  .text {
    margin-top: 6px;
    opacity: 0.5;

    @include lg {
      max-width: 331px;
    }
  }

  .title, .text {
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }
</style>
