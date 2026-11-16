<script setup lang="ts">
import { computed } from 'vue';
import type { CatalogProduct, CatalogLink } from './types';
import { tasteProfiles } from './sausageProducts';

const props = withDefaults(defineProps<{
  title: string;
  products: CatalogProduct[];
  metric?: 'dosage' | 'packaging';
  links?: CatalogLink[];
}>(), { metric: 'dosage', links: () => [] });

const metricTitle = computed(() => props.metric === 'packaging' ? 'Упаковка' : 'Дозировка');
const hasTaste = computed(() => props.products.some(product => product.taste));
const profileFor = (product: CatalogProduct) => tasteProfiles.find(profile => profile.id === product.taste);
const valueFor = (product: CatalogProduct) => product[props.metric] ?? 'Уточните у технолога';
</script>

<template>
  <section class="catalog-page">
    <header class="catalog-hero">
      <div class="catalog-container hero-content">
        <RouterLink to="/" class="catalog-logo" aria-label="Wurstmeister — на главную">
          <img src="/logo_wurst.png" alt="">
        </RouterLink>
        <h1>{{ title }}</h1>
      </div>
    </header>

    <div class="catalog-body">
      <div class="catalog-container">
        <nav v-if="links.length" class="catalog-links" aria-label="Разделы каталога">
          <RouterLink v-for="link in links" :key="link.url" :to="link.url">{{ link.label }} <span aria-hidden="true">→</span></RouterLink>
        </nav>

        <template v-if="products.length">
          <p v-if="metric === 'packaging'" class="catalog-note">Упаковка всех композиций — 2 кг. Применение и дозировку уточняйте у технолога.</p>

          <div class="desktop-catalog" :class="{ 'without-profiles': !hasTaste }">
            <aside v-if="hasTaste" class="taste-panel" aria-label="Профили вкуса">
              <h2>Профиль вкуса</h2>
              <ul>
                <li v-for="profile in tasteProfiles" :key="profile.id">
                  <span class="taste-swatch" :style="{ background: profile.color }" aria-hidden="true"></span>
                  <div><h3>{{ profile.name }}</h3><p>{{ profile.description }}</p></div>
                </li>
              </ul>
            </aside>

            <table class="catalog-table">
              <caption class="visually-hidden">{{ title }} — характеристики продукции</caption>
              <colgroup><col class="name-column"><col class="description-column"><col class="metric-column"><col v-if="hasTaste" class="taste-column"></colgroup>
              <thead><tr><th scope="col">Название</th><th scope="col">Описание</th><th scope="col">{{ metricTitle }}</th><th v-if="hasTaste" scope="col"><span class="visually-hidden">Профиль вкуса</span></th></tr></thead>
              <tbody>
                <tr v-for="product in products" :key="product.name">
                  <th scope="row">{{ product.name }}</th>
                  <td class="product-description">{{ product.description ?? 'Информацию о применении уточняйте у технолога.' }}</td>
                  <td class="product-metric">{{ valueFor(product) }}</td>
                  <td v-if="hasTaste" class="product-taste"><span :style="{ background: profileFor(product)?.color }" :aria-label="profileFor(product)?.name" role="img"></span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="compact-catalog">
            <article v-for="product in products" :key="product.name" class="product-card">
              <div class="product-card-content">
                <h2>{{ product.name }}</h2>
                <p v-if="product.description" class="product-description">{{ product.description }}</p>
                <p v-else>Информацию о применении уточняйте у технолога.</p>
                <p>{{ metricTitle }}: {{ valueFor(product) }}</p>
                <p v-if="profileFor(product)">Вкус: {{ profileFor(product)!.name.toLocaleLowerCase('ru') }}. {{ profileFor(product)!.description }}</p>
              </div>
            </article>
          </div>
        </template>

        <article v-else class="product-card category-information">
          <div class="product-card-content">
            <h2>{{ title }}</h2>
            <p>Уточните актуальный ассортимент, применение и дозировки у нашего технолога. Поможем подобрать продукцию под вашу задачу.</p>
            <RouterLink class="contact-technologist" :to="{ path: '/', hash: '#contacts' }">Связаться с технологом</RouterLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.catalog-page, .catalog-page * { float: none; box-sizing: border-box; }
