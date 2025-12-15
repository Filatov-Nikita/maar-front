<template>
  <section>
    <h2 class="title">
      Комплектуем интерьеры исключительно оригинальной техникой и&nbsp;мебелью европейских брендов. Не&nbsp;используем реплики.
    </h2>
    <div class="items">
      <Transition
        v-for="rows in colsList"
        appear
        name="anim"
      >
        <div class="item">
          <div
            class="row"
            v-for="row in rows"
          >
            <div class="content">
              <p class="name">{{ row.name }}</p>
              <p class="country">{{ row.country }}</p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
    <div class="btn-wrap" v-if="!grid.lg && showedCols < cols.length">
      <button class="btn" @click="showMore">
        <span class="btn__text">Показать ещё</span>
        <span class="btn__icon">
          <BaseIcon name="arrow-down" fit />
        </span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
  const items = [
    {
      name: 'Minotti',
      country: 'Италия',
    },
    {
      name: 'Poltrona Frau',
      country: 'Италия',
    },
    {
      name: 'B&B Italia',
      country: 'Италия',
    },
    {
      name: 'Cassina',
      country: 'Италия',
    },
    {
      name: 'Flexform',
      country: 'Италия',
    },
    {
      name: 'Ligne Roset',
      country: 'Франция',
    },
    {
      name: 'Roche Bobois',
      country: 'Франция',
    },
    {
      name: 'Vitra',
      country: 'Швейцария',
    },
    {
      name: 'Carl Hansen & Søn',
      country: 'Дания',
    },
    {
      name: 'Fredericia',
      country: 'Дания',
    },
    {
      name: 'Gaggenau',
      country: 'Германия',
    },
    {
      name: 'Bulthaup',
      country: 'Германия',
    },
    {
      name: 'Porro',
      country: 'Италия',
    },
    {
      name: 'Moroso',
      country: 'Италия',
    },
    {
      name: 'Arper',
      country: 'Италия',
    },
    {
      name: '&Tradition',
      country: 'Дания',
    },
    {
      name: 'Louis Poulsen',
      country: 'Дания',
    },
    {
      name: 'Poliform',
      country: 'Италия ',
    },
    {
      name: 'Miele',
      country: 'Германия',
    },
    {
      name: 'Siemens',
      country: 'Германия',
    },
    {
      name: 'AEG',
      country: 'Германия',
    },
    {
      name: 'Smeg',
      country: 'Италия',
    },
    {
      name: 'Ilve',
      country: 'Италия',
    },
    {
      name: 'Britannia',
      country: 'Великобритания',
    },
    {
      name: 'Falcon',
      country: 'Великобритания',
    },
    {
      name: 'Lacanche',
      country: 'Франция',
    },
    {
      name: 'De Dietrich',
      country: 'Франция',
    },
  ];

  const grid = useAppGrid();

  const cols = computed(() => {
    let i = 0;
    const step = Math.ceil(items.length / 3);
    let list: Array<typeof items> = [];
    while(i < items.length) {
      list.push(items.slice(i, i + step));
      i += step;
    }
    return list;
  });

  const showedCols = ref(1);

  const colsList = computed(() => {
    if(grid.value.lg) return cols.value;
    return cols.value.slice(0, showedCols.value);
  });

  function showMore() {
    showedCols.value = Math.min(cols.value.length, showedCols.value + 1);
  }
</script>

<style scoped lang="scss">
  .title {
    font-weight: 400;
    font-size: 30px;
    line-height: 1;
    letter-spacing: -0.04em;
    margin-bottom: 45px;

    @include lg {
      max-width: 600px;
      margin-left: auto;
      text-indent: 240px;
    }
  }

  .items {
    @include row();
    @include gap(0px, 0px);
    @include gap-lg(16px, 0px);
  }

  .item {
    @include col();
    @include size(100%);
    @include size-lg(33.3%);
  }

  .content {
    @include row();
    @include gap(16px, 0px);
    font-size: 16px;
    line-height: 1.1;
    letter-spacing: -0.02em
  }

  .name, .country {
    @include col();
    @include size(50%);
  }

  .country {
    opacity: 0.5;
  }

  .row {
    border-top: 1px solid var(--color-black-1-2);
    padding: 12px 0;

    @include lg {
      padding: 8px 0;
    }
  }

  .btn-wrap {
    margin-top: 16px;
  }

  .btn {
    width: 100%;
    padding: 8px 0;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 32px;

    &__text {
      font-size: 21px;
      line-height: 1;
      letter-spacing: -0.03em;
      flex-grow: 1;
    }

    &__icon {
      flex-shrink: 0;
      width: 15px;
      height: 19px;
    }
  }

  .anim {
    &-enter-active {
      animation-name: fadeInUp;
      animation-duration: 800ms;
    }
  }
</style>
