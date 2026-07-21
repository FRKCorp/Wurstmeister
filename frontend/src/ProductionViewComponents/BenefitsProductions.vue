<script setup lang="ts">
const quailites = [
  {
    name: "Реализуем договорённости на любых уровнях сотрудничества!",
    logo: "/Products/first.png"
  },
  {
    name: "Оперативно реагируем на нештатные ситуации!",
    logo: "/Products/second.png"
  },
  {
    name: "Сертификат международном уровне ISO 22000",
    logo: "/Products/third.png"
  },
  {
    name: "Имеем широкую сеть представительств!",
    logo: "/Products/four.png"
  },
  {
    name: "Оказываем поддержку на всех этапах внедрения!",
    logo: "/Products/five.png"
  },
  {
    name: "Технологи с международным опытом работы!",
    logo: "/Products/six.png"
  },
  {
    name: "Собственные производственная и научная базы!",
    logo: "/Products/seven.png"
  },
  {
    name: "Предоставляем бесплатные образцы!",
    logo: "/Products/eight.png"
  },
  {
    name: "Более 20 лет опыта производства!",
    logo: "/Products/nine.png"
  }
];
</script>

<template>
  <div class="quality_block">
    <section class="quality_section">
      <h2>Наши преимущества</h2>

      <div class="qualities">
        <div
          class="quality"
          v-for="quality in quailites"
          :key="quality.name"
        >
          <img class="img" :src="quality.logo" alt="" />
          <p class="q_p">{{ quality.name }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/styles" as *;

.quality_block {
  @include block($height: 955px, $color: url("/Products_Benefits.png"));
  @include display(center, center);
}

.quality_section {
  @include display(flex-start, flex-start, 57px, column);
  width: 1650px;
}

h2 {
  @include h2();
}

.qualities {
  display: grid;
  grid-template-columns: repeat(3, 344px);
  grid-template-rows: repeat(3, 166px);
  justify-content: center;
  gap: 58px;
  width: 1650px;
}

.quality {
  @include display(center, center, 13px);
  width: 344px;
  height: 166px;
  background: rgba(39, 32, 22, 1);
  border-radius: 16px;
  box-shadow: 0 0 0 16px rgba(28, 21, 10, 1);
}

.q_p {
  width: 70%;
  @include fonts(22px, $color: white, $weight: 400);
}

.img {
  @include img(55px, 55px);
}

@media screen and (min-width: 1280px) and (max-width: 1650px) {
  .quality_block {
    height: 920px;
  }
  .qualities {
    gap: 50px;
  }
  .quality {
    width: 330px;
    height: 158px;
  }
}
@media screen and (min-width: 1150px) and (max-width: 1279px) {
  .quality_block {
    height: 880px;
    background-size: cover;
  }
  .qualities {
    grid-template-columns: repeat(3, 310px);
    grid-template-rows: repeat(3, 152px);
    gap: 45px;
  }
  .quality {
    width: 310px;
    height: 152px;
    box-shadow: 0 0 0 12px rgba(28, 21, 10, 1);
  }
  .q_p {
    font-size: 20px;
  }
  .img {
    @include img(50px, 50px);
  }
}

@media screen and (min-width: 1000px) and (max-width: 1149px) {
  .quality_block {
    height: 950px;
    background: url("/Products_Benefits.png") left center /cover no-repeat;
  }
  .quality_section {
    align-items: center;
  }
  h2 {
    text-align: center;
  }
  .qualities {
    grid-template-columns: repeat(3, 300px);
    grid-template-rows: repeat(3, 148px);
    gap: 40px;
  }
  .quality {
    width: 300px;
    height: 148px;
    box-shadow: 0 0 0 12px rgba(28, 21, 10, 1);
  }
  .q_p {
    font-size: 19px;
    width: 72%;
  }
}

@media screen and (min-width: 800px) and (max-width: 999px) {
  .quality_block {
    height: 1150px;
    background: url("/Products_Benefits.png") left center/cover no-repeat;
  }
  .qualities {
    grid-template-columns: repeat(2, 340px);
    grid-template-rows: repeat(5, 140px); /* 9 элементов → 5 рядов */
    gap: 35px;
    justify-content: center;
  }
  .quality {
    width: 340px;
    height: 140px;
  }
  h2 {
    font-size: 37px;
  }
  .q_p {
    font-size: 18px;
  }
  .img {
    @include img(48px, 48px);
  }
}

@media screen and (min-width: 600px) and (max-width: 799px) {
  .quality_block {
    height: 1450px;
    background: url("/Benefits_mobile.png") left top/cover no-repeat;
  }
  h2{
    @include h2_400;
  }
  .quality_section {
    gap: 40px;
  }
  .qualities {
    grid-template-columns: repeat(1, 280px);
    grid-template-rows: repeat(5, 118px);
    gap: 28px;
    @include width_screen;
  }
  .quality {
    width: 280px;
    height: 118px;
    box-shadow: 0 0 0 10px rgba(28, 21, 10, 1);
  }
  .q_p {
    font-size: 15px;
    width: 75%;
  }
  .img {
    @include img(42px, 42px);
  }
}

@media screen and (min-width: 400px) and (max-width: 599px) {
  .quality_block {
    height: 1380px;
    background: url("/Benefits_mobile.png") left top/cover no-repeat;
  }
  .quality_section {
    gap: 35px;
  }
  .qualities {
    grid-template-columns: 1fr; /* 1 колонка */
    grid-template-rows: repeat(9, 98px);
    gap: 20px;
    padding: 0 10px;
  }
  .quality {
    width: 100%;
    max-width: 340px;
    height: 98px;
    box-shadow: 0 0 0 8px rgba(28, 21, 10, 1);
    margin: 0 auto;
  }
  h2 {
    font-size: 26px;
    text-align: center;
  }
  .q_p {
    font-size: 15px;
    width: 78%;
  }
  .img {
    @include img(38px, 38px);
  }
}
</style>