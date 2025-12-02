<template>
  <section>
    <BaseHeaderSec class="title" :size="grid.lg ? 'lg' : 'sm'" design="secondary">
      Услуги
    </BaseHeaderSec>
    <div class="items">
      <div class="item-wrap">
        <ServicesListItem
          class="list-item"
          name="Выбрать<br>строящийся дом"
          linkText="Предложим наши<br>объекты"
          href="#"
        />
      </div>
      <div class="item-wrap">
        <ServicesListItem
          class="list-item"
          name="Заказать подрядное<br>строительство"
          linkText="Построим дом<br>по вашему проекту"
          href="#"
        />
      </div>
      <div class="item-wrap">
        <ServicesListItem
          class="list-item"
          name="Заказать дизайн<br>интерьера"
          linkText="Сделаем проект<br>в вашем бюджете"
          href="#"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 18px;

    @include lg {
      margin-bottom: 24px;
    }
  }

  .items {
    @include row();
    @include gap(30px, 30px);
  }

  .item-wrap {
    @include col();
    @include size(100%);
    @include size-xl(33.3%);
  }

  .list-item {
    @include xl {
      border-top-width: 1px;
    }
  }

  .item-wrap:first-child .list-item {
    border-top-width: 1px;
  }
</style>
