<script setup lang="ts">
  import {computed} from "vue";

  interface TextData {
    h2: string;
    p: string;
  }

  interface TypeItem {
    img: string;
    text: string;
    style: string;
  }

  const { text1, text2, types } = defineProps<{
    text1: TextData;
    text2: TextData;
    types: TypeItem[];
  }>();



  const leftTypes = computed(() => types.slice(0, 6));
  const rightTypes = computed(() => types.slice(6));
</script>

<template>
  <div class="types_block">
    <div class="types_row">
      <section class="table_one">
        <div class="group_types">
          <div v-for="item in types" :key="item.text" :class="item.style">
            <img :src="item.img" alt="">
            <p>{{ item.text }}</p>
          </div>
        </div>
      </section>

      <!-- Две таблицы -->
      <div class="table_two">
        <section class="group_types">
          <div v-for="item in leftTypes" :key="item.text" :class="item.style">
            <img :src="item.img" alt="">
            <p>{{ item.text }}</p>
          </div>
        </section>

        <section class="group_types">
          <div v-for="item in rightTypes" :key="item.text" :class="item.style">
            <img :src="item.img" alt="">
            <p>{{ item.text }}</p>
          </div>
        </section>
      </div>
      <div class="group_textes">
        <div class="textes">
          <h2>{{ text1.h2 }}</h2>
          <h3>{{ text1.p }}</h3>
        </div>
        <div class="textes">
          <h2>{{ text2.h2 }}</h2>
          <h3>{{ text2.p }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "@/styles/styles" as *;
  .types_block{
    @include display(center,center,0px, row);
    @include block(100vw, 100%, $color: none);
    background-image:
        url("/ProductionPage/flame_up.png"),
        url('/ProductionPage/ProductionComponents.png');
    background-repeat: no-repeat, no-repeat;
    background-position: left bottom, right center;
    background-size: auto, cover;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .types_row{
    @include display(space-between, flex-start);
    width: 1650px;
  }
  .table_one {
    display: block;
  }

  .table_two {
    display: none;
  }
  .table_types_border{
    @include display(flex-start,center);
    background: rgba(11, 11, 11, 0.8);
    border: 1px solid #A67123;
    border-radius: 16px;
  }
  .group_types{
    @include display(space-between, $flex-direction: column);
    @include block(424px, 100%, $color: rgba(39, 32, 22, 1));
    border: 21px solid rgba(28, 21, 10, 1);
    border-radius: 16px;
    outline: 2px solid rgba(255, 160, 17, 0.4);
  }
  .default{
    @include block(424px, auto, $color: #372F22);
    padding-top: 10px;
    padding-bottom: 10px;
    @include display(center);
    border-radius: 16px;
    @include fonts(19px,$color: white,$weight: 400);
  }
  .default img {
    width: 46px;
    height: 46px;
    flex-shrink: 0;
  }

  .default p {
    flex: 1;
    margin: 0;
    width: 200px;
  }
  .group_textes{
    @include display($gap: 50px, $flex-direction: column);
  }
  .textes{
    @include block(774px, 100%);
  }
  h2{
    @include h2();
  }
  h3{
    @include fonts(28px, $weight: 400, $transform: none);
    white-space: pre-line;
    text-align: justify;
  }
  @media screen and (min-width: 1280px) and (max-width: 1650px) {
    .default{
      width: 100%;
    }
    .types_row{
      @include width_screen;
    }
  }
  @media screen and (min-width: 1150px) and (max-width: 1279px){
    .default{
      width: 95%;
    }
    .types_row{
      @include width_screen;
    }
    .group_types{
      border: 11px solid rgba(28, 21, 10, 1);
    }
    .textes{
      width: 674px;
    }
  }
  //две таблицы и фон
  @media screen and (min-width: 290px) and (max-width: 1149px){
    .table_one {
      display: none;
    }

    .table_two {
      display: flex;
      gap: 20px;
    }
    .table_two .group_types {
      height: 600px;
    }

    .table_two .default {
      height: 100%;
    }
    .types_row{
      @include width_screen;
      align-items: center;
      flex-direction: column-reverse;
      gap: 50px;
    }
  }
  @media screen and (min-width: 1000px) and (max-width: 1149px){
    .types_block{
      height: auto;
      padding-bottom: 0;
    }
    .types_row{
      @include width_screen;
    }
    h2{
      text-align: center;
    }
    .textes{
      display: flex;
      flex-direction: column;
      align-items: center;
      @include width_screen;
      gap: 10px;
      width: 100%;
    }
    .group_types{
      border: 11px solid rgba(28, 21, 10, 1);
    }
    .table_two{
      @include width_screen;
      justify-content: center;
    }

  }
  @media screen and (min-width: 800px)and (max-width: 999px){
    .types_row{
      @include width_screen;
    }
    .types_block{
      height: auto;
      padding-top: 50px;
      padding-bottom: 0;
    }
    .textes{
      width: 100%;
    }
    h2{
      font-size: 37px;
      text-align: center;
    }
    h3{
      font-size: 30px;
    }
    .group_types{
      width: 380px;
      border: 11px solid rgba(28, 21, 10, 1);
    }
  }
  @media screen and (min-width: 600px)and (max-width: 799px){
    .types_row{
      @include width_screen;
    }
    .types_block{
      height: auto;
      padding-top: 50px;
      padding-bottom: 50px;
    }
    h2{
      font-size: 30px;
      text-align: center;
      padding-bottom: 10px;
    }
    h3{
      font-size: 22px;
    }
    .group_types{
      width: 380px;
      border: 11px solid rgba(28, 21, 10, 1);
    }
    .default{
      font-size: 13px;
      width: 100%;
      p{
        font-size: 15px;
      }
    }
    .default img {
      width: 27px;
      height: 27px;
    }
    .table_two .group_types{
      height: 500px;
    }
  }
  @media screen and (min-width: 400px)and (max-width: 599px){
    .types_row{
      @include width_screen;
    }
    .types_block{
      height: auto;
      padding-top: 50px;
      padding-bottom: 50px;
    }
    h2{
      font-size: 24px;
      text-align: center;
      padding-bottom: 15px;
    }
    h3{
      font-size: 16px;
    }
    .table_two{
      gap: 10px;
    }
    .table_two .group_types{
      width: 380px;
      border: 5px solid rgba(28, 21, 10, 1);
    }
    .table_two .default{
      width: 100%;
      height: 100%;
    }
    .default img {
      width: 27px;
      height: 27px;
    }
    .table_two .group_types{
      height: 500px;
    }
    .default p{
      font-size: 13px;
      max-width: 83%;
    }
  }
  @media screen and (max-width: 399px){
    .types_row{
      @include width_screen;
      flex-direction: column-reverse;
      order: 2;
      height: auto;
      gap: 50px;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .types_block{
      height: auto;
      padding-top: 50px;
      padding-bottom: 30px;
    }
    h2{
      font-size: 22px;
      text-align: center;
      padding-bottom: 15px;
    }
    h3{
      font-size: 15px;
    }
    .table_two{
      gap: 10px;
      @include width_screen;
    }
    .table_two .default{
      width: 100%;
      height: 100%;
    }
    .default img {
      width: 27px;
      height: 27px;
    }
    .table_two .group_types{
      height: auto;
      width: 49.6%;
      border: 5px solid rgba(28, 21, 10, 1);
    }
    .default p{
      font-size: 13px;
      width: 83%;
    }
  }
  @media screen and (max-width: 290px) {
    .types_row{
      align-items: center;
    }
    .table_one {
      @include width_screen;
    }
    .group_types{
      width: 100%;
      border: 5px solid rgb(28, 21, 10);
    }
  }
</style>