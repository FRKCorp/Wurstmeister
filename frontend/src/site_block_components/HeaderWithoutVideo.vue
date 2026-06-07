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
    width: 100%;
  }

  header {
    @include display(flex-start, center, 0, column);
    width: 100%;
    height: 466px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 75%, rgba(255, 160, 17, 0.79) 99%),
        url("/sausages/sausages_bg_header.png") center center / cover no-repeat;
  }
  .hdr_section{
    @include display(flex-start, flex-start, 0, column);
    width: 1700px;
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
    .content{
      gap: 29px;
      align-items: flex-start;
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
    .content{
      gap: 29px;
      align-items: flex-start;
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
    .content{
      gap: 22px;
      align-items: flex-start;
    }
  }

</style>