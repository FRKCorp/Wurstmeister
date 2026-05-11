<script setup lang="ts">

</script>

<template>
  <div class="items">
    <div class="header_button">
      <header>
        <img class="logo_image" src="/logo_wurst.png">
        <h1>WURSTMEISTER-Больше, чем добавки </h1>
        <h3>основа идеального вкуса</h3>
      </header>
      <button class="to_form_button">Смотреть товары</button>
    </div>
    <div class="video">
      <video
      autoplay
      muted
      loop
      playsinline
      class="bg-video"
    >
      <source src="/header_video.mp4" type="video/mp4">
    </video>
    </div>
  </div>

</template>

<style lang="scss" scoped>

  @use "@/styles/styles" as *;
  .items{
    @include display(center, center, 144px, column);
    @include block($height: 698px, $color: linear-gradient(180deg, #000000 40%, #8D580A 100%));
  }
  header{
    @include display(flex-start, flex-start, 0, column);
    background: transparent;
    width: 1650px;
  }
  h1{
    @include fonts($size: 48px,$family: (Rubik Mono One, sans-serif), $weight: 400);
    background: transparent;
  }
  h3{
      @include fonts($size: 40px,$family: (Roboto Condensed, sans-serif), $weight: 400, $transform: lowercase);
      background: transparent;

  }
  .to_form_button{
    @include button(1016px, 66px, 25px, transparent, (3px solid white));
    @include fonts(36px, (Roboto Condensed, sans-serif), $weight: 300, $transform: none,$align: center)
  }



  @media screen and (min-width: 800px)
  {
    .logo_image{
      @include img(105px, 84px, 0px);
      background: transparent;
    }
    h1{
      @include h2();
      width: 534px;
    }
    h3{
      @include fonts($size: 36px,$family: (Roboto Condensed, sans-serif), $weight: 400, $transform: lowercase);
      width: 334px;
    }
  }
  @media screen and (max-width: 1280px)
  {
    header{
      width: 1240px;
    }
    .logo_image{
      @include img(221px, 177px, 0px);
      background: transparent;
    }
  }
</style>