<script setup lang="ts">

</script>

<template>
  <div class="items">
    <video autoplay muted loop playsinline preload="auto" class="bg-video">
      <source src="/header_video.mp4" type="video/mp4">
    </video>

    <div class="content">
      <header>
        <img class="logo_image" src="/logo_wurst.png">
        <h1>WURSTMEISTER</h1>
        <h2>-Больше, чем
          добавки</h2>
        <h3>основа идеального вкуса</h3>
      </header>
      <button class="to_form_button">
        Смотреть товары
      </button>
    </div>

  </div>
</template>

<style lang="scss" scoped>

  @use "@/styles/styles" as *;

  .items {
    position: relative;
    overflow: hidden;
    @include display(center, center, 144px, column);
    @include block(100%, 698px, $color: black);
  }
  .bg-video {
    position: absolute;
    float: right;
    top: 0;
    right: 0;
    width: 1092px;
    height: 698px;
    object-fit: cover;
    z-index: 0;
  }

  .items::before {
    content: "";
    position: absolute;
    inset: 0;

    background:
      linear-gradient(
        180deg,
        rgba(0,0,0,0) 0%,
        rgba(0,0,0,0) 70%,
        rgba(141,88,10,0.45) 100%
      );
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 2;
    @include display(center, center, 144px, column);
  }

  header {
    @include display(flex-start, flex-start, 0, column);
    width: 1650px;
  }

  h1 {
    @include fonts(
      $size: 70px,
      $family: (Rowdies, sans-serif),
      $weight: 700
    );
    -webkit-text-stroke: 2px #FE9809;
    width: 685px;
  }
  h2 {
    @include fonts(
      $size: 40px,
      $family: (Rubik Mono One, sans-serif),
      $weight: 400
    );
    width: 500px;
  }
  h3 {
    @include fonts(
      $size: 40px,
      $family: (Roboto Condensed, sans-serif),
      $weight: 400,
      $transform: lowercase
    );
  }

  .to_form_button {
    @include button(1016px, 66px, 25px, transparent, (3px solid white));
    @include fonts(36px, (Roboto Condensed, sans-serif), $weight: 300, $transform: none, $align: center);
    position: relative;
    z-index: 2;
  }


  @media screen and (min-width: 1280px) and (max-width: 1650px) {

    .content {
      @include width_screen;
    }

    .logo_image {
      @include img(221px, 177px, 0px);
    }
  }


  @media screen and (min-width: 1150px) and (max-width: 1279px){
    .content {
      @include width_screen;
    }

    .logo_image {
      @include img(221px, 177px, 0px);
    }
  }


  @media screen and (min-width: 1000px) and (max-width: 1149px){
    .content {
      @include width_screen;
    }

    .logo_image {
      @include img(221px, 177px, 0px);
    }
    .to_form_button{
      @include width_screen;
    }
  }


  @media screen and (min-width: 800px)and (max-width: 999px){
    .content{
      @include width_screen;
    }
    .items{
      height: 467px;
    }
    h1{
      width: 534px;
      font-size: 60px;
    }
    h2 {
      font-size: 38px;
      width: 500px;
    }

    .logo_image {
      @include img(105px, 84px, 0px);
    }
    .to_form_button {
      @include button(298px, 50px, 30px, linear-gradient(-122deg, $moc 9%, #623700 51%, $moc 90%), (1px solid $moc));
      @include fonts(28px, (Roboto Condensed, sans-serif), $weight: 400, $transform: none, $align: center);
    }
    .content{
      gap: 29px;
      align-items: flex-start;
    }
    .bg-video{
      height: 467px;
      width: 757px;
      right: -100px;
    }
  }
  @media screen and (min-width: 601px)and (max-width: 799px) {
    .content {
      @include width_screen;
    }
    .items{
      height: 461px;
    }

    .logo_image {
      @include img(105px, 84px, 0px);
    }
    .to_form_button {
      @include button(298px, 50px, 30px, linear-gradient(-122deg, $moc 9%, #623700 51%, $moc 90%), (1px solid $moc));
      @include fonts(28px, (Roboto Condensed, sans-serif), $weight: 400, $transform: none, $align: center);
    }
    .content{
      gap: 29px;
      align-items: flex-start;
    }
    .bg-video{
      height: 467px;
      width: 757px;
      right: -100px;
    }
  }
  @media screen and (max-width: 600px){
    .content {
      @include width_screen;
    }
    .items {
      height: 282px;
    }
    h1{
      font-size: 36px;
      width: 292px;
    }
    h2 {
      font-size: 20px;
      width: 250px;
    }
    h3{
      font-size: 18px;
    }

    .logo_image {
      @include img(65px, 52px, 0px);
    }
    .to_form_button {
      @include button(149px, 30px, 30px, linear-gradient(-122deg, $moc 9%, #623700 51%, $moc 90%), (1px solid $moc));
      @include fonts(13px, (Roboto Condensed, sans-serif), $weight: 400, $transform: none, $align: center);
    }
    .content{
      gap: 22px;
      align-items: flex-start;
    }
    .bg-video{
      height: 282px;
      width: 491px;
      right: -100px;
    }
  }

</style>