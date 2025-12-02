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

      @include xl {
        margin-bottom: 200px;
      }
    }

    &-gallery {
      margin-bottom: 125px;

      @include xl {
        margin-bottom: 140px;
      }
    }

    &-philosophy {
      margin-bottom: 138px;

      @include xl {
        margin-bottom: 220px;
      }
    }

    &-advantages {
      margin-bottom: 20px;

      @include lg {
        margin-bottom: 96px;
      }
    }

    &-commerc {
      margin-bottom: 115px;

      @include xl {
        margin-bottom: 180px;
      }
    }

    &-team {
      margin-bottom: 111px;

      @include xl {
        margin-bottom: 200px;
      }
    }
  }
</style>
