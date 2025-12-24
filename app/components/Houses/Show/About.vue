<template>
  <section class="about">
    <div class="left">
      <TablesParamsAbout class="params" :rows="items" />
    </div>
    <div class="right">
      <div class="content">
        <span class="icon-star">
          <BaseIcon name="star5" fit />
        </span>
        <p class="text1">{{ house.textbold }}</p>
        <p class="text2">{{ house.textlight }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { HouseOne } from '@/repositories/houses';

  const props = defineProps<{
    house: HouseOne,
  }>();

  const items = computed(() => {
    return [
      { label: 'Локация', value: props.house.location },
      { label: 'Удаленность', value: props.house.udal },
      { label: 'Участок', value: props.house.uchastok },
      { label: 'Жилая площадь', value: props.house.ploshad_doma },
      { label: 'Этажей', value: props.house.flors },
      { label: 'Комнат', value: props.house.rooms },
      { label: 'Санузлов', value: props.house.sanuzels },
      { label: 'Этап', value: props.house.etap },
      { label: 'Когда', value: props.house.kogda },
    ];
  });
</script>

<style scoped lang="scss">
  .icon-star {
    display: block;
    width: 14px;
    height: 14px;
    margin-bottom: 20px;
  }

  .about {
    @include row();
    @include gap(0px, 80px);
    @include gap-lg(80px, 80px);
  }

  .left, .right {
    @include col();
    @include size(100%);
    @include size-lg(50%);
  }

  .right {
    @include lg {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .text1 {
    margin-bottom: 30px;
    font-size: 30px;
    line-height: 1;
    letter-spacing: -0.04em;
    max-width: 370px;
    text-wrap: balance;

    @include md {
      max-width: 430px;
    }
  }

  .text2 {
    max-width: 300px;
    margin-left: auto;
    padding-left: 40px;
    font-size: 15px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-wrap: pretty;
    text-indent: 40px;

    @include md {
      max-width: 380px;
    }
  }

  .params {
    @include xl {
      max-width: 500px;
    }
  }

  .content {
    max-width: 400px;

    @include md {
      max-width: 550px;
    }
  }
</style>
