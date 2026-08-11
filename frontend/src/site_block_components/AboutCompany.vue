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
    @include block($height: 771px, $color: url("/AboutCompanyBG.png") center center / cover);
  }
  .about_group{
    width: 1700px;
    display: flex;
    justify-content: flex-end;
  }
  .textes{
    @include display(flex-start, flex-start, 17px, column);
    @include block($width: 715px,$height: 647px, $color: transparent);
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
      width: 1240px;
    }
  }

  @media screen and (min-width: 1150px) and (max-width: 1279px){
    h3{
      @include h2_800();
    }
    .about_group{
      width: 1150px;
    }
  }


  @media screen and (min-width: 1000px) and (max-width: 1149px){
    h3{
      font-size: 40px;
    }
    .about_group{
      width: 1000px;
    }
    .p_about{
      font-size: 30px;
    }
  }


  @media screen and (min-width: 601px)and (max-width: 800px){
    h3{
      @include h2_800
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
      background: url("/about_mobile.png");
    }
  }
</style>