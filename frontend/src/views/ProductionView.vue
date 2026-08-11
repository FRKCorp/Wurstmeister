<script setup lang="ts">
import {provide} from "vue";
import HeaderProduct from "@/ProductionViewComponents/HeaderProduct.vue";
import ProductionComponents from "@/ProductionViewComponents/ProductionComponents.vue";
import BenefitsProductions from "@/ProductionViewComponents/BenefitsProductions.vue";
const name = "Продукция"
const text1 =  {"h2": "Ароматизаторы для производства колбасы", "p": "Колбаса — один из самых популярных продуктов глубокой переработки. " +
      "Часто для удешевления используют мясо механической обвалки, которое даёт нежелательный привкус. " +
      "Готовые вкусо-ароматические композиции Wurstmeister решают эту задачу без долгих и затратных экспериментов."}
const text2 = {
  "h2": "Функциональные пищевые добавки для мясных изделий",
  "p": `Современная мясопереработка невозможна без функциональных добавок.
Решения Wurstmeister созданы на основе 20+ лет опыта, сертифицированы по ISO 22000 и применяются ведущими компаниями мира.

Ассортимент:
1. Влагоудерживающие (белки, фосфаты, каррагинаны) —
для полуфабрикатов и колбас. Сохраняют влагу
при заморозке, увеличивают выход до +200%.
2. Для инъектирования —
для цельномышечных продуктов. Обеспечивают сочность,
белок, цвет. Выход до +175%.
3. Комплексные —
влагоудержание + созреватели + цвет + срок годности.
Технологи Wurstmeister помогут подобрать решение
под ваш продукт и окажут поддержку.`
};
const first_types = [
    {"img": "/types_icons/icon_product.png", "text": "Функциональные смеси для деликатесов и ветчин и натуральных полуфабрикатов", "style": "default"},
    {"img": "/types_icons/icon_product.png", "text": "Вспомогательное средство для увеличения выходов и куттерования", "style": "default"},
    {"img": "/types_icons/icon_product.png", "text": "Функциональные добавки для производства колбасных изделий и полуфабрикатов", "style": "default"},
    {"img": "/types_icons/icon_product.png", "text": "Вкусоароматические добавки", "style": "default"},
    {"img": "/types_icons/icon_product.png", "text": "Консерванты и освежители", "style": "default"},
    {"img": "/types_icons/icon_product.png", "text": "Комплексные пищевые добавки для вареных колбасных изделий", "style": "default"},
    {"img": "/types_icons/icon_product.png", "text": "Комплексные пищевые добавки для варенокопченых и полукопченых колбас", "style": "default"},
    {"img": "/types_icons/icon_product.png", "text": "Полуфабрикаты", "style": "default"},
    {"img": "/types_icons/icon_product.png", "text": "Смеси специй для колбасок гриль и рубленных полуфабрикатов", "style": "default"},
    {"img": "/types_icons/icon_product.png", "text": "Функциональные добавки для изделий в желе и холодцов", "style": "default"},
    {"img": "/types_icons/icon_product.png", "text": "Функциональные добавки для консервов", "style": "default"},
    {"img": "/types_icons/icon_product.png", "text": "Добавки для паштетов и ливерных колбас", "style": "default"},
    {"img": "/types_icons/icon_product.png", "text": "Экстракты натуральных специй", "style": "default"},
]
provide("name", name);
</script>

<template>
  <HeaderProduct />
  <main>
    <ProductionComponents
      :text1="text1"
      :text2="text2"
      :types="first_types"
    />

  </main>
  <BenefitsProductions />
</template>

<style scoped lang="scss">
  main{
  }
</style>