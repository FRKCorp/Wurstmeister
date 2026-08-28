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
    image: "/HomePage/img1.png"
  },
  {
    id: 2,
    title: "ДЛЯ ИНЪЕКТИРОВАНИЯ",
    image: "/HomePage/img2.png"
  },
  {
    id: 3,
    title: "ДЛЯ ПОЛУФАБРИКАТОВ",
    image: "/HomePage/img3.png"
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
        <img class="left" src="/HomePage/Vector.svg">
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
         <img class="right" src="/HomePage/strelka_right.svg">
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
  .left{
      @include img(48px, 48px, 100%);
    }
  .right{
      @include img(48px, 48px, 100%);
  }
  .swiper-slide{
    width: 307px;
  }
  .mySwiper {
    @include display($gap: 20px);
    width: 1000px;
    height: auto;
  }
  swiper{
    height: auto;
  }
  swiper-initialized{} swiper-horizontal{}
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

  @media screen and (min-width: 1150px) and (max-width: 1279px){
    .title-back{ @include h2_800();color: rgba(255, 160, 17, 0.74);}
    .title-front{ @include h2_800();}
  }


  @media screen and (min-width: 1000px) and (max-width: 1149px){
    .card{
      height: 357px;
      .p_slider{
        left: 10px;
        font-size: 20px;
        width: 90%;
      }
    }

  }
  @media screen and (max-width: 999px){
    .carousel-wrapper{
      display: none;
    }
  }
</style>