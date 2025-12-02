<template>
  <section ref="targetRef">
    <BaseHeaderSec class="title" design="secondary" :size="grid.lg ? 'lg' : 'sm'">
      Философия
    </BaseHeaderSec>
    <div class="text-body">
      <p
        class="text1"
        :class="{
          'op-0': !isIntersect,
          'animate__animated animate__fadeIn': isIntersect,
        }"
      >
        Мы создаём уникальные пространства для&nbsp;жизни, где в&nbsp;центре — человек, его&nbsp;состояние и&nbsp;ощущение. Мы&nbsp;вкладываем душу в&nbsp;каждый элемент и&nbsp;продумываем всё до&nbsp;мелочей
      </p>
      <p
        class="text2"
        :class="{
          'op-0': !isIntersect,
          'anim-delay-1s animate__animated animate__fadeIn': isIntersect,
        }"
      >
        Нам важно, как&nbsp;человек будет чувствовать себя в&nbsp;построенном нами доме. Наши продукты отличаются максимальной комплектацией и&nbsp;зачастую превосходят продукты конкурентов.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
  const grid = useAppGrid();
  const { targetRef, isIntersect } = useIntersect({ threshold: [ 0.6, 0.9 ], once: true });
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 125px;
    padding-top: 12px;
    border-top: 1px solid var(--color-dark-1-2);

    @include lg {
      padding-top: 24px;
      margin-bottom: 180px;
    }
  }

  .text-body {
    @include lg {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-end;
      gap: 33px;
    }
  }

  .text1 {
    width: 100%;
    font-size: 25px;
    line-height: 1;
    letter-spacing: -0.04em;
    margin-bottom: 20px;
    text-align: right;

    @include lg {
      font-size: 30px;
      max-width: 689px;
      margin-bottom: 0px;
    }
  }

  .text2 {
    width: 100%;
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: -0.03em;
    max-width: 272px;

    @include lg {
      max-width: 337px;
    }
  }
</style>
