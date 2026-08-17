<script setup lang="ts">

import MenuComponent from "@/components/MenuComponent.vue";
import {provide} from "vue";
import ContactBlock from "@/HomeViewComponents/ContactBlock.vue";

const menu_textes = [
    {
      "name":'Главная',
      "url": "/"
    },
    {
      "name": 'О нас',
      "url": "about"
    },
    {
      "name": 'продукция',
      "url": "/production"
    },
    {
      name: 'контакты',
      url: {
        path: '/',
        hash: '#contacts'
      }
    },
];
provide("menu", menu_textes)


</script>

<template>
  <MenuComponent/>
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
