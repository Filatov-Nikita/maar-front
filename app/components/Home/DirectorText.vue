<template>
  <section>
    <div class="photo-wrap">
      <img class="w-full" width="740" height="548" src="~/assets/images/home/example.jpg" alt="Пример интерьера" loading="lazy">
    </div>
    <BasePersonaText>
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
  </section>
</template>

<script setup lang="ts">
  import PhotoDir from '@/assets/images/personas/dir.jpg';
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
