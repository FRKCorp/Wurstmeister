<script setup lang="ts">
import SliderDesctop from "@/components/SliderDesctop.vue";
import SliderMobilw from "@/components/SliderMobilw.vue";
</script>

<template>
  <div class="ingredients">
    <div class="title">
      <h3 class="title-front">
        ПРОДУКЦИЯ:
      </h3>
    </div>
    <SliderDesctop />
    <SliderMobilw />
  </div>

</template>

<style scoped lang="scss">
@use "@/styles/styles" as *;

.ingredients, .ingredients * { float: none; }
.ingredients { display: flex; flex-direction: column; align-items: center; gap: 32px; width: 100%; padding: 45px 0 65px; background: url('/HomePage/left_1.png') left bottom no-repeat, url('/HomePage/right_3.png') right bottom no-repeat; }
.title { width: min(1650px, calc(100% - 132px)); }
.title-front { margin: 0; color: white; font: 700 clamp(32px, 5.45vw, 70px)/1.15 'Montserrat', sans-serif; text-transform: uppercase; }
@media (max-width: 1100px) { .title { width: calc(100% - 64px); } }
@media (max-width: 767px) { .title { width: calc(100% - 32px); } .title-front { font-size: 30px; } .ingredients { padding-block: 32px; gap: 24px; } }
</style>