.catalog-page { width: 100%; color: #fff; font-family: 'Roboto Condensed', sans-serif; }
.catalog-container { width: min(1650px, calc(100% - 64px)); margin-inline: auto; min-width: 0; }
.catalog-hero { display: flex; align-items: center; min-height: 390px; width: 100%; background: #000 url('/sausages/Sausages_BG.png') center center / cover no-repeat; }
.hero-content { display: flex; flex-direction: column; align-items: flex-start; padding-block: 32px 44px; gap: 8px; }
.catalog-logo { display: block; width: 165px; }
.catalog-logo img { display: block; width: 100%; height: auto; }
h1 { max-width: 1220px; margin: 0; font: 400 clamp(30px, 3.4vw, 54px)/1.2 'Rubik Mono One', sans-serif; text-transform: uppercase; overflow-wrap: anywhere; }
.catalog-body { min-height: 60vh; width: 100%; padding-block: 76px 100px; background: #050402 url('/sausages/bg_main.png') center top / cover no-repeat; }
.catalog-links { display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 32px; }
.catalog-links a, .contact-technologist { color: #ffb326; text-decoration: none; border: 1px solid #a67123; border-radius: 10px; padding: 14px 20px; background: #1c150acc; font-size: 20px; }
.catalog-links a:hover, .contact-technologist:hover { background: #5a3a15; }
a:focus-visible { outline: 2px solid #ffa011; outline-offset: 4px; }
.catalog-note { margin: 0 0 24px; font-size: 20px; line-height: 1.45; }
.desktop-catalog { display: grid; grid-template-columns: minmax(210px, 285px) minmax(0, 1fr); align-items: start; gap: 24px; }
.without-profiles { grid-template-columns: minmax(0, 1fr); }
.taste-panel { margin-top: 130px; padding: 28px 22px; border: 1px solid #a67123; border-radius: 18px; background: #3d2a0de8; box-shadow: inset 0 0 0 12px #160f05bd; }
.taste-panel h2 { margin: 0 0 24px; font-size: 22px; text-transform: uppercase; }
.taste-panel ul { display: flex; flex-direction: column; gap: 20px; padding: 0; margin: 0; list-style: none; }
.taste-panel li { display: flex; align-items: stretch; gap: 12px; }
.taste-swatch { width: 16px; flex-shrink: 0; border-radius: 8px; }
.taste-panel h3 { margin: 0 0 3px; font-size: 20px; font-weight: 400; }
.taste-panel p { margin: 0; font-size: 16px; line-height: 1.25; }
.catalog-table { width: 100%; border-collapse: separate; border-spacing: 12px 16px; table-layout: fixed; }
.name-column { width: 28%; } .description-column { width: 48%; } .metric-column { width: 20%; } .taste-column { width: 4%; }
.catalog-table thead th { padding: 28px 12px; background: #292114ed; color: #ffbd38; font-size: 25px; text-transform: uppercase; border-block: 10px solid #191207; }
.catalog-table thead th:first-child { border-left: 10px solid #191207; border-radius: 18px 0 0 18px; }
.catalog-table thead th:last-child { border-right: 10px solid #191207; border-radius: 0 18px 18px 0; }
.catalog-table tbody th, .catalog-table td { padding: 24px; vertical-align: middle; border-radius: 22px; background: linear-gradient(0deg, #d8861147, #5e4c2d47); backdrop-filter: blur(14px); overflow-wrap: anywhere; }
.catalog-table tbody th { color: #ff9809; font-size: 30px; line-height: 1.15; text-align: left; }
.catalog-table .product-description { font-size: 23px; line-height: 1.3; text-align: justify; }
.catalog-table .product-metric { font-size: 22px; line-height: 1.3; text-align: center; padding-inline: 14px; }
.catalog-table .product-taste { padding: 22px 6px; }
.product-taste span { display: block; min-height: 160px; width: 100%; border-radius: 12px; }
.compact-catalog { display: none; }
.product-card { border: 1px solid #8b5b16; border-radius: 20px; padding: 18px; background: #171006d9; box-shadow: 0 0 12px #ffa0111a; }
.product-card-content { display: flex; flex-direction: column; align-items: flex-start; gap: 16px; padding: 26px 32px; border-radius: 14px; background: #29241be8; }
.product-card h2 { margin: 0; color: #ff9809; font-size: 26px; line-height: 1.25; overflow-wrap: anywhere; }
.product-card p { width: 100%; margin: 0; font-size: 25px; line-height: 1.35; }
.product-card .product-description { text-align: justify; }
.category-information { max-width: 1050px; margin-inline: auto; }
.visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
@media (min-width: 1150px) and (max-width: 1399px) {
  .catalog-container { width: calc(100% - 48px); }
  .desktop-catalog { grid-template-columns: 240px minmax(0, 1fr); gap: 16px; }
  .without-profiles { grid-template-columns: minmax(0, 1fr); }
  .catalog-table tbody th, .catalog-table td { padding: 22px 18px; }
  .catalog-table tbody th { font-size: 27px; }
  .catalog-table .product-description { font-size: 21px; }
  .catalog-table .product-metric { font-size: 20px; padding-inline: 10px; }
  .catalog-table thead th { font-size: 22px; }
}
@media (max-width: 1149px) {
  .desktop-catalog { display: none; }
  .compact-catalog { display: flex; flex-direction: column; gap: 32px; }
  .catalog-hero { min-height: 365px; background-image: url('/sausages/Sausages_BG_tablet.png'); }
  .catalog-logo { width: 120px; }
  h1 { font-size: clamp(30px, 4vw, 46px); }
  .catalog-body { padding-block: 48px 64px; }
}
@media (max-width: 599px) {
  .catalog-container { width: calc(100% - 32px); }
  .catalog-hero { min-height: 255px; background-image: url('/sausages/Sausages_bg_mobile.png'); }
  .hero-content { padding-block: 24px 32px; gap: 12px; }
  .catalog-logo { width: 80px; }
  h1 { font-size: clamp(21px, 5.5vw, 30px); }
  .catalog-body { padding-block: 32px 48px; }
  .compact-catalog { gap: 24px; }
  .product-card { padding: 12px; border-radius: 14px; }
  .product-card-content { padding: 18px 16px; gap: 12px; border-radius: 8px; }
  .product-card h2 { font-size: 18px; }
  .product-card p { font-size: 17px; line-height: 1.4; }
  .catalog-links { gap: 12px; margin-bottom: 24px; }
  .catalog-links a, .contact-technologist { font-size: 16px; padding: 12px 14px; }
  .catalog-note { font-size: 17px; }
}

/* Dimensions from Figma frames 6:11, 6:159 and 6:223. */
.catalog-hero { min-height: 366px; }
.hero-content { width: 87%; padding: 17px 0 29px; gap: 0; }
.catalog-logo { width: 190px; }
h1 { font-size: 48px; line-height: 1.16; }
.catalog-body > .catalog-container { width: 87%; }
.desktop-catalog { grid-template-columns: 271px minmax(0, 1fr); gap: 39px; }
.without-profiles { grid-template-columns: minmax(0, 1fr); }
.catalog-table { border-spacing: 14px 16px; }
.name-column { width: 29.3%; } .description-column { width: 42.4%; } .metric-column { width: 23.6%; } .taste-column { width: 4.7%; }
.catalog-table tbody th { font-size: 32px; line-height: 1.011; padding: 26px 30px 26px 44px; }
.catalog-table .product-description { font-size: 24px; line-height: 1.011; padding: 15px 29px; }
.catalog-table .product-metric { font-size: 24px; line-height: 1.011; }
.catalog-table tbody tr:nth-child(1), .catalog-table tbody tr:nth-child(7) { height: 220px; }
.catalog-table tbody tr:nth-child(2) { height: 134px; }
.catalog-table tbody tr:nth-child(3), .catalog-table tbody tr:nth-child(4) { height: 255px; }
.catalog-table tbody tr:nth-child(5) { height: 176px; }
.catalog-table tbody tr:nth-child(6) { height: 153px; }
.catalog-table .product-taste { padding: 26px 9px; position: relative; }
.product-taste span { position: absolute; inset: 26px 9px; min-height: 0; height: auto; width: auto; }
.catalog-table thead { position: relative; isolation: isolate; }
.catalog-table thead::before, .catalog-table thead::after { content: ''; position: absolute; pointer-events: none; }
.catalog-table thead::before { inset: 0; z-index: -2; border: 1px solid #946a2b; border-radius: 18px; background: #1b150bef; box-shadow: 0 0 12px #ffae2230; }
.catalog-table thead::after { inset: 24px 22px 18px; z-index: -1; border-radius: 18px; background: linear-gradient(110deg, #30291c, #282217); box-shadow: 0 5px 7px #0005; }
.catalog-table thead th { height: 140px; padding: 25px 8px; border: 0; background: transparent; color: #ffa51c; font-size: 30px; font-weight: 700; text-align: center; vertical-align: middle; }
.catalog-table thead th:first-child, .catalog-table thead th:last-child { border: 0; border-radius: 0; }
.taste-panel { margin-top: 164px; padding: 28px 20px; }
.taste-panel p { font-weight: 300; text-transform: uppercase; }
@media (max-width: 1149px) {
 .catalog-hero { min-height: 375px; }
 .hero-content { width: calc(100% - 64px); padding: 32px 0; }
 .catalog-logo { width: 105px; }
 h1 { font-size: 42px; }
 .catalog-body { padding-top: 54px; }
 .catalog-body > .catalog-container { width: calc(100% - 62px); }
 .compact-catalog { gap: 37px; }
 .product-card { padding: 20px 26px; border-radius: 16px; background: #0b0b0bcc; }
 .product-card-content { padding: 18px 34px 24px; gap: 13px; background: #ffffff0d; backdrop-filter: blur(15px); }
 .product-card h2 { font-size: 26px; line-height: 1.27; }
 .product-card p { font-size: 26px; line-height: 1.16; font-weight: 400; }
}
@media (max-width: 599px) {
 .catalog-hero { min-height: 247px; }
 .hero-content { width: calc(100% - 46px); padding: 11px 0 13px; }
 .catalog-logo { width: 70px; }
 h1 { font-size: clamp(21px, 6.5vw, 26px); line-height: 1.05; }
 .catalog-body { padding-top: 23px; }
 .catalog-body > .catalog-container { width: calc(100% - 44px); }
 .compact-catalog { gap: 17px; }
 .product-card { padding: 10px 12px 12px; border-radius: 16px; }
 .product-card-content { padding: 15px 16px 20px; gap: 10px; }
 .product-card h2 { font-size: 15px; line-height: 18px; }
 .product-card p { font-size: 15px; line-height: 18px; }
}
</style>
