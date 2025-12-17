<template>
  <section>
    <BaseHeaderSec
      class="title"
      :size="grid.lg ? 'lg' : 'sm'"
      :design="grid.lg ? 'primary' : 'secondary'"
    >
      Материалы
    </BaseHeaderSec>
    <BuildingMaterialsContentLarge v-if="grid.lg" :items="items" />
    <BuildingMaterialsContentMobile v-else :items="items" />
  </section>
</template>

<script setup lang="ts">
  const grid = useAppGrid();

  const items = [
    {
      icon: 'frames',
      text: 'Стеклянные фасадные кассеты из&nbsp;закаленного триплекса',
    },
    {
      icon: 'star4',
      text: 'Вентилируемый фасад из&nbsp;керамогранита крупного формата',
    },
    {
      icon: 'stars-quatro',
      text: 'Облицовка плиткой из&nbsp;натурального сланца или&nbsp;кварцита',
    },
    {
      icon: 'geometry',
      text: 'Штукатурка на&nbsp;известковой основе с&nbsp;фасадной краской класса премиум',
    },
    {
      icon: 'plitka',
      text: 'Брусчатка из&nbsp;гранита сколотой или&nbsp;пилено-колотой фактуры',
    },
    {
      icon: 'stars-double',
      text: 'Солитеры из&nbsp;стриженных деревьев топиарной формы',
    },
  ];
</script>

<style scoped lang="scss">
  .title {
    padding-bottom: 16px;
    margin-bottom: 40px;
    border-bottom: 1px solid var(--color-black-1-2);

    @include lg {
      padding-bottom: 0;
      border: 0;
    }
  }
</style>
