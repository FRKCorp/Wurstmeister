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
    @include block($height: 751px, $color: none);
    background-image:
        url('/AboutCompany/about_left.png'),
        url('/AboutCompany/about_right.png');
    background-repeat: no-repeat, no-repeat;
    background-position: left bottom, right center;
    background-size: auto, auto;
  }
  .about_group{
    width: 1650px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    @include width_screen;
  }
  .textes{
    @include display(flex-start, flex-start, 17px, column);
    @include block($width: 774px,$height: auto, $color: transparent);
    text-align: justify;
  }
  h3{
    @include fonts($size: 48px, $family: (Rubik Mono One, sans-serif), $weight: 400);
    width: 100%;
  }
  .p_about {
    @include fonts($size: 32px, $family: (Roboto Condensed, sans-serif), $weight: 300, $transform: none);
    width: 100%;
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
    }
    .about{
      align-items: center;
      height: auto;
      padding-bottom: 40px;
      padding-top: 40px;
      background-image:
        url('/AboutCompany/about_left_600.png'),
        url('/AboutCompany/about_right_600.png');
    }
    .about_group{
      @include width_screen;
    }
    .textes{
      width: 430px;
    }
  }


  @media screen and (min-width: 400px) and (max-width: 600px){
    h3{
      @include h2_400;
    }
    .p_about{
      font-size: 17px;
    }
    .about{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 510px;
      background-image:
        url('/AboutCompany/about_left_600.png'),
        url('/AboutCompany/about_right_600.png');
      background-size: 300px, 300px;
    }
    .textes{
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
      width: 300px;
    }
    .about_group{
      @include width_screen;
      height: auto;
    }
  }
  @media screen and (max-width: 400px){
    h3{
      @include h2_400;
    }
    .p_about{
      font-size: 16px;
    }
    .about{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 550px;
      background-image:
        url('/AboutCompany/about_left_400.png'),
        url('/AboutCompany/about_right_400.png');
    }
    .textes{
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 254px;
    }
    .about_group{
      @include width_screen;
      height: 266px;
    }
  }
</style>