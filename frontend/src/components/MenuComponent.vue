<script setup lang="ts">
import { ref, inject, onMounted, onUnmounted } from 'vue'
import MenuButton from "@/components/Menu-button.vue"

const isMenuOpen = ref(false)
const windowWidth = ref(window.innerWidth)

const textes = inject<Array<{ name: string; url: import("vue-router").RouteLocationRaw }>>("menu", [])

const closeMenu = () => {
  isMenuOpen.value = false
}

let resizeHandler: (() => void) | null = null

onMounted(() => {
  resizeHandler = () => {
    windowWidth.value = window.innerWidth
    if (windowWidth.value > 999) {
      isMenuOpen.value = false
    }
  }

  window.addEventListener('resize', resizeHandler)
})

onUnmounted(() => {
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
  }
})
</script>

<template>
  <div class="menu">
    <div class="menu_labels">
      <RouterLink to="/">
        <span class="name">WURST</span>
        <span class="name" style="color: #FE9809">MEISTER</span>
      </RouterLink>
      <div class="desktop-menu">
        <div class="menu-items">
          <RouterLink v-for="item in textes" :key="item.name"  class="menu-button-text" :to="item.url">
            {{item.name}}
          </RouterLink>
        </div>
        <button class="menu-button" @click="$router.push({ path: '/', hash: '#contacts' })">ОСТАВИТЬ ЗАЯВКУ</button>
      </div>
      <div class="mobile-header-right">
        <button
          class="menu-button mobile-request-btn"
          @click="closeMenu"
        >
          ОСТАВИТЬ ЗАЯВКУ
        </button>

        <MenuButton
          :is-open="isMenuOpen"
          @toggle="isMenuOpen = !isMenuOpen"
        />
      </div>
    </div>
  </div>

  <transition name="fade">
    <div v-if="isMenuOpen" class="mobile-menu">
      <div class="mobile-menu-content">
        <RouterLink
          v-for="item in textes"
          :key="item.name"
          class="mobile-menu-item"
          @click="closeMenu"
          :to="item.url"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@use "@/styles/styles" as *;

.menu, .menu *, .mobile-menu, .mobile-menu * { float: none; }
.menu { display: flex; justify-content: center; width: 100%; height: 92px; background: #000; z-index: 1001; }
.menu_labels { display: flex; align-items: center; justify-content: space-between; gap: 24px; width: min(1650px, calc(100% - 108px)); height: 100%; }
.menu_labels > a { display: flex; flex-shrink: 0; text-decoration: none; }
.name { font: 900 24px/1.2 'Montserrat', sans-serif; color: #fff; }
.desktop-menu, .menu-items { display: flex; align-items: center; gap: 30px; }
.menu-button-text { color: #fff; text-transform: uppercase; text-decoration: none; font: 600 18px/1.3 'Montserrat', sans-serif; }
.menu-button-text:hover, .mobile-menu-item:hover { color: #fe9809; }
.menu-button { display: inline-flex; align-items: center; justify-content: center; width: 203px; height: 41px; border: 1px solid #ffa011; border-radius: 10px; background: linear-gradient(125deg, #ffa011, #6237004d 52%, #ffa011); color: white; font: 700 14px/1.2 'Montserrat', sans-serif; cursor: pointer; }
.mobile-header-right { display: none; align-items: center; gap: 16px; }
.mobile-menu { position: fixed; inset: 0; width: 100%; height: 100dvh; overflow-y: auto; background: #000; z-index: 1000; display: flex; justify-content: center; }
.mobile-menu-content { display: flex; flex-direction: column; align-items: center; gap: 32px; padding: 140px 24px 40px; }
.mobile-menu-item { font: 700 clamp(22px, 4vw, 32px)/1.4 'Montserrat', sans-serif; color: white; text-decoration: none; text-transform: uppercase; }
.fade-enter-active, .fade-leave-active { transition: opacity .25s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
@media (max-width: 1199px) { .menu_labels { width: calc(100% - 64px); } .desktop-menu, .menu-items { gap: 18px; } .menu-button-text { font-size: 14px; } .name { font-size: 22px; } .menu-button { width: 180px; font-size: 12px; } }
@media (max-width: 999px) { .desktop-menu { display: none; } .mobile-header-right { display: flex; } }
@media (max-width: 767px) { .menu { height: 76px; } .menu_labels { width: calc(100% - 32px); gap: 12px; } .name { font-size: 18px; } .mobile-request-btn { width: 142px; height: 38px; font-size: 10px; } .mobile-header-right { gap: 10px; } }
@media (max-width: 374px) { .name { font-size: 15px; } .mobile-request-btn { width: 116px; font-size: 9px; } }
</style>
