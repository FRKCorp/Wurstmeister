<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { A11y, Navigation, Keyboard } from 'swiper/modules';
import IngredientCard from './IngredientCard.vue';
import { ingredientCategories } from '@/data/ingredients';
import 'swiper/css';
import 'swiper/css/navigation';
</script>
<template>
  <div class="mobile-carousel">
    <Swiper :modules="[A11y, Navigation, Keyboard]" :slides-per-view="1.5" :space-between="10"
      :breakpoints="{ 600: { slidesPerView: 2.25, spaceBetween: 12 } }" :loop="true"
      :keyboard="{ enabled: true, onlyInViewport: true }"
      :navigation="{ prevEl: '.ingredient-prev', nextEl: '.ingredient-next' }">
      <SwiperSlide v-for="item in ingredientCategories" :key="item.id">
        <IngredientCard :item="item" />
      </SwiperSlide>
    </Swiper>
    <div class="controls">
      <button class="ingredient-prev" aria-label="Предыдущая категория">←</button>
      <button class="ingredient-next" aria-label="Следующая категория">→</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "@/styles/styles" as *;
.mobile-carousel :deep(*) { float: none; }
.mobile-carousel :deep(.swiper) { width: 100%; padding: 6px 0; }
.mobile-carousel :deep(.swiper-wrapper) { max-width: none; }
.mobile-carousel :deep(.swiper-slide) { height: auto; }
.mobile-carousel { display: none; width: calc(100% - 32px); min-width: 0; float: none; }
.controls { display: flex; justify-content: center; gap: 16px; width: 100%; margin-top: 20px; }
button { width: 44px; height: 44px; border: 2px solid #ffa011; border-radius: 50%; color: white; font-size: 24px; cursor: pointer; }
@media (max-width: 767px) { .mobile-carousel { display: block; } }
</style>
