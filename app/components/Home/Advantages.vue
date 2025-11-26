<template>
  <section class="advantages">
    <div class="items">
      <article class="item">
        <p class="title">25 <span class="title-sm">лет</span></p>
        <p class="text">в строительстве<br>частных домов </p>
      </article>
      <article class="item">
        <p class="title"><span class="title-sm">топ</span> 100</p>
        <p class="text">арт-директор входит<br>в&nbsp;число лучших в&nbsp;РФ</p>
      </article>
      <article class="item">
        <p class="title">>30</p>
        <p class="text">наград и&nbsp;публикаций в&nbsp;топовых профильных изданиях</p>
      </article>
      <article class="item">
        <p class="title">12</p>
        <p class="text">сильнейших дизайнеров и&nbsp;архитекторов</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .advantages {

  }

  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
  }

  .item {
    padding: 8px;
    width: 50%;
    border-top: 1px solid var(--color-black-1-2);


    &:nth-child(2n) {
      text-align: right;
    }
  }

  .title {
    padding-top: 8px;
    font-size: 50px;
    line-height: 1;
    letter-spacing: -0.04em;
    margin-bottom: 8px;

    &-sm {
      font-size: 30px;
    }
  }

  .text {
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: -0.03em;
    padding-bottom: 62px;
  }
</style>
