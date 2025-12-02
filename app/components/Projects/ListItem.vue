<template>
  <NuxtLink class="item" to="/">
    <div class="name">Барселона</div>
    <div class="params">
      <span>Резиденция в Agalarov Estate</span>
      <span> · </span>
      <span>Июнь 2026</span>
      <span> · </span>
      <span>1&nbsp;200&nbsp;м²</span>
    </div>
    <div class="photo">
      <img class="photo__img" width="373" height="240" src="~/assets/images/temp/project.jpg" alt="" loading="lazy">
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .params {
    margin-top: 8px;
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: -0.02em;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--color-black-1-2);

    @include xl {
      font-size: 16px;
      padding-bottom: 16px;
    }
  }

  .photo {
    margin-top: 10px;
    overflow: hidden;

    @include xl {
      margin-top: 16px;
    }

    &__img {
      width: 100%;
      transition: transform 200ms;
    }
  }

  .name {
    font-size: 25px;
    line-height: 1;
    letter-spacing: -0.02em;

    @include xl {
      font-size: 27px;
    }
  }

  .item {
    &:hover {
      opacity: 0.8;

      .photo__img {
        transform: scale(1.1);
      }
    }
  }
</style>
