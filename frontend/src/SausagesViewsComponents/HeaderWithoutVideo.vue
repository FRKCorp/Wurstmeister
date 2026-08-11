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

  .content {
    @include display(center, center, 144px, column);
    background: transparent;
    width: 1650px;
  }

  header {
    @include display(center, center, 0, row);
    width: 100%;
    height: 466px;
    background: url("/sausages/Sausages_BG.png") center center / cover no-repeat;
  }
  .hdr_section{
    @include display(flex-start, flex-start, 0, column);
    width: 1650px;
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

    .hdr_section {
      @include width_screen;
    }

    .logo_image {
      @include img(221px, 177px, 0px);
    }
  }


  @media screen and (min-width: 1150px) and (max-width: 1279px){
    .hdr_section {
      @include width_screen;
    }

    .logo_image {
      @include img(221px, 177px, 0px);
    }
  }


  @media screen and (min-width: 1000px) and (max-width: 1149px){
    header{
      background: url("/sausages/Sausages_BG_tablet.png") center center / cover;
    }
    .hdr_section {
      @include width_screen;
    }

    .logo_image {
      @include img(221px, 177px, 0px);
    }
  }


  @media screen and (min-width: 800px)and (max-width: 999px){
    .hdr_section {
      @include width_screen;
    }
    header{
      background: url("/sausages/Sausages_BG_tablet.png") center center / cover;
    }
    .items{
      height: 467px;
    }
    h1{
      width: 850px;
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
    .hdr_section {
      @include width_screen;
    }
    header{
      background: url("/sausages/Sausages_bg_mobile.png") center center / cover;
    }
    .items{
      height: 461px;
    }
    h1{
      font-size: 42px;
      @include width_screen;
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
      background: url("/sausages/Sausages_bg_mobile.png") center center / cover;
    }
    .hdr_section {
      @include width_screen;
    }
    .items {
      height: 262px;
    }
    h1{
      font-size: 26px;
      width: 392px;
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