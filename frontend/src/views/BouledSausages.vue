<script setup lang="ts">
  import HeaderBouledSausages from "@/SausagesViewsComponents/HeaderBouledSausages.vue";
  import {onMounted, onUnmounted, provide, ref} from "vue";
  import TypesSauseges from "@/SausagesViewsComponents/TypesSausegesComponent.vue";
  import TableComponent from "@/SausagesViewsComponents/TableComponent.vue";
  import SausagesAllComponent from "@/SausagesViewsComponents/SausagesAllComponent.vue";

  const name = "ДЛЯ ВАРЕНЫХ КОЛБАС"
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
        "name": "Сливочная W.M.",
        "description": "Харизматичная смесь специй с ярко выраженным вкусом и ароматом сливочного масла, сливок; прекрасно дополнена ароматами мациса, перца, имбиря и легкой изысканностью кардамона.",
        "dozirovka": "4-5 г/кг массы",
        "color": "background: linear-gradient(0deg, #68AB7E 0%, #2A4533 100%)"
      },
      {
        "name": "Телячья",
        "description": "Комбинированная композиция с очень ярким ароматизатором мускатного ореха, который скомбинирован с ароматизаторами сливочного масла, кардамона и имбиря.",
        "dozirovka": "8-10 г/кг массы",
        "color": "background: linear-gradient(0deg, #F8DB00 0%, #928100 100%)"
      },
      {
        "name": "Сарделька Комби Сливочная W.M.",
        "description": "Комбинированная композиция (в первую очередь – для вареных колбасных изделий), которая с успехом может использоваться как маскиратор посторонних запахов. Имеет интенсивный приятный сливочный аромат. Композиция разработана для всех видов колбас и мясных изделий.",
        "dozirovka": "7-8 г/кг массы",
        "color": "background: linear-gradient(0deg, #68AB7E 0%, #2A4533 100%)"
      },
      {
        "name": "Докторская Комби Усиленная W.M.",
        "description": "Комплексная пищевая добавка с фосфатной частью и сахарами различной молекулярной массы. Направление вкуса и аромата –мясо, сливки, кардамон, перец белый, мацис.",
        "dozirovka": "7-8 г/кг массы",
        "color": "background: linear-gradient(0deg, #68AB7E 0%, #2A4533 100%)"
      },
      {
        "name": "Сливочная Люкс Комби W.M.",
        "description": "Комбинированная специя, способная решить практически все технологические осложнения при производстве варёных колбасных изделий. Профиль вкуса-аромата: мясо, мускатный орех, перец чёрный, кардамон, имбирь.",
        "dozirovka": "7-9 г/кг массы",
        "color": "background: linear-gradient(0deg, #68AB7E 0%, #2A4533 100%)"
      },
      {
        "name": "Комби Докторская Особая W.M.",
        "description": "Комбинированная вкусо-ароматическая композиция для варёных колбас на основе классического сочетания натуральных ароматизаторов муската, кардамона, перца и ароматизатора молока.",
        "dozirovka": "4-5 г/кг массы",
        "color": "background: linear-gradient(0deg, #68AB7E 0%, #2A4533 100%)"
      },
      {
        "name": "Комби Вареная Особая W.M.",
        "description": "Весьма интересная комбинированная вкусо-ароматическая композиция для варёных колбас. Особенного гармонична при использовании куриного сырья.",
        "dozirovka": "4-5 г/кг массы",
        "color": "background: linear-gradient(0deg, #F8DB00 0%, #928100 100%)"
      }

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
      "h3": "Сливочная W.M.",
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
  <HeaderBouledSausages />
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
