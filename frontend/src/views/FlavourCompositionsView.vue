<script setup lang="ts">
import { flavourCompositions } from '@/data/ingredients';
import ContactBlock from '@/HomeViewComponents/ContactBlock.vue';
</script>

<template>
  <section class="composition-catalog">
    <header>
      <RouterLink to="/" class="back-link">← На главную</RouterLink>
      <h1>Вкусоароматические композиции</h1>
      <p>Упаковка — 2 кг</p>
    </header>
    <div class="product-grid">
      <article v-for="product in flavourCompositions" :key="product.name" class="product-card">
        <h2>{{ product.name }}</h2>
        <p><span>Упаковка</span> {{ product.packaging }}</p>
      </article>
    </div>
  </section>
  <ContactBlock />
</template>

<style scoped>
.composition-catalog { display: flex; flex-direction: column; align-items: center; gap: 40px; width: 100%; padding: 60px 24px 80px; background: #13110e url('/sausages/bg_main.png') center top / cover; font-family: 'Roboto Condensed', sans-serif; color: white; }
header { display: flex; flex-direction: column; align-items: flex-start; gap: 20px; width: min(1240px, 100%); text-align: left; }
.back-link { color: #ffa011; font-size: 18px; }
h1 { font-size: clamp(26px, 4vw, 48px); text-transform: uppercase; overflow-wrap: anywhere; }
header p { font-size: 22px; color: #e3d6bf; }
.product-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); width: min(1240px, 100%); gap: 24px; }
.product-card { display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 20px; min-height: 180px; padding: 28px; border: 1px solid #a67123; border-radius: 24px; background: linear-gradient(135deg, #382b1cdd, #181511ee); text-align: left; transition: transform .25s, background-color .25s, border-color .25s; }
h2 { font-size: clamp(20px, 2vw, 26px); color: #ffa011; overflow-wrap: anywhere; }
.product-card p { font-size: 18px; }
.product-card span { float: none; color: #c9bcaa; margin-right: 12px; }
@media (hover: hover) { .product-card:hover { transform: scale(1.025); background-color: #a67123; border-color: #ffa011; } }
@media (min-width: 600px) and (max-width: 999px) { .product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 599px) { .composition-catalog { padding: 36px 16px 48px; } .product-grid { grid-template-columns: minmax(0, 1fr); gap: 16px; } .product-card { min-height: 150px; padding: 24px; } }
@media (prefers-reduced-motion: reduce) { .product-card { transition: none; } }
</style>
