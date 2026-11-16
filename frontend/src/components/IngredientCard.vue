<script setup lang="ts">
defineProps<{ item: { title: string; image: string; url: string } }>();
</script>
<template>
  <RouterLink :to="item.url" :class="['ingredient-card', { 'spice-card': item.image.includes('spices'), 'additive-card': item.image.includes('additives') }]">
    <div class="image-stage"><img :src="item.image" alt="" draggable="false"></div>
    <span>{{ item.title }}</span>
  </RouterLink>
</template>
<style scoped>

.ingredient-card, .ingredient-card * { float: none; }
.ingredient-card { display: flex; flex-direction: column; width: 100%; aspect-ratio: 344 / 499; min-width: 0; overflow: hidden; border: 3px solid white; border-radius: 49px; color: #fff; background: #000; text-decoration: none; isolation: isolate; transition: transform .3s, background-color .3s, border-color .3s, box-shadow .3s; }
.image-stage { position: absolute; left: 5%; top: 1.87%; width: 90%; height: 82.7%; border-radius: 40px; overflow: hidden; }
img { position: absolute; left: 0; top: -12.46%; width: 100%; max-width: none; height: 112.52%; object-fit: fill; transition: transform .3s; }
.spice-card .image-stage { left: 2%; top: 5.88%; width: 96%; height: 71.77%; }
.spice-card img { top: -18.42%; height: 122%; }
.additive-card .image-stage { left: 6%; top: 11.22%; width: 88%; height: 69.16%; }
.additive-card img { top: -18.94%; height: 131.25%; }
span { display: flex; height: 22%; margin-top: auto; flex: 0 0 auto; align-items: center; justify-content: center; width: 100%; padding: 8px 10px 16px; font: 400 clamp(17px, 1.8vw, 23px)/1.25 'Montserrat', sans-serif; text-align: center; overflow-wrap: anywhere; z-index: 1; }
.ingredient-card:focus-visible { outline: 3px solid #ffa011; outline-offset: 4px; }
@media (hover: hover) { .ingredient-card:hover { transform: scale(1.02); background-color: #39270d; border-color: #ffa011; box-shadow: 0 12px 32px #ffa01133; } .ingredient-card:hover img { transform: scale(1.035); } }
@media (max-width: 767px) { .ingredient-card { border-radius: 32px; border-width: 2px; } .image-stage { border-radius: 29px; } span { font-size: 17px; padding: 6px 8px 12px; } }
@media (prefers-reduced-motion: reduce) { .ingredient-card, img { transition: none; } }

</style>

