<script setup lang="ts">
  import {provide} from "vue";
  import HeaderWithoutVideo from "@/SausagesViewsComponents/HeaderWithoutVideo.vue";
  import TypesSauseges from "@/SausagesViewsComponents/TypesSausegesComponent.vue";
  import TableComponent from "@/SausagesViewsComponents/TableComponent.vue";
  import SausagesAllComponent from "@/SausagesViewsComponents/SausagesAllComponent.vue";
  import { ref, onMounted, onUnmounted } from 'vue';

  const name = "ДЛЯ ВАРЁНО-КОПЧЁНЫХ, ПОЛУКОПЧЁНЫХ, СЫРОКОПЧЁНЫХ КОЛБАС И ВЕТЧИН"
  const first_types = [
      {"img": "/types_icons/icon_product.png", "text": "ВКУСО-АРОМАТИЧЕСКИЕ КОМПОЗИЦИИ", "style": "head_type"},
      {"img": "/types_icons/icon_product.png", "text": "ДЛЯ ВАРЁНО-КОПЧЁНЫХ, ПОЛУКОПЧЁНЫХ, СЫРОКОПЧЁНЫХ КОЛБАС И ВЕТЧИН", "style": "big_p"},
      {"img": "/types_icons/icon_product.png", "text": "ДЛЯ ВАРЕНЫХ КОЛБАС", "style": "default"},
      {"img": "/types_icons/icon_product.png", "text": "ДЛЯ ВСЕХ ВИДОВ КОЛБАС И МЯСНЫХ ИЗДЕЛИЙ", "style": "big_p"},
  ]
  const second_types = [
      {"img": "/types_icons/icon_product.png", "text": "функциональные добавки", "style": "head_type"},
      {"img": "/types_icons/icon_product.png", "text": "ДЛЯ ИНЪЕКТИРОВАНИЯ", "style": "default"},
      {"img": "/types_icons/icon_product.png", "text": "КОМПЛЕКСНЫЕ ДОБАВКИ", "style": "default"},
      {"img": "/types_icons/icon_product.png", "text": "ДЛЯ ПОЛУФАБРИКАТОВ", "style": "default"},
      {"img": "/types_icons/icon_product.png", "text": "ДЛЯ РЫБНЫХ ИЗДЕЛИЙ", "style": "default"},
  ]
  const grid_items = [
      {
        "name": "Салями Комби Испанская W.M.",
        "description": "Комбинированная композиция, основной нотой в аромате которой является кумин. Острота композиции обусловлена содержанием молотого красного перца чили.",
        "dozirovka": "7-8 г/кг массы",
        "color": "background: linear-gradient(0deg, #A3A200 0%, #3D3D00 100%)"
      },
      {
        "name": "Шашлычная W.M.",
        "description": "Яркая композиция на основе аромата сочного хорошо прожареного шашлыка.",
        "dozirovka": "3-10 г/кг массы",
        "color": "background: linear-gradient(0deg, #E50010 0%, #7F0009 100%)"
      },
      {
        "name": "Салями Киевская W.M.",
        "description": "Композиция вкусо-ароматическая на основе натурального экстракта тмина в комбинации с экстрактом чёрного перца и ароматизатором мяса. Прекрасно подойдёт для колбас «салямной» группы.",
        "dozirovka": "8-10 г/кг массы",
        "color": "background: linear-gradient(0deg, #A3A200 0%, #3D3D00 100%)"
      },
      {
        "name": "Комби Салями W.M.",
        "description": "Комбинированная композиция, основной нотой в аромате которой является можжевельник. Острота композиции обусловлена содержанием натуральных экстрактов перцев.",
        "dozirovka": "7-9 г/кг массы",
        "color": "background: linear-gradient(0deg, #A3A200 0%, #3D3D00 100%)"
      },
      {
        "name": "Фермерская W.M.",
        "description": "Мясо, сушёный лук, ароматная горчица, черный перец и нежный майоран - неотъемлемая часть настоящей колбасы.",
        "dozirovka": "5-6 г/кг массы",
        "color": "background: linear-gradient(0deg, #A3A200 0%, #3D3D00 100%)"
      },
      {
        "name": "Турольска Сам-Смак",
        "description": "Изысканное сочетание острого аромата перца черного, нежного имбиря и легкой ноты печёного мяса.",
        "dozirovka": "2-3 г/кг массы",
        "color": "background: linear-gradient(0deg, #E50010 0%, #7F0009 100%)"
      },
      {
        "name": "Туристическая W.M.",
        "description": "Вкусо-ароматическая композиция на основе натуральных специй и пряностей, а именно: имбиря, перца черного, с нежным ароматом печеной свинины.",
        "dozirovka": "3-4 г/кг массы",
        "color": "background: linear-gradient(0deg, #E50010 0%, #7F0009 100%)"
      },

  ]
  const species = [
      {
        "color": "background: rgba(217, 217, 217, 0.23)",
        "name": "НЕЙТРАЛЬНЫЙ",
        "description": "Не содержит ингредиентов, придающих вкус."
      },
      {
        "color": "background: #74F9CC",
        "name": "СЛИВОЧНЫЙ",
        "description": "Нежный, мягкий вкус с характерным ароматом сливок."
      },
      {
        "color": "background: #497A00",
        "name": "ЧЕСНОЧНЫЙ",
        "description": "Сбалансированный жгучий вкус и интенсивный аромат чеснока."
      },
      {
        "color": "background: #A3A200",
        "name": "ПРЯНЫЙ",
        "description": "Изысканный, полный, завершённый вкус и аромат пряных специй."
      },
      {
        "color": "background: #F8DB00",
        "name": "МУСКАТНЫЙ",
        "description": "Основой является полный, завершённый аромат мускатного ореха."
      },
      {
        "color": "background: #FF9800",
        "name": "ПЕРЕЧНЫЙ",
        "description": "Гармоничный, благородный вкус, сочетающий остроту перцев и изысканность душистых трав."
      },
      {
        "color": "background: #C46200",
        "name": "ДЫМНЫЙ",
        "description": "Характеризуется ярко выраженным содержанием дымных ароматов."
      },
      {
        "color": "background: #FC3700",
        "name": "ОСТРЫЙ",
        "description": "Яркий, насыщенный вкус на основе разных перцев."
      },
      {
        "color": "background: #BE0411",
        "name": "МЯСНОЙ",
        "description": "Гармоничный, полный вкус разных сортов мяса и типов приготовления."
      },
  ]
  const sausages = [
    {
      "h3": "Салями Комби Испанская W.M.",
      "p": "Комбинированная композиция, основной нотой в аромате которой является кумин. Острота композиции обусловлена содержанием молотого красного перца чили.\n" +
          "Дозировка: 7-8 г/кг массы\n" +
          "Вкус: пряный. Изысканный, полный, завершённый вкус и аромат пряных специй.",
    },
    {
      "h3": "Шашлычная W.M.",
      "p": "Яркая композиция на основе аромата сочного хорошо прожареного шашлыка.\n" +
          "Дозировка: 3-10 г/кг массы\n" +
          "Вкус: мясной. Гармоничный, полный вкус разных сортов мяса и типов приготовления.",
    },
    {
      "h3": "Салями Киевская W.M.",
      "p": "Композиция вкусо-ароматическая на основе натурального экстракта тмина в комбинации с экстрактом чёрного перца и ароматизатором мяса. Прекрасно подойдёт для колбас «салямной» группы.\n" +
          "Дозировка: 8-10 г/кг массы\n" +
          "Вкус: пряный. Изысканный, полный, завершённый вкус и аромат пряных специй.",
    },
    {
      "h3": "Комби Салями W.M.",
      "p": "Комбинированная композиция, основной нотой в аромате которой является можжевельник. Острота композиции обусловлена содержанием натуральных экстрактов перцев.\n" +
          "Дозировка: 7-9 г/кг массы\n" +
          "Вкус: пряный. Изысканный, полный, завершённый вкус и аромат пряных специй.",
    },
    {
      "h3": "Фермерская W.M.",
      "p": "Мясо, сушёный лук, ароматная горчица, черный перец и нежный майоран - неотъемлемая часть настоящей колбасы.\n" +
          "Дозировка: 5-6 г/кг массы\n" +
          "Вкус: пряный. Изысканный, полный, завершённый вкус и аромат пряных специй.",
    },
    {
      "h3": "Турольска Сам-Смак",
      "p": "Изысканное сочетание острого аромата перца черного, нежного имбиря и легкой ноты печёного мяса.\n" +
          "Дозировка: 2-3 г/кг массы\n" +
          "Вкус: мясной. Гармоничный, полный вкус разных сортов мяса и типов приготовления.",
    },
  ]
  provide("name", name)
  provide("grid_items", grid_items)
  provide("species", species)
  provide("first_types", first_types)
  provide("second_types", second_types)
  provide("Sausages", sausages)

  const isDesktop = ref(false);
  const checkScreen = () => {
    isDesktop.value = window.innerWidth >= 1150;
  };
  onMounted(() => {
    checkScreen();
    window.addEventListener('resize', checkScreen);
  });
  onUnmounted(() => {
    window.removeEventListener('resize', checkScreen);
  });
</script>
<template>
  <HeaderWithoutVideo />
  <main>
      <SausagesAllComponent v-if="!isDesktop" />
      <template v-else>
        <TypesSauseges />
        <TableComponent />
      </template>
  </main>
</template>

<style scoped>
  main{
    width: 100%;
    background: url("/sausages/bg_main.png") center top / cover;
  }
</style>
