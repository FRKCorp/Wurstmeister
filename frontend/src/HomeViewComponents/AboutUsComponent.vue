<script setup lang="ts">

</script>

<template>
  <div class="about">
    <img src="/HomePage/figma/about.png" alt="Фирменная упаковка Wurstmeister со специями" loading="lazy" class="about_image"/>
    <div class="about_group">
      <div class="textes">
      <h3>
        о нас
      </h3>
      <p class="p_about">Wurstmeister — это торговая марка, принадлежащая ООО «ТЕХНОЛОГИЯ ПЛЮС КРЫМ», одной из ведущих компаний в сфере производства и поставки ингредиентов для пищевой индустрии. Мы специализируемся на предоставлении вкусоароматических и функциональных добавок для мясоперерабатывающих предприятий.</p>
    </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@use "@/styles/styles" as *;

.about, .about * { float: none; }
.about { display: flex; align-items: center; width: 100%; min-height: 510px; overflow: hidden; background: #000; }
.about_image { position: absolute; left: -12%; top: 0; width: 56%; max-width: none; height: 100%; object-fit: contain; object-position: right center; }
.about_group { width: min(1650px, calc(100% - 132px)); margin-inline: auto; display: flex; justify-content: flex-end; padding-block: 55px; }
.textes { display: flex; flex-direction: column; align-items: flex-start; gap: 24px; width: 62%; }
h3 { margin: 0; color: #fff; font: 700 clamp(32px, 5.45vw, 70px)/1.15 'Montserrat', sans-serif; text-transform: uppercase; }
.p_about { margin: 0; color: #fff; font: 400 clamp(20px, 2.35vw, 30px)/1.35 'Montserrat', sans-serif; text-align: justify; text-justify: inter-word; }
@media (max-width: 1100px) { .about_group { width: calc(100% - 64px); } .textes { width: 62%; } }
@media (max-width: 767px) { .about_group { width: calc(100% - 32px); padding-block: 32px; } .about { min-height: 0; } .textes { width: 100%; gap: 18px; } .about_image { position: relative; width: min(100%, 420px); height: 250px; left: auto; margin: 0 auto; object-position: center; } .about { flex-direction: column; } .p_about { font-size: 18px; } h3 { font-size: 30px; } }
</style>
