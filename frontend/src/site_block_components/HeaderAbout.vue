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
        <h1>О КОМПАНИИ WURSTMEISTER</h1>
        <button class="to_form_button">
          Смотреть товары
        </button>
      </header>

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
    width: 1700px;
  }

  h1 {
    @include fonts(
      $size: 48px,
      $family: (Rubik Mono One, sans-serif),
      $weight: 400
    );
    width: 685px;
  }

  .to_form_button {
    @include button(501px, 59px, 30px, linear-gradient(-114deg, $moc 9%, #623700 51%,$moc 90%), (2px solid $moc));
    @include fonts(36px, (Roboto Condensed, sans-serif), $weight: 300, $transform: none, $align: center);
    position: relative;
    z-index: 2;
    margin-top: 50px;
  }


  @media screen and (min-width: 1280px) and (max-width: 1650px) {

    header {
      width: 1240px;
    }

    .logo_image {
      @include img(221px, 177px, 0px);
    }
  }


  @media screen and (min-width: 1150px) and (max-width: 1279px){
    header {
      width: 1149px;
    }

    .logo_image {
      @include img(221px, 177px, 0px);
    }
  }


  @media screen and (min-width: 1000px) and (max-width: 1149px){
    header {
      width: 999px;
    }

    .logo_image {
      @include img(221px, 177px, 0px);
    }
  }


  @media screen and (min-width: 800px)and (max-width: 999px){
    header{
      width: 800px;
    }
    .items{
      height: 467px;
    }
    h1{
      width: 534px;
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
  @media screen and (min-width: 600px)and (max-width: 799px) {
    header{
      width: 534px;
    }
    .items{
      height: 461px;
    }
    h1{
      font-size: 42px;
      width: 534px;
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
  @media screen and (min-width: 400px)and (max-width: 600px){
    header{
      width: 350px;
    }
    .items {
      height: 262px;
    }
    h1{
      font-size: 26px;
      width: 292px;
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