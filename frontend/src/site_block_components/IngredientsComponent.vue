<script setup lang="ts">
import SliderDesctop from "@/components/SliderDesctop.vue";
import SliderMobilw from "@/components/SliderMobilw.vue";
</script>

<template>
  <div class="ingredients">
    <div class="title">

      <h3 class="title-back">
        ИНГРЕДИЕНТЫ ДЛЯ:
      </h3>

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
    @include display(center, center, 0px, column);
    @include block(1650px, 91px);
  }

  .title-back {
    @include fonts($size: 48px, $family: (Rubik Mono One, sans-serif), $color: rgba(255, 160, 17, 0.74));
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    filter: url(#noiseFilter);
  }

  .title-front {
    @include h2();
    top: 24px;
    left: 12px;
    position: absolute;
    z-index: 2;
  }


  @media screen and (max-width: 1280px) {
    .ingredients{
      width: 1282px;
    }
  }


  @media screen and (min-width: 601px)and (max-width: 999px){
    .title-front{
      @include h2_800();
      top: 10px;
    }
    .title-back{
      @include h2_800();
      color: rgba(255, 160, 17, 0.74);
    }
  }


  @media screen and (max-width: 600px){
    .ingredients{
      height: 349px;
    }
    .title{
      height: 38px;
    }
    .title-front{
      @include h2_400();
      top: 8px;
    }
    .title-back{
      @include h2_400();
      color: rgba(255, 160, 17, 0.74);
    }
  }
</style>