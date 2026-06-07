<script setup lang="ts">

import MenuComponent from "@/site_block_components/MenuComponent.vue";
import {provide} from "vue";
import ContactBlock from "@/site_block_components/ContactBlock.vue";

const menu_textes = [{"name":'Главная', "url": "/"}, {"name": 'О нас', "url": "about"}, {"name": 'продукция', "url": "/production"}, {"name": 'контакты', "url": "/contacts"}];
provide("menu", menu_textes)


</script>

<template>
  <MenuComponent />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  main{
    background: black;
    width: 100%;
  }
</style>
