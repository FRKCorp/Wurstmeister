<script setup lang="ts">
const quailites = [
    {
      "name": "Выбор поставщиков и закупка ингредиентов",
      "description": "Сотрудничаем с надежными поставщиками с многолетней репутацией"
    },
    {
      "name": "ПРИЕМ СЫРЬЯ",
      "description": "На данном этапе происходит отбор проб для анализа"
    },
    {
      "name": "ВРЕМЕННОЕ ХРАНЕНИЕ",
      "description": "Сырье заблокированно до момента проверки в лаборатории"
    },
    {
      "name": "АНАлиз сырья",
      "description": "Проверка происходит в лаборатории в соответствии с критериями качества"
    },
    {
      "name": "ХРАНЕНИЕ ПО ПРИНЦИПУ FIFO",
      "description": "проверенное сырье хранится в специально контролируемых условиях"
    },
    {
      "name": "ПОДГОТОВКА И СМЕШИВАНИЕ СЫРЬЯ",
      "description": "Дозировка четко контролируется в сооответствии с рецептурой"
    },
    {
      "name": "ПОВТОРНАЯ ПРОВЕРКА КАЧЕСТВА",
      "description": "Даный этап проверки носит формальный характер, но является обязательным"
    },
    {
      "name": "УПАКОВКА ГОТОВОЙ ПРОДУКЦИИ",
      "description": "Продукция упаковывается согласно всем требованиям к продукту"
    }

]
</script>

<template>
  <div class="quality_block">
    <section class="quality_section">
      <h2>
        Качество
      </h2>
      <div class="qualities">
        <div class="quality" v-for="(quality, index) in quailites" :key="index">
          <div class="quality_name">
            <p class="number">{{ index + 1 }}</p><p class="q_p">{{ quality.name }}</p>
          </div>
          <div class="quality_description">
            {{ quality.description }}
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/styles" as *;

.quality_block {
  @include block($height: 955px, $color: none);
  @include display(center, center);
  background-image: url('/AboutCompany/quality_particle.png'), url('/AboutCompany/BGQuality.png');
  background-repeat: no-repeat, no-repeat;
  background-position: left top, center center;
  background-size: auto, cover;
}

.quality_section {
  @include display(flex-start, flex-start, 57px, column);
  width: 1650px;
}

h2 {
  @include h2();
}

.qualities {
  @include display(center, center, 58px);
  @include block(97%, 727px);
  border-radius: 16px;
  flex-wrap: wrap;
}

.quality {
  position: relative;
  @include display(flex-start, 13px, $flex-direction: column);
  @include block(470px, 213px, $color: rgba(39, 32, 22, 1));
  border-radius: 16px;
  box-shadow: 0 0 0 16px rgba(28, 21, 10, 1);
}

.quality_name {
  @include display(center, center);
  @include block(100%, 76px, 2, $color: rgba(255, 255, 255, 0.05));
  border-radius: 16px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  position: absolute;
}

.number {
  @include fonts(42px, (Rubik Mono One, sans-serif), $color: $moc, $weight: 400);
}

.q_p {
  width: 80%;
  @include fonts(22px, $color: white, $weight: 500);
}

.quality_description {
  @include display(center, center);
  @include block(100%, 100%, 1, $color: rgba(255, 255, 255, 0.05));
  border-radius: 16px;
  position: absolute;
  top: 0;
  padding: 50px 20px 20px 20px;
  @include fonts(20px, $weight: 400);
}

@media screen and (min-width: 1280px) and (max-width: 1650px) {
  .quality_section{
    @include width_screen;
  }
  .quality_block {
    height: auto;
    padding-top: 82px;
    padding-bottom: 50px;
  }
  .qualities {
    gap: 50px;
  }
  .quality {
    width: 29%;
    height: 205px;
  }
}

@media screen and (min-width: 1150px) and (max-width: 1279px) {
  .quality_section{
    @include width_screen;
  }

  .quality_block {
    height: auto;
    padding-top: 82px;
    padding-bottom: 50px;
  }
  .qualities {
    gap: 45px;
  }
  .quality {
    width: 29%;
    height: 195px;
  }
  .number {
    font-size: 38px;
  }
  .q_p {
    font-size: 20px;
  }
  .quality_description{
    padding-top: 70px;
  }
}

