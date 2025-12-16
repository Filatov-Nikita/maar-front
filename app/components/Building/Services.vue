<template>
  <section>
    <BaseHeaderSec class="title" :size="grid.lg ? 'lg' : 'sm'" design="secondary">
      Услуги
    </BaseHeaderSec>
    <div class="items">
      <article
        class="item"
        v-for="(item, index) in items"
      >
        <div class="item__wrap">
          <div class="item__head">
            <span class="item__index">{{ withZero(index + 1) }}</span>
            <h3 class="item__title" v-html="item.title"></h3>
          </div>
          <div class="item__content">
            <p class="item__text" v-html="item.text"></p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
  const grid = useAppGrid();

  const items = [
    {
      title: 'Топосъемка участка и разбивочные работы',
      text: 'Делаем точный план и размечаем участок под строительство',
    },
    {
      title: 'Полный цикл подготовительных работ',
      text: 'Готовим площадку: подводим коммуникации и оформляем документы',
    },
    {
      title: 'Земляные работы',
      text: 'Роем котлованы и траншеи, выравниваем территорию',
    },
    {
      title: 'Возведение монолитных фундаментов, перекрытий, свай, балок',
      text: 'Создаем прочную основу для здания',
    },
    {
      title: 'Возведение стен и перегородок из блоков, монтаж перекрытий ',
      text: 'Строим стены из блоков и монтируем перекрытия',
    },
    {
      title: 'Возведение стен и перегородок из блоков, монтаж перекрытий ',
      text: 'Строим стены из блоков и монтируем перекрытия',
    },
    {
      title: 'Кровельные работы',
      text: 'Собираем и утепляем крышу под ключ',
    },
    {
      title: 'Фасадные работы',
      text: 'Отделываем и утепляем фасад дома',
    },
  ];
</script>

<style scoped lang="scss">
  .item {
    padding: 32px 0 12px;
    border: 0px solid var(--color-black-1-2);
    border-top-width: 1px;

    @include lg {
      padding: 16px 0 23px;
    }

    &:last-child {
      border-bottom-width: 1px;

      @include lg {
        border-bottom: 0px;
      }
    }

    &__wrap {
      @include lg {
        @include row();
        @include gap(30px, 0px);
      }
    }

    &__head {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 16px;
      margin-bottom: 12px;

      @include lg {
        @include col();
        @include size(50%);
        margin-bottom: 0;
        flex-wrap: nowrap;
      }
    }

    &__content {
      @include lg {
        @include col();
        @include size(50%);
      }
    }

    &__title {
      width: 100%;
      font-size: 23px;
      line-height: 1;
      letter-spacing: -0.03em;

      @include lg {
        width: fit-content;
      }
    }

    &__index {
      opacity: 0.5;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.2;
      letter-spacing: -0.03em;
    }
  }

  .title {
    margin-bottom: 16px;
  }
</style>
