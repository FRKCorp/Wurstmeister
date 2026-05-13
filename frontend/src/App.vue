<script setup lang="ts">
import MenuComponent from "@/site_block_components/MenuComponent.vue";
import HeaderComponent from "@/site_block_components/HeaderComponent.vue";
import AdvantageSlider from "@/site_block_components/AdvantageSliderComponent.vue";
import AboutUsComponent from "@/site_block_components/AboutUsComponent.vue";
import IngredientsComponent from "@/site_block_components/IngredientsComponent.vue";
import ContactBlock from "@/site_block_components/ContactBlock.vue";
import { provide, ref } from 'vue'
const menu_textes = ref(['Главная', 'О нас', 'продукция']);
provide("menu-textes", menu_textes)
</script>

<template>
  <MenuComponent />
  <HeaderComponent />
  <AdvantageSlider />
  <AboutUsComponent />
  <IngredientsComponent />
  <ContactBlock />

</template>

<style scoped>

</style>
