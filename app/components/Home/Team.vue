<template>
  <section ref="targetRef">
    <BaseHeaderSec class="title" :size="grid.lg ? 'lg' : 'md'">
      Команда и экспертиза
    </BaseHeaderSec>
    <TeamList
      :class="{
        'op-0': !isIntersect,
        'animate__animated animate__fadeInRight': isIntersect,
      }"
    />
    <div
      ref="targetRef2"
      class="text-body"
      :class="{
        'op-0': !isIntersect2,
        'animate__animated animate__fadeIn': isIntersect2,
      }"
    >
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
  const { targetRef, isIntersect } = useIntersect({ rootMargin: '-100px', once: true });
  const { targetRef: targetRef2, isIntersect: isIntersect2  } = useIntersect({ threshold: 0.5, once: true });
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
