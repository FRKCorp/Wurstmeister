<script setup lang="ts">
import ProductCatalog from '@/catalog/ProductCatalog.vue';
import { smokedProducts } from '@/catalog/sausageProducts';
</script>

<template>
  <ProductCatalog title="Для варёно-копчёных, полукопчёных, сырокопчёных колбас и ветчин" :products="smokedProducts" />
</template>
