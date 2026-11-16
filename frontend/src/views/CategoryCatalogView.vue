<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ProductCatalog from '@/catalog/ProductCatalog.vue';
import { ingredientCategories } from '@/data/ingredients';
const route = useRoute();
const category = computed(() => ingredientCategories.find(item => item.url === '/products/' + String(route.params.slug)));
</script>

<template>
  <ProductCatalog v-if="category" :key="category.id" :title="category.title" :products="[]" />
  <section v-else class="missing-category">
    <h1>Раздел не найден</h1>
    <RouterLink to="/">Вернуться на главную</RouterLink>
  </section>
</template>

<style scoped>
.missing-category { display: flex; flex-direction: column; align-items: center; width: 100%; padding: 80px 24px; gap: 24px; color: white; font-family: 'Roboto Condensed', sans-serif; }
.missing-category a { color: #ffa011; }
</style>
