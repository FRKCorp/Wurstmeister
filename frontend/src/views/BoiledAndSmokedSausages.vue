<script setup lang="ts">
import HeaderWithoutVideo from "@/site_block_components/HeaderWithoutVideo.vue";
import {provide} from "vue";
import TypesSauseges from "@/site_block_components/TypesSausegesComponent.vue";
import TableComponent from "@/site_block_components/TableComponent.vue";

const name = "ДЛЯ ВАРЁНО-КОПЧЁНЫХ, ПОЛУКОПЧЁНЫХ, СЫРОКОПЧЁНЫХ КОЛБАС И ВЕТЧИН"
const first_types = [
    {"img": "/types_icons/first.png", "text": "ВКУСО-АРОМАТИЧЕСКИЕ КОМПОЗИЦИИ", "style": "head_type"},
    {"img": "/types_icons/second.png", "text": "ДЛЯ ВАРЁНО-КОПЧЁНЫХ, ПОЛУКОПЧЁНЫХ, СЫРОКОПЧЁНЫХ КОЛБАС И ВЕТЧИН", "style": "big_p"},
    {"img": "/types_icons/second.png", "text": "ДЛЯ ВАРЕНЫХ КОЛБАС", "style": "default"},
    {"img": "/types_icons/second.png", "text": "ДЛЯ ВСЕХ ВИДОВ КОЛБАС И МЯСНЫХ ИЗДЕЛИЙ", "style": "big_p"},
]
const second_types = [
    {"img": "/types_icons/first.png", "text": "функциональные добавки", "style": "head_type"},
    {"img": "/types_icons/second.png", "text": "ДЛЯ ИНЪЕКТИРОВАНИЯ", "style": "default"},
    {"img": "/types_icons/second.png", "text": "КОМПЛЕКСНЫЕ ДОБАВКИ", "style": "default"},
    {"img": "/types_icons/second.png", "text": "ДЛЯ ПОЛУФАБРИКАТОВ", "style": "default"},
    {"img": "/types_icons/second.png", "text": "ДЛЯ РЫБНЫХ ИЗДЕЛИЙ", "style": "default"},
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

provide("name", name)
provide("grid_items", grid_items)
provide("species", species)
provide("first_types", first_types)
provide("second_types", second_types)
</script>

<template>

  <HeaderWithoutVideo />
  <main>
    <TypesSauseges />
    <TableComponent />
  </main>

</template>

<style scoped>
  main{
    background: linear-gradient(0deg, rgba(0, 0, 0, 0) 90%, rgba(255, 160, 17, 0.79) 100%),
                url("/sausages/bg_main.png") center center / cover;
  }
</style>
