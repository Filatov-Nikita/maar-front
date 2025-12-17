<template>
  <div class="materials">
    <div class="items-wrap wrap1">
      <div class="items">
        <article
          class="item"
          v-for="(item, i) in items1"
          :class="[ `item-${i + 1}` ]"
        >
          <div class="line line-down" :style="{ '--h': linesH1[i] }"></div>
          <div class="item__icon">
            <BaseIcon :name="item.icon" fit />
          </div>
          <p class="item__text" v-html="item.text"></p>
        </article>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <img
          class="w-full"
          width="1044"
          height="1104"
          src="@/assets/images/building/house3-xl.jpg"
          alt="фото дома в стиле хайтек"
          loading="lazy"
        />
      </div>
      <div class="right">
        <div class="img-right">
          <img
            class="w-full"
            width="1044"
            height="584"
            src="@/assets/images/building/house2-xl.jpg"
            alt="фото дома в стиле хайтек"
            loading="lazy"
          />
        </div>
        <div class="items-wrap">
          <div class="items">
            <article
              class="item2"
              v-for="(item, i) in items2"
              :class="[ `item2-${i + 1}` ]"
            >
              <div class="line line-up" :style="{ '--h': linesH2[i] }"></div>
              <div class="item2__icon">
                <BaseIcon :name="item.icon" fit />
              </div>
              <p class="item2__text" v-html="item.text"></p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Item {
    icon: string,
    text: string,
  }

  const props = defineProps<{
    items: Item[],
  }>();

  const items1 = computed(() => {
    return props.items.slice(0, 4);
  });

  const items2 = computed(() => {
    return props.items.slice(-2);
  });

  const linesH1 = [ '0.23', '0.33', '0.28', '0.31' ];
  const linesH2 = [ '0.14', '0.23' ];
</script>

<style scoped lang="scss">
  .materials {
    --img-gaps: 32px;
    --img-w: 50vw;
    --img1-mult: 1.06;
    --img2-mult: 0.56;
  }

  .wrap1 {
    --items-mb: 70px;
    margin-bottom: var(--items-mb);
  }

  .content {
    @include row();
    @include gap(16px, 16px);
  }

  .left, .right {
    @include col();
    @include size(50%);
  }

  .right {
    --items-mb: 50px;
  }

  .items-wrap {
    padding-left: 16px;
    padding-right: 45px;
  }

  .items {
    @include row();
    @include gap(20px, 20px);
  }

  .item, .item2 {
    position: relative;
    padding: 0px 12px;
    @include col();


    &__icon {
      width: 40px;
      height: 40px;
      margin-bottom: 8px;
    }

    &__text {
      font-size: 15px;
      line-height: 1.2;
      letter-spacing: -0.03em;
    }
  }

  .item {
    &-1 {
      @include size(32%);
    }

    &-2 {
      @include size(20%);
    }

    &-3 {
      @include size(30%);
    }

    &-4 {
      @include size(18%);
    }

    &-1, &-2 {
      --img-mult: var(--img1-mult);
    }

    &-3, &-4 {
      --img-mult: var(--img2-mult);
    }

    &__text {
      max-width: 200px;
    }
  }

  .item2 {
    &-1 {
      @include size(60%);
    }

    &-2 {
      @include size(40%);
    }

    &-1, &-2 {
      --img-mult: var(--img2-mult);
    }

    &__text {
      max-width: 178px;
    }
  }

  .line {
    --l-color: #C4C4C4;
    position: absolute;
    left: 0;
    width: 1px;
    height: calc(100% + var(--items-mb) + ((var(--img-w) - var(--img-gaps)) * var(--img-mult) * var(--h)));
    background-color: var(--l-color);

    &::after {
      content: '';
      display: block;
      width: 5px;
      height: 5px;
      position: absolute;
      left: -2px;
      border-radius: 50%;
      background-color: var(--l-color);
    }

    &-down {
      top: 0;

      &::after {
        bottom: 0;
      }
    }

    &-up {
      bottom: 0;

      &::after {
        top: 0;
      }
    }
  }

  .img-right {
    margin-bottom: var(--items-mb);
  }
</style>
