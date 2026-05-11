<script setup lang="ts">

</script>

<template>
  <div class="advantage">
    <div class="elements">
      <div class="advantage_img"></div>
      <p class="advantage_p">ГАРАНТИРУЕМ КАЖДОМУ КЛИЕНТУ СТАБИЛЬНОЕ КАЧЕСТВО</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use "@/styles/styles" as *;
  .advantage{
    @include display(center, center, 0px, row);
    @include block($height: 174px, $color: url("/AdvantageSlider.png") center/cover no-repeat);
  }
  .elements{
    @include display(flex-start, center, 46px, row);
  }
  .advantage_p{
    @include fonts($size: 48px,$family: (Roboto Condensed, sans-serif), $weight: 400);
    width: 715px;
  }
  .advantage_img{
    @include img(187px, 187px, 90px);
    background: url("/advantage_1.png") center;
    flex-shrink: 0;
    border: 0;
    box-shadow: 1px 4px 74.3px #FFA011;
    z-index: 2;
  }


  @media screen and (min-width: 1280px) and (max-width: 1650px) {
    .advantage_p{
      font-size: 40px;
    }
  }


  @media screen and (min-width: 1150px) and (max-width: 1279px){
    .advantage_p{
      font-size: 35px;
      width: 715px;
    }
  }


  @media screen and (min-width: 1000px) and (max-width: 1149px){
    .advantage_p{
      font-size: 35px;
    }
  }


  @media screen and (min-width: 800px)and (max-width: 999px){
    .advantage{
      height: 174px;
    }
    .elements{
      gap: 25px;
    }
    .advantage_p{
      font-size: 32px;
      width: 500px;
    }
    .advantage_img{
      @include img(131px,131px,90px);
    }
  }


  @media screen and (min-width: 400px)and (max-width: 799px){
    .advantage{
      height: 110px;
    }
    .elements{
      gap: 8px;
    }
    .advantage_p{
      font-size: 15px;
      width: 300px;
    }
    .advantage_img{
      @include img(72px,72px,90px);
    }
  }

</style>