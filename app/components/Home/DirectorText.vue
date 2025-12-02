<template>
  <section ref="targetRef" class="dir-text">
    <div class="grid">
      <div class="left">
        <div
          class="photo-wrap"
          :class="{
            'op-0': !isIntersect,
            'animate__animated animate__fadeIn': isIntersect,
          }"
        >
          <BaseImageResp
            class="w-full"
            width="740"
            height="548"
            :url="ImageExample"
            alt="Пример интерьера"
            loading="lazy"
            pictute
            :md="{
              width: 1400,
              height: 1041,
              url: ImageExampleXl,
            }"
          />
        </div>
      </div>
      <div class="right">
        <BasePersonaText
          class="pers-text"
          :class="{
            'op-0': !isIntersect,
            'anim-delay-1s animate__animated animate__fadeIn': isIntersect,
          }"
        >
          <p>
            Воплощая в реальность самые смелые идеи и желания, мы органично соединяем технологические инженерные новшества, трендовые направления и материалы.
          </p>
        </BasePersonaText>
        <BasePersonaProfile
          class="dir-profile"
          :photoUrl="PhotoDir"
          name="Генеральный директор"
          position="Насыров Руслан"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import PhotoDir from '@/assets/images/personas/dir.jpg';
  import ImageExample from '@/assets/images/home/example.jpg';
  import ImageExampleXl from '@/assets/images/home/example-xl.jpg';

  const { targetRef, isIntersect } = useIntersect({ threshold: [ 0.3, 0.7 ], once: true });
</script>

<style scoped lang="scss">
  .grid {
    @include gap(0px, 50px);
    @include gap-xl(34px, 0px);
    @include row();

    @include xl {
      align-items: flex-end;
    }
  }

  .left {
    @include col();
    @include size(100%);
    @include size-xl(68%);
  }

  .right {
    @include col();
    @include size(100%);
    @include size-xl(32%);
  }

  .dir-profile {
    margin-top: 32px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--color-dark-1-2);

    @include xl {
      padding-bottom: 0;
      border-bottom-width: 0;
    }
  }

  .pers-text {
    --offset: 75px;
    font-size: 19px;
    line-height: 1.2;
    letter-spacing: -0.04em;

    @include xl {
      font-size: 23px;
      --offset: 90px;
    }
  }
</style>
