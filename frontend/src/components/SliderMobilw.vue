<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from "vue";

const items = [
  {
    id: 1,
    title: "ДЛЯ ВАРЕНЫХ КОЛБАС",
    image: "/img1.png"
  },
  {
    id: 2,
    title: "ДЛЯ ИНЪЕКТИРОВАНИЯ",
    image: "/img2.png"
  },
  {
    id: 3,
    title: "ДЛЯ ПОЛУФАБРИКАТОВ",
    image: "/img3.png"
  },
  {
    id: 4,
    title: "Тест",
    image: "/4.png"
  }
];

// Сколько карточек гарантированно видно на экране одновременно
const VISIBLE = 2;

// Точки, от которых зависит поведение (не только стили)
const DRAG_MAX_WIDTH = 800; // перетаскивание работает строго до этой ширины
const ARROWS_MIN_WIDTH = 600; // стрелки скрыты ниже этой ширины

// Для бесконечной прокрутки дублируем VISIBLE карточек с каждого края:
// [clone(последние N)] + [оригинал] + [clone(первые N)]
const extendedItems = [
  ...items.slice(-VISIBLE).map((item) => ({ ...item, _key: `head-${item.id}` })),
  ...items.map((item) => ({ ...item, _key: `real-${item.id}` })),
  ...items.slice(0, VISIBLE).map((item) => ({ ...item, _key: `tail-${item.id}` }))
];

const REAL_START = VISIBLE; // индекс первого настоящего слайда
const REAL_END = VISIBLE + items.length - 1; // индекс последнего настоящего слайда
const MAX_INDEX = extendedItems.length - VISIBLE; // край с клоном хвоста
const MIN_INDEX = 0; // край с клоном головы

const viewportRef = ref<HTMLElement | null>(null);
const trackRef = ref<HTMLElement | null>(null);

const currentIndex = ref(REAL_START);
const stepPx = ref(0); // ширина одной карточки + gap, в px
const withTransition = ref(true);
const windowWidth = ref(typeof window !== "undefined" ? window.innerWidth : 1200);

const isDraggable = computed(() => windowWidth.value < DRAG_MAX_WIDTH);
const showArrows = computed(() => windowWidth.value >= ARROWS_MIN_WIDTH);

const trackStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * stepPx.value}px)`,
  transition: withTransition.value ? "transform 0.4s ease" : "none"
}));

const updateMeasurements = () => {
  windowWidth.value = window.innerWidth;

  const track = trackRef.value;
  if (!track) return;

  const firstSlide = track.querySelector<HTMLElement>(".swiper-slide");
  if (!firstSlide) return;

  const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || "0");
  stepPx.value = firstSlide.getBoundingClientRect().width + gap;
};

// Когда доехали до клонированного края — мгновенно (без анимации)
// перепрыгиваем на эквивалентную позицию среди настоящих слайдов
const snapIfAtClone = async () => {
  if (currentIndex.value === MAX_INDEX) {
    withTransition.value = false;
    currentIndex.value = REAL_START;
    await nextTick();
    requestAnimationFrame(() => {
      withTransition.value = true;
    });
  } else if (currentIndex.value === MIN_INDEX) {
    withTransition.value = false;
    currentIndex.value = REAL_END + 1;
    await nextTick();
    requestAnimationFrame(() => {
      withTransition.value = true;
    });
  }
};

const onTransitionEnd = () => {
  snapIfAtClone();
};

const slidePrev = () => {
  currentIndex.value -= 1;
};

const slideNext = () => {
  currentIndex.value += 1;
};

// Перетаскивание карточек (работает строго до DRAG_MAX_WIDTH)
let dragStartX = 0;
let isDragging = false;

const onPointerDown = (e: PointerEvent) => {
  if (!isDraggable.value) return;
  isDragging = true;
  dragStartX = e.clientX;
};

const onPointerUp = (e: PointerEvent) => {
  if (!isDragging) return;
  isDragging = false;

  const diff = dragStartX - e.clientX;
  const THRESHOLD = 40;

  if (diff > THRESHOLD) {
    slideNext();
  } else if (diff < -THRESHOLD) {
    slidePrev();
  }
};

const onPointerCancel = () => {
  isDragging = false;
};

let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  updateMeasurements();

  window.addEventListener("resize", updateMeasurements);

  if (viewportRef.value && "ResizeObserver" in window) {
    resizeObserver = new ResizeObserver(() => updateMeasurements());
    resizeObserver.observe(viewportRef.value);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateMeasurements);
  resizeObserver?.disconnect();
});
</script>

<template>
  <div class="carousel-wrapper">
    <button v-if="showArrows" class="custom-arrow" @click="slidePrev">
      <img class="left" src="/Vector.svg">
    </button>

    <div ref="viewportRef" class="mySwiper">
      <div
        ref="trackRef"
        class="swiper-wrapper"
        :class="{ draggable: isDraggable }"
        :style="trackStyle"
        @transitionend="onTransitionEnd"
        @pointerdown="onPointerDown"
        @pointerup="onPointerUp"
        @pointerleave="onPointerCancel"
      >
        <div v-for="item in extendedItems" :key="item._key" class="swiper-slide">
          <div class="card">
            <img :src="item.image" style="border-radius: 40px">

            <p class="p_slider">
              {{ item.title }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <button v-if="showArrows" class="custom-arrow" @click="slideNext">
      <img class="right" src="/strelka_right.svg">
    </button>
  </div>
</template>

<style scoped lang="scss">
  @use "@/styles/styles" as *;

  .carousel-wrapper {
    @include display(space-between, center, 30px);
    width: 1240px;
    background-repeat: no-repeat;
  }

  .custom-arrow {
    @include block(52px, 52px);
    @include display(center, center);
    border: 3px solid white;
    border-radius: 90px;
    @include fonts($size: 40px, $color: white);
    cursor: pointer;
    flex-shrink: 0;
    transition: 0.3s;
    background: transparent;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px rgba(255,255,255,0.5);
    }
  }

  .left {
    @include img(24px, 24px, 100%);
  }

  .right {
    @include img(24px, 24px, 100%);
  }

  .mySwiper {
    width: 1000px;
    height: auto;
    overflow: hidden;
  }

  .swiper-wrapper {
    @include display($gap: 20px);
    height: auto;
    width: max-content;
    touch-action: pan-y;

    // курсор "рука" только там, где реально можно тащить (см. isDraggable)
    &.draggable {
      cursor: grab;

      &:active {
        cursor: grabbing;
      }
    }
  }

  // Ширина карточки = 50% минус половина gap => ровно 2 карточки на экран всегда
  .swiper-slide {
    flex: 0 0 calc(50% - 10px);
    max-width: calc(50% - 10px);
  }

  .card {
    @include button(
      $width: 100%,
      $height: 517px,
      $radius: 40px,
      $border: 4px solid white,
      $color: transparent
    );

    overflow: hidden;

    img {
      @include img(100%, 100%, 90px);
      object-fit: cover;
      border-radius: 90px;
    }

    .p_slider {
      @include fonts(24px, $weight: 400);
      position: absolute;
      left: 0;
      right: 0;
      bottom: 20px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 1000px) {
    .carousel-wrapper {
      display: none;
    }
  }

  @media screen and (min-width: 801px) and (max-width: 999px) {
    .card {
      height: 417px;
    }

    .custom-arrow {
      width: 46px;
      height: 46px;
    }

    .left {
      @include img(22px, 22px, 100%);
    }

    .right {
      @include img(22px, 22px, 100%);
    }
  }

  @media screen and (max-width: 800px) {
    .carousel-wrapper {
      @include width_screen;
      overflow: hidden;
    }

    .mySwiper {
      width: 100%;
    }

    .custom-arrow {
      width: 40px;
      height: 40px;
      border-width: 2px;
    }

    .left,
    .right {
      @include img(18px, 18px, 100%);
    }
  }

  @media screen and (min-width: 561px) and (max-width: 779px) {
    .swiper-slide{
      max-width: 180px;
    }
    .card {
      width: 180px;
      height: 220px;

      .p_slider {
        left: 10px;
        bottom: 10px;
        font-size: 12px;
        width: 90%;
      }
    }
  }

  @media screen and (min-width: 480px) and (max-width: 560px) {
    .swiper-slide{
      max-width: 180px;
    }
    .card {
      width: 180px;
      height: 220px;

      .p_slider {
        text-align: center;
        font-size: 14px;
      }
    }
  }

  @media screen and (min-width: 401px) and (max-width: 479px) {
    .swiper-slide{
      max-width: 150px;
    }
    .card {
      width: 150px;
      height: 200px;
      .p_slider {
        font-size: 12px;
      }
    }
  }

  @media screen and (max-width: 400px) {
    .card {
      height: 200px;
      .p_slider {
        font-size: 12px;
      }
    }
  }
</style>