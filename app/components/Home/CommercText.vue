<template>
  <section ref="targetRef">
    <div
      class="photo-wrap"
      :class="{
        'op-0': !isIntersect,
        'animate__animated animate__fadeIn': isIntersect,
      }"
    >
      <BaseImageResp
        class="w-full"
        width="738"
        height="880"
        :url="ImageExample"
        alt="Пример интерьера"
        loading="lazy"
        pictute
        :md="{
          width: 2112,
          height: 1041,
          url: ImageExampleXl,
        }"
      />
    </div>
    <BasePersonaText
      class="pers-text"
      :class="{
        'op-0': !isTextIntersect,
        'animate__animated animate__fadeIn': isTextIntersect,
      }"
    >
      <p ref="textRef">
        Maar Development — это лучший сервис, высокое качество строительства и&nbsp;превосходные локации.
      </p>
    </BasePersonaText>
    <BasePersonaProfile
      class="dir-profile"
      :photoUrl="PhotoCommerc"
      name="Коммерческий директор"
      position="Эльза Шагабутдинова"
    />
  </section>
</template>

<script setup lang="ts">
  import PhotoCommerc from '@/assets/images/personas/commerc.jpg';
  import ImageExample from '@/assets/images/home/example2.jpg';
  import ImageExampleXl from '@/assets/images/home/example2-xl.jpg';

  const { targetRef, isIntersect } = useIntersect({ rootMargin: '0px', once: true });
  const { targetRef: textRef, isIntersect: isTextIntersect } = useIntersect({ threshold: 0.5, once: true });
</script>

<style scoped lang="scss">
  .photo-wrap {
    margin-bottom: 50px;

    @include xl {
      margin-bottom: 70px;
    }
  }

  .dir-profile {
    margin-top: 32px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--color-dark-1-2);

    @include xl {
      margin-top: 40px;
      padding-bottom: 26px;
    }
  }

  .text {
    max-width: 457px;
  }

  .pers-text {
    --offset: 75px;
    font-size: 19px;
    line-height: 1.2;
    letter-spacing: -0.04em;

    @include xl {
      font-size: 23px;
      --offset: 120px;
    }
  }
</style>
