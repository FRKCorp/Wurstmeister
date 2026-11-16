<script setup lang="ts">
import IngredientCard from './IngredientCard.vue';
import { ingredientCategories } from '@/data/ingredients';
</script>
<template>
  <div class="ingredient-grid">
    <IngredientCard v-for="item in ingredientCategories" :key="item.id" :item="item" />
  </div>
</template>
<style scoped lang="scss">
@use "@/styles/styles" as *;

.ingredient-grid { float: none; display: grid; grid-template-columns: repeat(3, minmax(0, calc((100% - 96px) / 3 * .82))); justify-content: center; gap: 18px 20px; width: min(1650px, calc(100% - 132px)); }
.ingredient-grid :deep(.ingredient-card) { width: 100%; }
@media (max-width: 1100px) { .ingredient-grid { width: calc(100% - 64px); grid-template-columns: repeat(3, minmax(0, calc((100% - 48px) / 3 * .82))); gap: 18px; } }
@media (min-width: 768px) and (max-width: 999px) { .ingredient-grid { grid-template-columns: repeat(2, minmax(0, calc((100% - 24px) / 2 * .82))); } }
@media (max-width: 767px) { .ingredient-grid { display: none; } }
</style>
