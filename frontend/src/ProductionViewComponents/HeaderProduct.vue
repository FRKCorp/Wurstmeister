<script setup lang="ts">
import {inject} from "vue";
const name = inject("name")
</script>

<template>
      <header>
        <section class="hdr_section">
          <img class="logo_image" src="/logo_wurst.png">
          <h1>{{name}}</h1>
        </section>

      </header>
</template>

<style lang="scss" scoped>

  @use "@/styles/styles" as *;

  header {
    @include display(center, center, 0, column);
    @include block(100%, 420px, 1, url("/ProductionPage/ProductionHeader_1280.png") center center / cover);
  }
  .hdr_section{
    @include display(center, flex-start, 0, column);
    width: 1650px;
    height: 400px;
  }
  h1 {
    @include fonts(
      $size: 48px,
      $family: (Rubik Mono One, sans-serif),
      $weight: 400
    );
    width: 1166px;
  }


  @media screen and (min-width: 1280px) and (max-width: 1650px) {
    .hdr_section{
      @include width_screen;
    }
    header {
      height: 366px;
    }
    .logo_image {
      @include img(221px, 177px, 0px);
    }
  }


  @media screen and (min-width: 1150px) and (max-width: 1279px){
    .hdr_section{
      @include width_screen;
    }
    header {
      height: 366px;
    }
    .logo_image {
      @include img(221px, 177px, 0px);
    }
  }


  @media screen and (min-width: 1000px) and (max-width: 1149px){
    .hdr_section{
      @include width_screen;
    }
    header {
      height: 366px;
    }
    h1{
      font-size: 44px;
    }
    .logo_image {
      @include img(131px, 107px, 0px);
    }
  }


  @media screen and (min-width: 800px)and (max-width: 999px){
    header{
      height: 219px;
    }
    .hdr_section{
      @include width_screen;
    }
    .items{
      height: 467px;
    }
    h1{
      width: 534px;
      @include h2_800;
    }

    .logo_image {
      @include img(105px, 84px, 0px);
    }
    .content{
      gap: 29px;
      align-items: flex-start;
    }
  }
  @media screen and (min-width: 600px)and (max-width: 799px) {
    .hdr_section{
      @include width_screen;
      height: auto;
    }
    header {
      height: 200px;
    }
    .items{
      height: auto;
    }
    h1{
      @include width_screen;
      font-size: 37px;
    }

    .logo_image {
      @include img(105px, 84px, 0px);
    }
    .content{
      gap: 29px;
      align-items: flex-start;
    }
  }
  @media screen and (max-width: 600px){
    header{
      height: 150px;
    }
    .hdr_section{
      @include width_screen;
    }
    .items {
      height: 262px;
    }
    h1{
      font-size: 26px;
      @include width_screen;
    }

    .logo_image {
      @include img(65px, 52px, 0px);
    }
    .content{
      gap: 22px;
      align-items: flex-start;
    }
  }

</style>