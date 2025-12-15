<template>
  <section class="team">
    <BaseHeaderSec class="title" :size="grid.lg ? 'lg' : 'md'">
      Команда и экспертиза
    </BaseHeaderSec>
    <TeamList />
    <div class="content">
      <p class="content__title">25</p>
      <p class="content__text">
        лет опыт команды в&nbsp;строительстве частной загородной недвижимости
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 22px;

    @include lg {
      margin-bottom: 40px;
    }
  }

  .team {
    position: relative;
  }

  .content {
    margin-top: 47px;
    max-width: 230px;
    width: 100%;

    @include lg {
      text-align: right;
      position: absolute;
      right: 0;
      z-index: 1;
      bottom: 70px;
      margin-top: 0;
    }

    &__title {
      margin-bottom: 4px;
      font-size: 100px;
      line-height: 1;
      letter-spacing: -0.04em;
    }

    &__text {
      font-size: 15px;
      line-height: 1.2;
      letter-spacing: -0.03em;
    }
  }
</style>
