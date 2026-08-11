<script setup lang="ts">
const items = ["Название", "Описание", "Дозировка"]
import { inject} from "vue";
const grid_items = inject("grid_items")
const species = inject("species")
</script>

<template>
  <section class="types_block">
    <div class="table_types_border">
      <div class="group_types">
        <p class="group_types_p" v-for="item in items" :key="item">{{item}}</p>
      </div>
    </div>
    <section class="tables_grids">
      <div class="species_border">
        <div class="species_names">
          <h3>
            Профиль вкуса
          </h3>
          <div class="species_rows" v-for="specie in species" key="specie">
            <div class="specie_color" :style="specie.color"></div>
            <div class="specie_textes">
              <p class="specie_name">{{specie.name}}</p>
              <p class="specie_description">{{specie.description}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="table_grid">
        <div v-for="grid_item in grid_items" key="grid_item" class="grid">
          <div class="grid_item_name">{{grid_item.name}}</div>
          <div class="grid_item_description">{{grid_item.description}}</div>
          <div class="grid_item_dozirovka">{{grid_item.dozirovka}}</div>
          <div class="grid_item_color"><div class="grid_color" :style="grid_item.color"></div></div>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">
  @use "@/styles/styles" as *;
  .types_block{
    @include display(center,flex-end,20px, column);
    width: 1800px;
    background: transparent;
  }
  .table_types_border{
    @include display(flex-start,center);
    background: rgba(11, 11, 11, 0.8);
    border: 1px solid #A67123;
    border-radius: 16px;
  }
  .group_types{
    @include display(space-between, $flex-direction: row);
    @include block(882px, 89px, $color: rgba(39, 32, 22, 1));
    border: 21px solid rgba(28, 21, 10, 1);
    border-radius: 16px;
    padding: 28px 54px;
  }
  .group_types_p{
    @include fonts(30px,$weight: 700);
    background-image: linear-gradient(90deg,#FF8000 0%,#FFF06D 100%);
    background-clip: text;
    color: transparent;
    width: 160px;
  }


  .species_names{
    @include display(flex-start, center, 25px, column);
    @include block(311px, auto, $color: rgba(110, 80, 35, 1));
    border-radius: 0 16px 16px 0;
    border-top: 1px solid #A67123;
    border-bottom: 1px solid #A67123;
    border-right: 1px solid #A67123;
    padding: 28px 17px;
  }
  .species_border{
    @include display(flex-start,center);
    background: rgb(19, 19, 19);
    border-top: 1px solid #A67123;
    border-bottom: 1px solid #A67123;
    border-right: 1px solid #A67123;
    border-radius: 0 16px 16px 0;
    width: 328px;
    height: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  h3{
    @include fonts(20px,$weight: 500);
  }
  .species_rows{
    @include display(space-between, stretch);
    width: 246px;
  }
  .specie_textes{
    @include display(flex-start,flex-start, 0px, column);
  }
  .specie_name{
    @include fonts(20px,$weight: 400);
  }
  .specie_description{
    @include fonts(16px,$weight: 300);
  }
  .specie_color{
    width: 17px;
    border-radius: 9px;
    flex-shrink: 0;
  }



  .tables_grids{
    width: 100%;
    @include display(space-between, flex-start)
  }
  .table_grid{
    @include display(space-between, flex-start, $flex-direction: column);
  }
  .grid{
    @include display(space-between);
  }
  .grid_item_name{
    @include display(center, center, 0px);
    @include block(250px, 220px, $color: linear-gradient(0deg, rgba(216, 134, 17, 0.28) 0%, rgba(94, 76, 45, 0.28) 100%));
    border-radius: 22px;
    backdrop-filter: blur(40px);
    @include fonts(32px,$weight: 700, $transform: none);
    color: rgba(255, 144, 22, 1);
    padding: 45px;
  }
  .grid_item_description{
    @include display(center, center, 0px);
    @include block(361px, 220px, $color: linear-gradient(0deg, rgba(216, 134, 17, 0.58) 0%, rgba(94, 76, 45, 0.58) 100%));
    border-radius: 22px;
    backdrop-filter: blur(30px);
    @include fonts(24px,$weight: 300, $transform: none);
    color: white;
    padding: 30px;
  }
  .grid_item_dozirovka{
    @include display(center, center, 0px);
    @include block(201px, 220px, $color: linear-gradient(0deg, rgba(216, 134, 17, 0.58) 0%, rgba(94, 76, 45, 0.58) 100%));
    border-radius: 22px;
    backdrop-filter: blur(30px);
    @include fonts(24px,$weight: 300, $transform: none);
    color: white;
    padding: 23px;
  }
  .grid_item_color{
    @include display(center, stretch, 0px);
    @include block(40px, 220px, $color: linear-gradient(0deg, rgba(216, 134, 17, 0.58) 0%, rgba(94, 76, 45, 0.58) 100%));
    border-radius: 22px;
    padding: 26px 0;
    backdrop-filter: blur(30px);
  }
  .grid_color{
    width: 21px;
    border-radius: 12px;
    flex-shrink: 0;
  }
</style>