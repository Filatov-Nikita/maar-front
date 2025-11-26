<template>
  <div>
    <div class="wrapper">
      <HomeMain />
      <HomeProjects class="sec-projects"  />
      <HomeServices class="sec-services" />
      <HomeDirectorText class="sec-dir" />
      <HomeProjectsGallery class="sec-gallery" />
      <HomePhilosophy class="sec-philosophy" />
      <HomeAdvantages class="sec-advantages" />
      <HomeCommercText class="sec-commerc" />
      <HomeTeam class="sec-team" />
    </div>
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: 'MAAR',
  });
</script>

<style scoped lang="scss">
  .sec {
    &-projects {
      margin-bottom: 100px;
    }

    &-services {
      margin-bottom: 60px;
    }

    &-dir {
      margin-bottom: 115px;
    }

    &-gallery {
      margin-bottom: 125px;
    }

    &-philosophy {
      margin-bottom: 138px;
    }

    &-advantages {
      margin-bottom: 20px;
    }

    &-commerc {
      margin-bottom: 115px;
    }

    &-team {
      margin-bottom: 111px;
    }
  }
</style>
