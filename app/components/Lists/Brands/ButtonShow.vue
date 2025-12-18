<template>
  <button class="btn">
    <span class="btn__text">Показать ещё</span>
    <span class="btn__icon">
      <BaseIcon name="arrow-down" fit />
    </span>
  </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .btn {
    width: 100%;
    padding: 8px 0;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 32px;

    &__text {
      font-size: 21px;
      line-height: 1;
      letter-spacing: -0.03em;
      flex-grow: 1;
    }

    &__icon {
      flex-shrink: 0;
      width: 15px;
      height: 19px;
    }
  }
</style>
