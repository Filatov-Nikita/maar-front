<template>
  <section>
    <BaseHeaderSec class="title" design="secondary" :size="grid.lg ? 'lg' : 'sm'">
      Этапы работы
    </BaseHeaderSec>
    <div class="items">
      <article class="item">
        <div class="item__head">
          <h3 class="item__title">Эскизный<br>проект</h3>
          <span class="item__index">01</span>
        </div>
        <div class="item__content">
          <p>Создаем эскизный облик дома с&nbsp;вариантами фасадов, формируем планировочные решения</p>
        </div>
      </article>
      <article class="item">
        <div class="item__head">
          <h3 class="item__title">Архитектурный<br>проект</h3>
          <span class="item__index">02</span>
        </div>
        <div class="item__content">
          <p>Детализируем архитектурные решения, подбираем материалы, создаем генеральный план с&nbsp;интеграцией ландшафтного дизайна</p>
        </div>
      </article>
      <article class="item">
        <div class="item__head">
          <h3 class="item__title">Конструктивные<br>решения</h3>
          <span class="item__index">03</span>
        </div>
        <div class="item__content">
          <p>Рассчитываем нагрузки и&nbsp;подбираем сечения элементов. Разрабатываем чертежи фундаментов, перекрытий, узлов и&nbsp;армирования</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 20px;
  }

  .items {
    @include row();
    @include gap(0px, 16px);
    @include gap-lg(16px, 0px);
  }

  .item {
    @include col();
    @include size(100%);
    @include size-lg(33.3%);
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 0;
    gap: 20px;
    border: 0px solid var(--color-black-1-2);
    border-top-width: 1px;

    @include lg {
      border-bottom-width: 1px;
      min-height: 460px;
    }

    &:last-child {
      border-bottom-width: 1px;
    }

    &__head {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 10px;
    }

    &__title {
      font-size: 25px;
      line-height: 1;
      letter-spacing: -0.04em;
      flex-grow: 1;

      @include lg {
        font-size: 30px;
      }
    }

    &__index {
      font-weight: 500;

      @include lg {
        width: 100%;
        order: -1;
      }
    }

    &__index, &__content {
      font-size: 15px;
      line-height: 1.2;
      letter-spacing: -0.03em;
    }

    &__content {
      max-width: 337px;

      @include lg {
        max-width: 355px;
      }
    }

    &:first-child &__content {
      @include lg {
        max-width: 284px;
      }
    }
  }
</style>
