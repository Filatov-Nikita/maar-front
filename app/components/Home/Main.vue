<template>
  <div class="main">
    <h1 class="h1 title">
      Строим элитные резиденции в&nbsp;лучших локациях Москвы и&nbsp;области
    </h1>
    <div class="links">
      <div class="link-item">
        <BaseLinkPrimary href="/">
          Riita
        </BaseLinkPrimary>
      </div>
      <div class="link-item">
        <BaseLinkPrimary href="/">
          Agalarov Estate
        </BaseLinkPrimary>
      </div>
      <div class="link-item">
        <BaseLinkPrimary href="/">
          Gorki
        </BaseLinkPrimary>
      </div>
      <div class="link-item">
        <BaseLinkPrimary href="/">
          Millenium Park
        </BaseLinkPrimary>
      </div>
    </div>
    <div class="poster-block">
      <img class="w-full" width="736" height="876" src="~/assets/images/temp/main-video.jpg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .main {
    padding: 60px 0 30px;
  }

  .title {
    max-width: 500px;
    margin-bottom: 30px;
  }

  .poster-block {
    margin-top: 70px;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    margin: -5px;
  }

  .link-item {
    width: 50%;
    padding: 5px;
  }
</style>
