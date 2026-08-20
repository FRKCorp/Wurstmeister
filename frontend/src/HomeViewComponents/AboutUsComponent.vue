<script setup lang="ts">

</script>

<template>
  <div class="about">
    <img src="/HomePage/AboutCompanySpecies.png" class="about_image"/>
    <div class="about_group">
      <div class="textes">
      <h3>
        о нас
      </h3>
      <p class="p_about">
        WURSTMEISTER — решения для мясоперерабатывающей промышленности. Вкусо-ароматические и функциональные добавки для создания продуктов высокого качества — от классических до изысканных.
      </p>
      <p class="p_about">
        Международная сертификация (ISO 22000, HALAL), надёжная упаковка, современные разработки и экспертная поддержка обеспечивают стабильный результат и доверие производителей.
      </p>
    </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
  @use "@/styles/styles" as *;
  .about{

    @include display(center,center,$gap: 17px, $flex-direction: column);
    @include block($height: 707px,$color: black);
    background-repeat: no-repeat;
    background-size: auto;
  }
  .about_image{
    display: block;
    position: absolute;
    float: left;
    left: 0;
    width: auto;
    height: 100%;
    z-index: 0;
  }
  .about_group{
    width: 1650px;
    display: flex;
    justify-content: flex-end;
  }

  .textes{
    @include display(flex-start, flex-start, 17px, column);
    @include block($width: 46%,$height: auto, $color: transparent);
  }
  h3{
    @include fonts($size: 48px, $family: (Rubik Mono One, sans-serif), $weight: 400);
    width: 685px;
  }
  .p_about {
    @include fonts($size: 36px, $family: (Roboto Condensed, sans-serif), $weight: 400, $transform: none);
    width: 766px;
    height: auto;
    white-space: pre-line;
  }


  @media screen and (min-width: 1280px) and (max-width: 1650px){
    h3{
      font-size: 36px;
    }
    .about_group{
      @include width_screen;
    }
  }

  @media screen and (min-width: 1150px) and (max-width: 1279px){
    h3{
      @include h2_800();
    }
    .about_group{
      @include width_screen;
    }
    .textes{
      width: 62%;
    }
    .about_image{
      left: -110px;
    }
  }


  @media screen and (min-width: 1000px) and (max-width: 1149px){
    h3{
      font-size: 40px;
    }
    .about_group{
      @include width_screen;
    }
    .p_about{
      font-size: 30px;
    }
    .textes{
      width: 62%;
    }
    .about_image{
      left: -180px;
    }
  }

  @media screen and (min-width: 801px)and (max-width: 999px){
    h3{
      @include h2_800;
    }
    .p_about{
      font-size: 26px;
      width: 500px;
    }
    .about{
      align-items: flex-end;
    }
    .textes{
      width: 55%;
    }
    .about_image{
      left: -100px;
    }
  }
  @media screen and (min-width: 601px)and (max-width: 800px){
    h3{
      @include h2_800;
    }
    .p_about{
      font-size: 24px;
      width: 500px;
    }
    .about{
      align-items: flex-end;
    }
    .textes{
      width: 55%;
    }
    .about_image{
      width: 500px;
      height: 600px;
    }
  }
  @media screen and (max-width: 600px){
    h3{
      @include h2_400();
    }
    .p_about{
      font-size: 14px;
      height: 100%;
    }
    .about{
      padding-top: 40px;
      align-items: flex-end;
      height: 100%;
      padding-bottom: 30px;
      @include width_screen;
    }
    .about_group{
      width: 60%;
      height: 100%;
    }
    .textes{
      height: 100%;
      width: 100%;
    }
    .about_image{
      left: -90px;
    }
  }
  @media screen and (min-width: 1100px) and (max-width: 1150px){
    .about_image{
      left: -12vw;
    }
  }
  @media screen and (min-width: 730px) and (max-width: 800px){
    .about_image{
      left: -12vw;
    }
  }
  @media screen and (min-width: 601px) and (max-width: 729px){
    .about_image{
      left: -20vw;
    }
  }
  @media screen and (min-width: 501px) and (max-width: 600px){
    .about_image{
      left: 0px;
    }
  }
  @media screen and (min-width: 401px) and (max-width: 500px){
    .about_image{
      left: -20px;
    }
  }
  @media screen and (max-width: 400px){
    .about_image{
      left: -90px;
    }
  }
</style>