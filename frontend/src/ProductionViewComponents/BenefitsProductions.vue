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
          <div class="quality__inner">
            <img class="img" :src="quality.logo" alt="" />
            <p class="q_p">{{ quality.name }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/styles" as *;

.quality_block {
  @include block($height: 100%, $color: none);
  @include display(center, center);
  background-image: url("/ProductionPage/flame_down.png");
  background-repeat: no-repeat;
  background-position: left top;
  background-size: auto;
  padding-top: 50px;
  padding-bottom: 100px;
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
  height: auto;
  width: 1650px;
}

// внешняя "рамка" — раньше была box-shadow, теперь реальный border/padding
.quality {
  width: 344px;
  height: 166px;
  padding: 16px;
  background: rgba(28, 21, 10, 1);
  border-radius: 16px;
  outline: 2px solid rgba(255, 160, 17, 0.4);
  outline-offset: 0;          // контур строго по границе .quality
  box-sizing: border-box;
}

// внутренний блок — раньше был .quality с фоном 39,32,22
.quality__inner {
  @include display(center, center, 13px);
  width: 100%;
  height: 100%;
  background: rgba(39, 32, 22, 1);
  border-radius: 10px;
  box-sizing: border-box;
}

.q_p {
  width: 70%;
  @include fonts(22px, $color: white, $weight: 400);
}

.img {
  @include img(55px, 55px);
}

@media screen and (min-width: 1280px) and (max-width: 1650px) {
  .quality_section {
    @include width_screen;
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
  .quality_section {
    @include width_screen;
  }
  .qualities {
    grid-template-columns: repeat(3, 29.7%);
    grid-template-rows: repeat(3, 182px);
    gap: 45px;
  }
  .quality {
    width: 310px;
    height: 152px;
    padding: 12px;
  }
  .quality__inner {
    border-radius: 8px;
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
    height: auto;
    background: none;
    padding-top: 100px;
    padding-bottom: 50px;
  }
  .quality_section {
    align-items: center;
    @include width_screen;
  }
  h2 {
    text-align: center;
  }
  .qualities {
    grid-template-columns: repeat(3, 27.7%);
    grid-template-rows: repeat(3, 126px);
    gap: 40px;
  }
  .quality {
    width: 97%;
    height: 119px;
    padding: 13px;
  }
  .quality__inner {
    border-radius: 8px;
  }
  .q_p {
    font-size: 17px;
    width: 72%;
  }
}

@media screen and (min-width: 800px) and (max-width: 999px) {
  .quality_block {
    padding-top: 80px;
    height: auto;
    padding-bottom: 40px;
  }
  .quality_section {
    @include width_screen;
  }
  .qualities {
    @include width_screen;
    width: 97%;
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 140px;
    column-gap: 24px;
    row-gap: 20px;
    justify-items: stretch;
    align-items: center;
    justify-content: center;
  }
  .quality {
    width: 100%;
    height: 140px;
    padding: 10px;
  }
  .quality__inner {
    border-radius: 8px;
  }
  h2 {
    font-size: 37px;
    text-align: center;
    @include width_screen;
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
    height: auto;
  }
  h2 {
    font-size: 37px;
  }
  .quality_section {
    gap: 40px;
    @include width_screen;
  }
  .qualities {
    grid-template-columns: repeat(1, 70%);
    grid-template-rows: repeat(5, 118px);
    gap: 28px;
    @include width_screen;
  }
  .quality {
    width: 100%;
    height: 118px;
    padding: 8px;
  }
  .quality__inner {
    border-radius: 6px;
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
    height: auto;
  }
  .quality_section {
    gap: 35px;
    @include width_screen;
  }
  .qualities {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 98px);
    gap: 20px;
    padding: 0 10px;
  }
  .quality {
    width: 100%;
    max-width: 340px;
    height: 98px;
    padding: 6px;
    margin: 0 auto;
  }
  .quality__inner {
    border-radius: 6px;
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
@media screen and (max-width: 399px) {
  .quality_block {
    height: auto;
    padding-bottom: 20px;
  }
  .quality_section {
    gap: 35px;
    @include width_screen;
  }
  .qualities {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 98px);
    gap: 20px;
    padding: 0 10px;
  }
  .quality {
    width: 100%;
    max-width: 340px;
    height: 98px;
    padding: 6px;
    margin: 0 auto;
  }
  .quality__inner {
    border-radius: 6px;
  }
  h2 {
    font-size: 24px;
    text-align: center;
    width: 100%;
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