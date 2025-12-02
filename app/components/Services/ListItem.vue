<template>
  <component class="item" :is="tag">
    <div class="name" v-html="name"></div>
    <div class="link-wrap">
      <span class="link-text" v-html="linkText"></span>
      <span class="icon">
        <BaseIcon name="arrow-right-middle" fit />
      </span>
    </div>
  </component>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      tag?: string,
      name: string,
      linkText: string,
    }>(),
    { tag: 'a' },
  );
</script>

<style scoped lang="scss">
  .item {
    padding-top: 16px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200px;
    border: 0 solid var(--color-black-1-2);
    border-bottom-width: 1px;
    overflow: hidden;

    @include xl {
      min-height: 300px;
      padding-top: 18px;
      padding-bottom: 18px;
    }

    &:hover {
      opacity: 0.7;

      .icon {
        transform: translateX(var(--hoverOffset));
      }
    }
  }

  .name {
    font-size: 25px;
    line-height: 1;
    letter-spacing: -0.04em;

    @include xl {
      font-size: 30px;
    }
  }

  .icon {
    --hoverOffset: 50px;
    --duration: 500ms;
    transition: transform var(--duration);
    width: 15px;
    height: 12px;

    @include xl {
      --hoverOffset: -50px;
      width: 20px;
      height: 17px;
    }
  }

  .link-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: -0.03em;

    @include xl {
      flex-wrap: wrap;
    }
  }

  .link-text {
    flex-grow: 1;

    @include xl {
      width: 100%;
    }
  }
</style>
