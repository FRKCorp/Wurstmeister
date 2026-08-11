<script setup lang="ts">
import {inject} from "vue";

const first_items = inject("first_types")
const second_items = inject("second_types")
</script>

<template>
  <div class="types_block">
    <section class="table_types">

      <div class="table_types_border">
        <div class="group_types s-group">
          <div :class="item.style" v-for="item in first_items" :key="item">
            <img :src="item.img">
            <p>{{item.text}}</p>
          </div>
        </div>
      </div>
      <div class="table_types_border">
        <div class="group_types">
          <div :class="item.style" v-for="item in second_items" :key="item">
            <img :src="item.img">
            <p>{{item.text}}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
  @use "@/styles/styles" as *;
  .types_block{
    @include display(center,center,0px, column);
    width: 100%;
    background: transparent;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .table_types{
    @include display(flex-start, flex-start, 100px,);
  }
  .table_types_border{
    @include display(flex-start,center);
    background: rgba(11, 11, 11, 0.8);
    border: 1px solid #A67123;
    border-radius: 16px;
  }
  .group_types{
    @include display(space-between, $flex-direction: column);
    @include block(470px, 335px, $color: rgba(39, 32, 22, 1));
    border: 21px solid rgba(28, 21, 10, 1);
    border-radius: 16px;
  }
  .default{
    @include block(470px, 47px, $color: #372F22);
    @include display(center);
    border-radius: 16px;
    @include fonts(19px,$color: white,$weight: 400);
  }
  .head_type{
    @include block(470px, 56px, $color: #372F22);
    @include display(center);
    border-radius: 16px;
    @include fonts(20px,$color: white,$weight: 700);
  }
  .big_p{
    @include block(470px, 73px, $color: #372F22);
    @include display(center);
    border-radius: 16px;
    @include fonts(19px,$color: white,$weight: 400);
  }
  img{
    @include img(46px,46px);
  }
  p{
    width: 377px;
  }
</style>