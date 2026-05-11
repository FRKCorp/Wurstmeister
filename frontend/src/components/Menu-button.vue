<script setup lang="ts">
import {inject, ref} from "vue";
const textes = inject("menu-textes", [])
</script>

<template>
  <div class="menu-items">
    <a href="" class="menu-button-text" v-for="item in textes">{{item}}</a>
  </div>

</template>

<style scoped>
  .menu-items{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    gap: 10px;
  }
  .menu-button-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
}

</style>