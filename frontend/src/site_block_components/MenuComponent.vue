<script setup lang="ts">
import { ref, inject, onMounted, onUnmounted } from 'vue'
import MenuButton from "@/components/Menu-button.vue"

const isMenuOpen = ref(false)
const windowWidth = ref(window.innerWidth)

const textes = inject("menu")
console.log(textes);
const closeMenu = () => {
  isMenuOpen.value = false
}

let resizeHandler: (() => void) | null = null

onMounted(() => {
  resizeHandler = () => {
    windowWidth.value = window.innerWidth
    if (windowWidth.value > 880) {
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
          <RouterLink v-for="item in textes" :key="item"  class="menu-button-text" :to="item.url">
            {{item.name}}
          </RouterLink>
        </div>
        <button class="menu-button">ОСТАВИТЬ ЗАЯВКУ</button>
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
          :key="item"
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

<style lang="scss" scoped>
@use "@/styles/styles" as *;

.menu {
  @include display($flex-direction: row, $justify-content: center);
  @include block($width:100%, $height: 92px, $color: black);
  position: relative;
  z-index: 1001;
}
.menu_labels{
  @include display($flex-direction: row, $justify-content: space-between);
  @include block($width: 1700px, $height: 100%) ;
}
.name {
  @include fonts($size: 24px, $weight: 900);
}

.desktop-menu {
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 880px) {
    display: none;
  }
}

.menu-items {
  display: flex;
  gap: 30px;
}

.menu-button-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  transition: color 0.3s;

  &:hover {
    color: #FE9809;
  }
}

.menu-button {
  @include button($width: 203px, $height: 41px, $radius: 10px,
    $color: linear-gradient(-127deg, $moc 0%, #623700 35%, #000000 50%, #623700 65%, $moc 100%));
  @include fonts();
  border: none;
  cursor: pointer;
}

/* ==================== МОБИЛЬНАЯ ЧАСТЬ (800px и ниже) ==================== */
.mobile-header-right {
  display: none;
  align-items: center;
  gap: 20px;

  @media (max-width: 880px) {
    display: flex;
  }
}

.mobile-request-btn {
  @media (max-width: 880px) {
    display: block;
    width: 170px;
    height: 40px;
    font-size: 14px;
  }
}


.mobile-menu {
  position: fixed;
  top: 92px;
  left: 0;
  width: 100%;
  height: calc(100vh - 92px);
  background: #000;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
}

.mobile-menu-item {
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s;

  &:hover {
    color: #FE9809;
  }
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


@media (max-width: 880px) {
  .menu {
    justify-content: space-between;
    padding: 0 20px;
    gap: 0;
  }
}



@media screen and (min-width: 1280px) and (max-width: 1650px) {
  .menu_labels {
    width: 1240px;
  }
}
@media screen and (min-width: 1150px) and (max-width: 1279px) {
  .menu_labels { width: 1150px }
}
@media screen and (min-width: 1001px) and (max-width: 1149px) {
  .menu_labels { width: 1000px }
}
@media screen and (min-width: 801px) and (max-width: 1000px) {
}
</style>