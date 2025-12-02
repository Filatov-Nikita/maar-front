<template>
  <div class="text">
    <div class="icon-wrap">
      <span class="icon">
        <BaseIcon name="kavichka" fit />
      </span>
    </div>
    <div class="text-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .text {}

  .text-wrap {
    text-indent: var(--offset);
  }

  .icon-wrap {
    padding-left: var(--offset);
    margin-bottom: 12px;
  }

  .icon {
    display: block;
    width: 12px;
    height: 11px;
  }
</style>
