<template>
  <main class="page-py">
    <div class="wrapper">
      <BaseBreadcrumbs class="bread-mb" />
      <h1 class="h1 title">
        Архитектурное проектирование полного цикла. Объединяем дом и&nbsp;пространство вокруг в&nbsp;единое целое.
      </h1>
      <ArchitectureAbout class="arch__about" />
      <ArchitectureStages class="arch__stages" />
      <ArchitectureGenplan class="arch__genplan" />
      <AboutTeam />
    </div>
  </main>
</template>

<script setup lang="ts">
  useBreadcrumbsStore().setPathsNames('index', 'architecture');
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 60px;

    @include lg {
      max-width: 640px;
      margin-bottom: 32px;
    }
  }

  .arch {
    &__about {
      margin-bottom: 80px;

      @include lg {
        margin-bottom: 100px;
      }
    }

    &__stages {
      margin-bottom: 110px;

      @include lg {
        margin-bottom: 200px;
      }
    }

    &__genplan {
      margin-bottom: 85px;

      @include lg {
        margin-bottom: 150px;
      }
    }
  }
</style>
