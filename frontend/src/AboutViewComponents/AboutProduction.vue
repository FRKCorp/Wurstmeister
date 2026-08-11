<script setup lang="ts">

</script>

<template>
  <div class="about">
    <div class="about_group">
      <div class="textes">
        <h3>
          Производство
        </h3>
        <p class="p_about">
          <strong>Ингредиенты WURSTMEISTER используются как для изготовления премиальных деликатесов, так и для производства продукции эконом-класса.</strong>
          При создании продукции WURSTMEISTER использован 20-летний опыт разработки вкусо-ароматических и функциональных добавок и партнёрства с мясопереработчиками. Качество добавок подтверждено лабораторными исследованиями и одобрено десятками технологов с учётом международных вкусов. Вся продукция изготовлена по стандарту ISO 22000 и расфасована в высокобарьерную металлизированную упаковку, защищающую свойства ингредиентов от внешней среды и света.        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "@/styles/styles" as *;
  .about{
    @include display(center,center,$gap: 17px, $flex-direction: column);
    @include block($height: 751px, $color: url("/AboutViewProductionBG4.png") right center / cover );
  }
  .about_group{
    width: 1650px;
    display: flex;
    justify-content: flex-start;
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
    @include fonts($size: 32px, $family: (Roboto Condensed, sans-serif), $weight: 300, $transform: none);
    width: 714px;
  }
  strong{
    font-weight: 500;
  }

  @media screen and (max-width: 1280px){
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

  @media screen and (min-width: 800px)and (max-width: 999px){
    .textes{
      width: 495px;
    }
    h3{
      font-size: 37px;
    }
    .p_about{
      font-size: 26px;
    }
    .about{
      height: 800px;
      align-items: center;
    }
    .about_group{
      @include width_screen;
    }
  }
  @media screen and (min-width: 601px)and (max-width: 799px){
    h3{
      font-size: 37px;
    }
    .p_about{
      font-size: 26px;
      width: 262px;
    }
    .about{
      align-items: center;
      height: 620px;
    }
    .about_group{
      @include width_screen;
    }
  }


  @media screen and (max-width: 600px){
    h3{
      @include h2_400();
    }
    .p_about{
      font-size: 16px;
      width: 262px;
    }
    .about{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 500px;
    }
    .textes{
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .about_group{
      @include width_screen;
      height: 266px;
    }
  }
</style>