<script setup lang="ts">
import MenuButton from "@/components/Menu-button.vue";
</script>

<template>
  <div class="menu">
    <p><span class="name">WURST</span><span class="name" style="color: #FE9809">MEISTER</span></p>
    <div class="group_menu">
      <MenuButton />
      <button class="menu-button">оставить заявку</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use "@/styles/styles" as *;
  .menu{
    @include display($gap: 970px, $flex-direction: row, $justify-content:center);
    @include block($height: 92px, $color: black);
  }
  .name{
    @include fonts($size: 24px,$weight: 900);
  }
  .group_menu{
    @include display()
  }
  .menu-button{
    @include display($gap: 0px, $justify-content: center);
    @include button($width: 203px, $height: 41px, $radius: 10px,
    $color:linear-gradient(-127deg, $moc 0%, #623700 35%,#000000 50%,#623700 65%,$moc 100%));
    @include fonts();
  }

  @media screen and (min-width: 1280px) and (max-width: 1650px){
    .menu{
      gap: 570px;
    }
  }
  @media screen and (min-width: 1150px) and (max-width: 1279px){
    .menu{
      gap: 470px;
    }
  }
  @media screen and (min-width: 1000px) and (max-width: 1149px){
    .menu{
      gap: 300px;
    }
  }
  @media screen and (min-width: 800px)and (max-width: 999px){
    .menu{
      gap: 271px;
    }
  }
  @media screen and (min-width: 400px)and (max-width: 799px){
    .menu{
      gap: 151px;
    }
  }
</style>