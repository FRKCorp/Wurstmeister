<script setup lang="ts">
import {provide} from "vue";
import HeaderAbout from "@/AboutViewComponents/HeaderAbout.vue";
import AboutCompany from "@/AboutViewComponents/AboutCompany.vue";
import AboutProduction from "@/AboutViewComponents/AboutProduction.vue";
import QualityComponent from "@/AboutViewComponents/QualityComponent.vue";

const name = "О КОМПАНИИ WURSTMEISTER"


provide("name", name)

</script>

<template>

  <HeaderAbout />
  <main>
    <AboutCompany />
    <AboutProduction/>
    <QualityComponent />
  </main>

</template>

<style scoped>
  main{
    width: 100%;
  }
</style>
