<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
const swiper = ref<SwiperType | null>(null)
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
  <div class="ingredients">
    <div class="title">

      <h2 class="title-back">
        ИНГРЕДИЕНТЫ ДЛЯ:
      </h2>

      <h2 class="title-front">
        ИНГРЕДИЕНТЫ ДЛЯ:
      </h2>

    </div>
    <div class="carousel-wrapper">

      <button class="custom-arrow" @click="swiper?.slidePrev()">
        <img class="left" src="/Vector.svg">
      </button>

      <Swiper
        :modules="[Navigation]"
        :slides-per-view="3"
        :space-between="47"
        :loop="true"
        @swiper="onSwiper"
        class="mySwiper"
      >
        <SwiperSlide v-for="item in items" :key="item.id" class="swiper-slide">

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
  </div>

</template>

<style scoped lang="scss">
  // добавить шум
  // с размерами изображениями надо что-то думать решать, так подгонять под каждый полная лажа и не получится мб
  @use "@/styles/styles" as *;

  .ingredients{
    @include display(center,center,69px, column);
    @include block(1900px, 705px,$color: url("/BackgroundIngredients.svg") center center / cover no-repeat);
  }
  .carousel-wrapper {
    @include display(center, center, 30px);
    background-repeat: no-repeat;
  }

  .mySwiper {

    width: 1150px;
  }
  .card {
    @include button($width: 315px, $height: 417px, $radius: 40px, $border: 4px solid white, $color: transparent);
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
.left{
    @include img(48px, 48px, 100%);
  }
.right{
    @include img(48px, 48px, 100%);
  }

  .title {
    @include display(center, center, 0px, column);
    @include block(1650px, 91px);
  }

  .title-back {
    @include fonts($size: 48px, $family: (Rubik Mono One, sans-serif), $color: rgba(255, 160, 17, 0.74));
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    filter: url(#noiseFilter);
  }

  .title-front {
    @include h2();
    top: 24px;
    left: 12px;
    position: absolute;
    z-index: 2;
  }
  
  
  @media screen and (max-width: 1280px) {
    .ingredients{
      width: 1282px;
    }
    .title{
      width: 1240px;
    }
    .carousel-wrapper{
      gap: 50px;
      width: 1240px;
    }
  }

  @media screen and (min-width: 1280px) and (max-width: 1650px) {

  }


  @media screen and (min-width: 1150px) and (max-width: 1279px){

  }


  @media screen and (min-width: 1000px) and (max-width: 1149px){

  }


  @media screen and (min-width: 800px)and (max-width: 999px){

  }


  @media screen and (min-width: 400px)and (max-width: 799px){

  }
</style>