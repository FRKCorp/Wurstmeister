<script setup lang="ts">
import {provide} from "vue";
import HeaderAbout from "@/site_block_components/HeaderAbout.vue";
import AboutCompany from "@/site_block_components/AboutCompany.vue";
import AboutProduction from "@/site_block_components/AboutProduction.vue";
import QualityComponent from "@/site_block_components/QualityComponent.vue";

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
