<template>
  <section>
    <BaseHeaderSec class="title" :size="grid.lg ? 'lg' : 'md'">
      Команда и экспертиза
    </BaseHeaderSec>
    <TeamList />
    <div class="text-body">
      <p class="text1">
        Высокая квалификация компетенции специалистов позволяют работать с&nbsp;любыми материалами и&nbsp;технологиями.
      </p>
      <p class="text2">
        Организация строительного процесса, современная техника и&nbsp;инструменты, качество строительно-монтажных работ позволяют нам&nbsp;точно следовать срокам и&nbsp;гарантировать долговечность вашего дома.
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
  }

  .text-body {
    margin-top: 114px;
  }

  .text1 {
    font-size: 25px;
    line-height: 1;
    letter-spacing: -0.04em;
    text-align: right;
    margin-bottom: 22px;

    @include lg {
      font-size: 27px;
      max-width: 510px;
      margin-left: auto;
      text-indent: 190px;
      text-align: left;
    }
  }

  .text2 {
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: -0.03em;
    max-width: 272px;

    @include lg {
      text-align: right;
      margin-left: auto;
      max-width: 340px;
    }
  }
</style>
