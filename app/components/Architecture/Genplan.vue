<template>
  <section>
    <div class="grid">
      <div class="col">
        <ArchitectureCard class="block">
          <template #img>
            <BaseImageResp
              class="w-full"
              pictute
              width="740"
              height="1060"
              :url="genplan1"
              loading="lazy"
              :xl="{
                width: '996',
                height: '998',
                url: genplan1xl
              }"
            />
          </template>
          <template #title>Ген.&nbsp;план проекта «Барселона»</template>
          <template #text>
            <p>Архитектурный проект премиальной виллы представляет собой синтез индивидуальной эстетики и&nbsp;функционального совершенства.</p>
          </template>
        </ArchitectureCard>
      </div>
      <div class="col">
        <ArchitectureCard class="block">
          <template #img>
            <BaseImageResp
              class="w-full"
              pictute
              width="740"
              height="1060"
              loading="lazy"
              :url="genplan2"
              :xl="{
                width: '996',
                height: '998',
                url: genplan2xl
              }"
            />
          </template>
          <template #title>Ген.&nbsp;план проекта «Монако»</template>
          <template #text>
            <p>Архитектурный проект премиальной виллы представляет собой синтез индивидуальной эстетики и&nbsp;функционального совершенства.</p>
          </template>
        </ArchitectureCard>
      </div>
    </div>
    <BasePersonaText class="pers-text">
      <p>
        Клиент видит итоговый генеральный план, где&nbsp;архитектура здания и&nbsp;ландшафт участка объединены в&nbsp;единую гармоничную систему: от&nbsp;расположения дома и&nbsp;проездов до&nbsp;детализации мощений и&nbsp;малых форм.
      </p>
    </BasePersonaText>
    <BasePersonaProfile
      class="dir-profile"
      :photoUrl="designer"
      name="Покотилов Ростислав"
      position="Руководитель дизайн-студии"
    />
  </section>
</template>

<script setup lang="ts">
  import genplan1 from '@/assets/images/architecture/genplan-1.jpg';
  import genplan1xl from '@/assets/images/architecture/genplan-1-xl.jpg';
  import genplan2 from '@/assets/images/architecture/genplan-2.jpg';
  import genplan2xl from '@/assets/images/architecture/genplan-2-xl.jpg';
  import designer from '@/assets/images/personas/designer.jpg';
</script>

<style scoped lang="scss">
  .grid {
    @include row();
    @include gap(16px, 16px);
  }

  .col {
    @include col();
    @include size(100%);
    @include size-md(50%);
  }

  .block {
    margin: 0 -16px;

    @include md {
      margin: 0;
    }
  }

  .pers-text {
    --offset: 100px;
    font-size: 23px;
    line-height: 1.2;
    letter-spacing: -0.04em;
    margin-top: 60px;

    @include lg {
      margin-top: 100px;
      max-width: 544px;
    }
  }


  .dir-profile {
    margin-top: 30px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-dark-1-2);
  }
</style>
