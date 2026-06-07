<script setup lang="ts">
import HeaderWithoutVideo from "@/site_block_components/HeaderWithoutVideo.vue";
import {provide} from "vue";
import TypesSauseges from "@/site_block_components/TypesSausegesComponent.vue";
import TableComponent from "@/site_block_components/TableComponent.vue";

const name = "ДЛЯ ВАРЕНЫХ КОЛБАС"
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
