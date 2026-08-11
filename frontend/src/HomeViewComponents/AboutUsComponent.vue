<script setup lang="ts">

</script>

<template>
  <div class="about">
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
    @include block($height: 707px,$color: url("/about.png"));
  }
  .about_group{
    width: 1650px;
    display: flex;
    justify-content: flex-end;
  }
  .textes{
    @include display(flex-start, flex-start, 17px, column);
    @include block($width: 715px,$height: auto, $color: transparent);
  }
  h3{
    @include fonts($size: 48px, $family: (Rubik Mono One, sans-serif), $weight: 400);
    width: 685px;
  }
  .p_about {
    @include fonts($size: 36px, $family: (Roboto Condensed, sans-serif), $weight: 400, $transform: none);
    width: 714px;
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
  }


  @media screen and (min-width: 601px)and (max-width: 800px){
    h3{
      @include h2_800;
    }
    .p_about{
      font-size: 26px;
    }
    .about{
      align-items: flex-end;
    }
    .about_group{
      width: 497px;
    }
  }


  @media screen and (max-width: 600px){
    h3{
      @include h2_400();
    }
    .p_about{
      font-size: 16px;
    }
    .about{
      align-items: flex-end;

    }
    .about_group{
      width: 265px;
      height: 266px;
      padding-right: 20px;
    }
    .about{
      height: 353px;
      background: url("/about_mobile.png") ;
    }
  }
</style>