<script setup lang="ts">
const quailites = [
    {
      "name": "Выбор поставщиков и закупка ингредиентов",
      "description": "Сотрудничаем с надежными поставщиками с многолетней репутацией"
    },
    {
      "name": "ПРИЕМ СЫРЬЯ",
      "description": "На данном этапе происходит отбор проб для анализа"
    },
    {
      "name": "ВРЕМЕННОЕ ХРАНЕНИЕ",
      "description": "Сырье заблокированно до момента проверки в лаборатории"
    },
    {
      "name": "АНАлиз сырья",
      "description": "Проверка происходит в лаборатории в соответствии с критериями качества"
    },
    {
      "name": "ХРАНЕНИЕ ПО ПРИНЦИПУ FIFO",
      "description": "проверенное сырье хранится в специально контролируемых условиях"
    },
    {
      "name": "ПОДГОТОВКА И СМЕШИВАНИЕ СЫРЬЯ",
      "description": "Дозировка четко контролируется в сооответствии с рецептурой"
    },
    {
      "name": "ПОВТОРНАЯ ПРОВЕРКА КАЧЕСТВА",
      "description": "Даный этап проверки носит формальный характер, но является обязательным"
    },
    {
      "name": "УПАКОВКА ГОТОВОЙ ПРОДУКЦИИ",
      "description": "Продукция упаковывается согласно всем требованиям к продукту"
    }

]
const asd = [
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
  .quality_block{
    @include block($height: 955px, $color: url("/QualityBG.png") center center / cover);
    @include display(center, center);
  }
  .quality_section{
    @include display(flex-start, flex-start, 57px, column);
    width: 1700px;
  }
  h2{
    @include h2();
  }
  .qualities{
    @include display(center, center, 58px);
    @include block(1700px, 727px);
    border-radius: 16px;
    flex-wrap: wrap;
  }
  .quality{
    position: relative;
    @include display(flex-start, 13px, $flex-direction: column);
    @include block(470px, 213px, $color: rgba(39, 32, 22, 1));
    border-radius: 16px;
    box-shadow: 0 0 0 16px rgba(28, 21, 10, 1);
  }
  .quality_name{
    @include display(center, center);
    @include block(100%, 76px, 2,$color: rgba(255, 255, 255, 0.05));
    border-radius: 16px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    position: absolute;
  }
  .number{
    @include fonts(42px,(Rubik Mono One, sans-serif), $color: $moc,$weight: 400);
  }
  .q_p{
    width: 80%;
    @include fonts(22px,$color: white,$weight: 500);
  }
  .quality_description{
    @include display(center, center);
    @include block(100%, 100%, 1,$color: rgba(255, 255, 255, 0.05));
    border-radius: 16px;
    position: absolute;

    top: 0;

    padding: 50px 20px 20px 20px;
    @include fonts(20px,$weight: 400);
  }
</style>