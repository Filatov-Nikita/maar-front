<template>
  <section>
    <BaseHeaderSec class="title" size="sm" design="secondary">Услуги</BaseHeaderSec>
    <div class="items">
      <ServicesListItem
        class="list-item"
        name="Выбрать<br>строящийся дом"
        linkText="Предложим наши<br>объекты"
        href="#"
      />
      <ServicesListItem
        class="list-item"
        name="Заказать подрядное<br>строительство"
        linkText="Построим дом<br>по вашему проекту"
        href="#"
      />
      <ServicesListItem
        class="list-item"
        name="Заказать дизайн<br>интерьера"
        linkText="Сделаем проект<br>в вашем бюджете"
        href="#"
      />
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 18px;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
  }

  .list-item {
    width: 100%;

    &:first-child {
      border-top-width: 1px;
    }
  }
</style>
