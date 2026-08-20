<script setup lang="ts">
import SliderDesctop from "@/components/SliderDesctop.vue";
import SliderMobilw from "@/components/SliderMobilw.vue";
</script>

<template>
  <div class="ingredients">
    <div class="title">
      <h3 class="title-front">
        ИНГРЕДИЕНТЫ ДЛЯ:
      </h3>
    </div>
    <SliderDesctop />
    <SliderMobilw />
  </div>

</template>

<style scoped lang="scss">
  @use "@/styles/styles" as *;
  .ingredients{
    @include display(center,center,69px, column);
    @include block(100%, 705px,$color: url("/BackgroundIngredients.svg") center center / cover no-repeat);
  }
  .title {
    @include display(flex-start, center, 0px, row);
    @include block(1650px, 91px);
  }

  .title-front {
    @include fonts($size: 48px, $family: (Rubik Mono One, sans-serif), $color: #FE9809);
    -webkit-text-stroke: 2px white;
  }


  @media screen and (min-width: 1280px) and (max-width: 1650px) {
    .title{
      @include width_screen;
    }
  }
  @media screen and (min-width: 1150px) and (max-width: 1279px) {
    .title{
      @include width_screen;
    }
  }
  @media screen and (min-width: 1000px) and (max-width: 1149px) {
    .title{
      @include width_screen;
    }
  }
  @media screen and (min-width: 800px)and (max-width: 999px){
    .title{
      @include width_screen;
    }
  }
  @media screen and (min-width: 601px)and (max-width: 799px){
    .ingredients{
      height: 570px;
      gap: 0px;
    }
    .title{
      @include width_screen;
      height: auto;
      padding-bottom: 30px;
    }
    .title-front{
      font-size: 40px;
    }
  }
  @media screen and (max-width: 600px){
    .ingredients{
      height: 100%;
      padding-bottom: 30px;
      gap: 0px;
    }
    .title{
      @include width_screen;
    }
    .title-front{
      font-size: 24px;
    }
  }
</style>