<template>
  <section>
    <div class="photo-wrap">
      <img class="w-full" width="738" height="880" src="~/assets/images/home/example2.jpg" alt="Пример интерьера" loading="lazy">
    </div>
    <BasePersonaText>
      <p>
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
</script>

<style scoped lang="scss">
  .photo-wrap {
    margin-bottom: 50px;
  }

  .dir-profile {
    margin-top: 32px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--color-dark-1-2);
  }
</style>
