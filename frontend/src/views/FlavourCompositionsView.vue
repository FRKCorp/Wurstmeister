<script setup lang="ts">
import ProductCatalog from '@/catalog/ProductCatalog.vue';
import { flavourCompositions } from '@/data/ingredients';
const links = [
  { label: 'Для варёных колбас', url: '/boiledsausages' },
  { label: 'Для варёно-копчёных, полукопчёных, сырокопчёных колбас и ветчин', url: '/boilednsmokedsausages' },
];
</script>

<template>
  <ProductCatalog title="Вкусоароматические композиции" :products="flavourCompositions" metric="packaging" :links="links" />
</template>
