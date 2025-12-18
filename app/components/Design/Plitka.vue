<template>
  <section>
    <div class="grid">
      <div class="item item-1">
        <BaseImageResp
          class="photo"
          pictute
          width="740"
          height="763"
          :url="design1"
          :md="{
            width: 689,
            height: 720,
            url: design1Xl,
          }"
          loading="lazy"
          alt="Пример дизайна кухни"
        />
      </div>
      <div class="item item-2">
        <BaseImageResp
          class="photo"
          pictute
          width="194"
          height="256"
          :url="design2"
          :md="{
            width: 332,
            height: 720,
            url: design2Xl,
          }"
          loading="lazy"
          alt="Пример дизайна мест хранения"
        />
      </div>
      <div class="item item-3">
        <BaseImageResp
          class="photo"
          pictute
          width="530"
          height="256"
          :url="design3"
          :md="{
            width: 1044,
            height: 720,
            url: design3Xl,
          }"
          loading="lazy"
          alt="Пример дизайнерской лестницы"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import design1 from '@/assets/images/design/plitka/design-1.jpg';
  import design2 from '@/assets/images/design/plitka/design-2.jpg';
  import design3 from '@/assets/images/design/plitka/design-3.jpg';
  import design1Xl from '@/assets/images/design/plitka/design-1-xl.jpg';
  import design2Xl from '@/assets/images/design/plitka/design-2-xl.jpg';
  import design3Xl from '@/assets/images/design/plitka/design-3-xl.jpg';
</script>

<style scoped lang="scss">
  .grid {
    @include row();
    @include gap(8px, 8px);
    @include gap-lg(16px, 8px);
  }

  .item {
    @include col();

    &-1 {
      @include size(100%);
      @include size-lg(33%);
    }

    &-2 {
      @include size(27%);
      @include size-lg(17%);
    }

    &-3 {
      @include size(73%);
      @include size-lg(50%);
    }
  }

  .item :deep(.photo) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
