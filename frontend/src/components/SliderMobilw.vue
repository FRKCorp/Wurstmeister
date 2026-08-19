<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

const swiper = ref<SwiperType | null>(null);

const onSwiper = (instance: SwiperType) => {
  swiper.value = instance;
};

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
</script>

<template>
  <div class="carousel-wrapper">
    <button class="custom-arrow" @click="swiper?.slidePrev()">
      <img class="left" src="/Vector.svg">
    </button>

    <Swiper
      :modules="[Navigation]"
      :slides-per-view="1"
      :breakpoints="{
        601: {
          slidesPerView: 2
        }
      }"
      :space-between="47"
      :loop="true"
      @swiper="onSwiper"
      class="mySwiper"
    >
      <SwiperSlide v-for="item in items" :key="item.id">
        <div class="card">
          <img :src="item.image" style="border-radius: 40px">

          <p class="p_slider">
            {{ item.title }}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>

    <button class="custom-arrow" @click="swiper?.slideNext()">
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
    @include block(80px, 80px);
    @include display(center, center);
    border: 4px solid white;
    border-radius: 90px;
    @include fonts($size: 40px, $color: white);
    cursor: pointer;
    flex-shrink: 0;
    transition: 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 20px rgba(255,255,255,0.5);
    }
  }

  .left {
    @include img(48px, 48px, 100%);
  }

  .right {
    @include img(48px, 48px, 100%);
  }

  .mySwiper {
    @include display($gap: 20px);
    width: 1000px;
    height: auto;
  }

  .swiper-wrapper {
    height: auto;
  }

  .card {
    @include button(
      $width: 315px,
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
      left: 20px;
      bottom: 20px;
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 1000px) {
    .carousel-wrapper {
      display: none;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 999px) {
    .card {
      height: 417px;
    }

    .custom-arrow {
      width: 71px;
      height: 71px;
    }

    .left {
      @include img(52px, 52px, 100%);
    }

    .right {
      @include img(52px, 52px, 100%);
    }
  }

  @media screen and (max-width: 600px) {
    .carousel-wrapper{
      @include width_screen;
    }
    .mySwiper {
      width: 200px;
    }
    .card {
      height: 270px;
      .p_slider {
        left: 10px;
        font-size: 12px;
        width: 90%;
      }
    }

    .custom-arrow {
      width: 35px;
      height: 35px;
    }

    .left {
      @include img(26px, 26px, 100%);
    }

    .right {
      @include img(26px, 26px, 100%);
    }
  }
</style>