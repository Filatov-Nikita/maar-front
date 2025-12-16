<template>
  <section>
    <div class="wrap">
      <div class="row">
        <BaseHeaderSec class="title" size="lg" :design="grid.lg ? 'primary' : 'secondary'">
          Проектирование
        </BaseHeaderSec>
        <div class="items">
          <article
            class="item"
            v-for="(text, index) in items1"
          >
            <span class="item__index">{{ withZero(index + 1) }}</span>
            <p class="item__text">{{ text }}</p>
          </article>
          <div v-if="grid.lg" class="items__decor items__decor-1">
            <img class="w-full" width="496" height="144" src="@/assets/images/building/circles1.svg" alt="кружки" loading="lazy" />
          </div>
        </div>
      </div>
      <div class="row row-2">
        <BaseHeaderSec class="title" size="lg" :design="grid.lg ? 'primary' : 'secondary'">
          Строительство
        </BaseHeaderSec>
        <div class="items">
          <article
            class="item"
            v-for="(text, index) in items2"
          >
            <span class="item__index">{{ withZero(items1.length + index + 1) }}</span>
            <p class="item__text">{{ text }}</p>
          </article>
          <div v-if="grid.lg" class="items__decor items__decor-2">
            <img class="w-full" width="688" height="144" src="@/assets/images/building/circles2.svg" alt="кружки" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const grid = useAppGrid();

  const items1 = [
    'Подбор участка',
    'Разработка концепции объекта',
    'Разработка проектной документации',
    'Экспертиза проекта',
    'Разработка дизайн-проекта интерьера',
  ];

  const items2 = [
    'Строительство объекта',
    'Технадзор и авторский контроль',
    'Отделка, поставка мебели и техники',
    'Благоустройство участка',
    'Вручение ключей',
  ];
</script>

<style scoped lang="scss">
  .title {
    padding-top: 16px;
    margin-bottom: 32px;
    border: 1px solid var(--color-black-1-2);

    @include lg {
      border: 0;
    }
  }

  .items {
    position: relative;

    &__decor {
      position: absolute;
      width: 100%;
      bottom: 0;

      &-1 {
        max-width: 496px;
        left: 30%;
      }

      &-2 {
        right: 0;
        max-width: 688px;
      }
    }
  }

  .item {
    display: flex;
    align-items: center;
    gap: 20px;

    & + & {
      margin-top: 16px;
    }

    &__index, &__text {
      line-height: 1.2;
      letter-spacing: -0.03em;
    }

    &__index {
      opacity: 0.5;
      font-weight: 500;
      font-size: 12px;
    }

    &__text {
      font-size: 15px;
    }
  }

  .row {
    @include lg {
      padding-bottom: 20px;
      border-bottom: 1px solid var(--color-black-1-2);
    }

    & + & {
      margin-top: 50px;

      @include lg {
        margin-top: 150px;
      }
    }

    &-2 {
      @include screen(1280px) {
        display: flex;
        align-items: flex-end;

        .items {
          flex-grow: 1;
        }

        .title {
          width: 20%;
          margin-bottom: 0;
        }
      }
    }
  }
</style>
