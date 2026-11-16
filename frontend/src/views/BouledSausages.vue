<script setup lang="ts">
import ProductCatalog from '@/catalog/ProductCatalog.vue';
import { boiledProducts } from '@/catalog/sausageProducts';
</script>

<template>
  <ProductCatalog title="Для варёных колбас" :products="boiledProducts" />
</template>
