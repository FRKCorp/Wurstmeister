<script setup lang="ts">
import {inject} from "vue";
const Sausages = inject("Sausages");
</script>

<template>
  <div class="types_block">
      <section class="table_types" >
        <div class="table_types_border" v-for="item in Sausages" :key="item">
          <div class="group_types">
            <h3>{{item.h3}}</h3>
            <p>{{item.p}}</p>
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
    @include display(center, center, 37px, column);
    height: auto;
  }
  .table_types_border{
    border: 1px solid #A67123;
    border-radius: 31px;
    overflow: hidden;
    width: 97%;
  }
  .group_types{
    @include display(flex-start, center, $flex-direction: column);
    @include block(100%, auto, $color: rgba(39, 32, 22, 1));
    border: 21px solid rgba(28, 21, 10, 1);
    border-radius: 31px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  h3{
    width: 92%;
    @include fonts(26px,$color: rgba(255, 144, 22, 1), $weight: 700, $transform: none);
  }
  p{
    width: 92%;
    @include fonts(26px,$color: white, $weight: 400, $transform: none);
  }

  @media screen and (min-width: 800px)and (max-width: 999px){
    .table_types{
      @include width_screen;
    }
  }
  @media screen and (min-width: 600px)and (max-width: 799px){
    .table_types{
      @include width_screen;
    }
  }
  @media screen and (max-width: 600px){
    h3{
      font-size: 15px;
    }
    p{
      font-size: 15px;
    }
    .table_types{
      @include width_screen;
    }
    .group_types{
      border: 14px solid rgba(28, 21, 10, 1);
    }
  }
</style>