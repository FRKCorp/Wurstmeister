<script setup lang="ts">

</script>

<template>
  <div class="about">
    <img src="/AboutCompany/AboutCompanySalt.png" class="about_image"/>
    <img src="/AboutCompany/AboutCompanySalt_400.png" class="about_image_400"/>
    <div class="about_group">
      <div class="textes">
        <h3>
          о нас
        </h3>
        <p class="p_about">
          <strong>«WURSTMEISTER» стремится внести вклад в развитие мясной отрасли по всему миру.</strong>
          Коммерческий успех продукта достигается благодаря тёплым партнёрским отношениям и решению индивидуальных потребностей клиента. Содействуя росту благосостояния клиентов, мы обеспечиваем себя ресурсами для развития и совершенствования. Развивая сеть представительств в разных странах, решаются вопросы покрытия продукта и укрепляются логистические связи. Жёсткие внутренние стандарты позволяют производить продукцию стабильно высокого качества на разных производственных площадках. Ценообразование продукта складывается из многих факторов, но критерии качества остаются неизменными.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "@/styles/styles" as *;
  .about{
    @include display(center,center,$gap: 17px, $flex-direction: column);
    @include block($height: 771px, $color: black);
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
  .about_image_400{
    display: none;
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
    @include width_screen;
  }
  .textes{
    @include display(flex-start, flex-end, 17px, column);
    @include block($width: 774px,$height: auto, $color: transparent);
    text-align: justify;
  }
  h3{
    @include fonts($size: 48px, $family: (Rubik Mono One, sans-serif), $weight: 400);
    width: 100%;
    text-align: left;
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
    .about_image{
      left: -160px;
    }
    .textes{
      width: 674px;
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
      align-items: center;

    }
    .about_group{
      @include width_screen;
    }
    .about_image{
      left: -175px;
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
      padding-top: 40px;
      padding-bottom: 40px;
    }
    .about_group{
      @include width_screen;
    }
    .about_image{
      left: -175px;
    }
    .textes{
      width: 430px;
    }
  }


  @media screen and (min-width: 400px) and (max-width: 600px){
    h3{
      @include h2_400();
    }
    .p_about{
      font-size: 17px;
    }
    .about{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 600px;
    }
    .textes{
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      width: 300px;
      height: 100%;
    }
    .about_group{
      @include width_screen;
      height: 266px;
    }
    .about_image{
      left: -110px;
    }
  }
  @media screen and (max-width: 400px){
    h3{
      @include h2_400();
      width: 262px;
    }
    .p_about{
      font-size: 16px;
      width: 262px;
    }
    .about{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 600px;
    }
    .textes{
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      width: 254px;
    }
    .about_group{
      @include width_screen;
      height: 266px;
    }
    .about_image{
      display: none;
    }
    .about_image_400{
      display: block;
    }
  }
</style>