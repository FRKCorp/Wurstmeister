<script setup lang="ts">

</script>

<template>
  <div class="items">
    <video autoplay muted loop playsinline preload="metadata" poster="/HomePage/figma/hero.png" class="bg-video">
      <source src="/HomePage/header_video.mp4" type="video/mp4">
    </video>

    <div class="content">
      <header>
        <img class="logo_image" src="/HomePage/figma/logo.png" alt="Логотип Wurstmeister">
        <h1>WURSTMEISTER</h1>
        <h2>Производитель комплексных пищевых добавок для мясоперерабатывающей промышленности</h2>
      </header>
    </div>

  </div>
</template>

<style scoped lang="scss">
@use "@/styles/styles" as *;

.items, .items * { float: none; }
.items { display: flex; align-items: center; width: 100%; min-height: 612px; overflow: hidden; background: #000 url('/HomePage/figma/hero.png') right center / auto 100% no-repeat; }
.bg-video { position: absolute; top: 0; right: 0; bottom: 0; left: auto; width: 66%; height: 100%; object-fit: cover; object-position: right center; }
.items::before { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, #000 0%, #000b 28%, transparent 64%), linear-gradient(0deg, #ffa01133, transparent 32%); z-index: 1; }
.content { width: min(1650px, calc(100% - 132px)); margin-inline: auto; z-index: 2; padding-block: 60px 80px; }
header { display: flex; flex-direction: column; align-items: flex-start; width: 100%; }
.logo_image { width: 246px; height: 197px; object-fit: contain; margin-left: -22px; }
h1 { margin: 0; font: 700 clamp(34px, 5.45vw, 70px)/1.15 'Montserrat', sans-serif; color: #fff; letter-spacing: -.03em; }
h2 { width: min(595px, 52%); margin: 0; color: #fff; font: 400 clamp(20px, 2.35vw, 30px)/1.35 'Montserrat', sans-serif; text-transform: none; text-align: left; text-justify: inter-word; }
@media (max-width: 1100px) { .content { width: calc(100% - 64px); } .items { min-height: 540px; } h2 { width: 52%; } }
@media (max-width: 767px) { .content { width: calc(100% - 32px); padding-block: 32px 48px; } .items { min-height: 440px; } .logo_image { width: 150px; height: 120px; margin-left: -12px; } h1 { font-size: clamp(26px, 7.5vw, 48px); } h2 { width: min(440px, 90%); margin-top: 12px; font-size: 19px; } .bg-video { left: 0; width: 100%; object-position: 62% center; } .items::before { background: linear-gradient(90deg, #000e, #0007 70%, #0003); } }
@media (prefers-reduced-motion: reduce) { .bg-video { display: none; } }
</style>