@media screen and (min-width: 1000px) and (max-width: 1149px) {
  .quality_block {
    height: auto;
    padding-top: 82px;
    padding-bottom: 50px;
    align-items: center;
    justify-content: center;
  }
  .quality_section{
    @include width_screen;
  }
  h2 {
    text-align: center;
  }
  .qualities{
    height: 1050px;
  }
  .quality_description {
    padding: 70px 30px 25px 30px;
  }
}

@media screen and (min-width: 800px) and (max-width: 999px) {
  .quality_block {
    height: auto;
    padding-top: 82px;
    padding-bottom: 50px;
    align-items: center;
    justify-content: center;
  }
  .quality_section{
    @include width_screen;
  }
  .qualities{
    height: 100%;
  }
  .quality {
    width: 330px;
    height: 175px;
  }
  h2 {
    font-size: 37px;
  }
  .number {
    font-size: 36px;
  }
  .q_p {
    font-size: 19px;
  }
  .quality_description {
    font-size: 18px;
    padding: 80px 25px 20px 25px;
  }
}

@media screen and (min-width: 600px) and (max-width: 799px) {
  .quality_block {
    height: auto;
    padding-top: 82px;
    padding-bottom: 50px;
  }
  .quality_section{
    @include width_screen;
  }
  .qualities {
    flex-direction: column;
    height: auto;
    gap: 50px;
  }
  .quality {
    width: 420px;
    height: 175px;
  }
  h2 {
    @include h2_800;
  }
  .number {
    font-size: 32px;
  }
  .q_p {
    font-size: 17px;
  }
  .quality_description {
    font-size: 16px;
    padding: 55px 20px 20px 20px;
  }
}

/* Сетка 2x4 для диапазона 600–1024px (соответствует макетам 800 и 1024).
   Расположено после предыдущих медиа-запросов, поэтому в зоне
   пересечения (600-799, 800-999, 1000-1024) эти правила для
   .qualities и .quality побеждают в каскаде.
   Выше 1024px раскладка остаётся прежней (старые брейкпоинты не трогаем). */
@media screen and (min-width: 600px) and (max-width: 1062px) {
  .quality_section{
    align-items: center;
    justify-content: center;
  }
  h2{
    @include width_screen;
    text-align: start;
  }
  .qualities {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    gap: 40px;
    height: auto;
    @include width_screen;
  }
  .quality {
    width: 100%;
    height: 190px;
  }
}

/* 450–599px: 2 колонки */
@media screen and (min-width: 471px) and (max-width: 599px) {
  .quality_block{
    background-image: url('/AboutCompany/qualiti_particle_600.png'), url('/AboutCompany/BGQuality.png');
  }
  .quality_section{
    align-items: center;
    height: auto;
    @include width_screen;
  }
  .qualities {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    height: auto;
    @include width_screen;
  }
  .quality {
    width: 45%;
    height: 170px;
    box-shadow: 0 0 0 10px rgb(28, 21, 10);
  }
  h2{
    font-size: 28px;
    text-align: start;
    @include width_screen;
  }
  .q_p{
    font-size: 16px;
  }
  .quality_description{
    font-size: 14px;
    padding-top: 100px;
  }
  .number{
    font-size: 35px;
  }
}

/* <450px: 1 колонка */
@media screen and (max-width: 470px) {
  .quality_block {
    height: auto;
    align-items: center;
    padding-bottom: 40px;
  }
  .quality_section{
    @include width_screen;
  }
  .qualities {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: auto;
    @include width_screen;
  }
  .quality {
    width: 75%;
    height: 140px;
    box-shadow: 0 0 0 12px rgba(28, 21, 10, 1);
  }
  h2{
    font-size: 28px;
    @include width_screen;
    text-align: start;
  }
  .q_p{
    font-size: 17px;
  }
  .quality_name{
    height: 60px;
  }
  .quality_description{
    font-size: 15px;
    height: 100%;
    padding-top: 70px;
  }
  .number{
    font-size: 35px;
  }
}
@media screen and (max-width: 400px){
  .quality_block {
    background-image: url('/AboutCompany/qualiti_particle_400.png'), url('/AboutCompany/BGQuality.png');
  }
}
</style>