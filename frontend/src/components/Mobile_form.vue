<script setup lang="ts">
import {ref} from "vue";

const name = ref("");
const phone = ref("");
const message = ref("");
</script>

<template>
<form>
  <input class="i_name" v-model="name" placeholder="Введите ваше имя" />
  <input class="i_phone" v-model="phone" placeholder="Введите ваш номер телефона" />
  <textarea class="i_msg" v-model="message" placeholder="Сообщение"></textarea>
  <button type="submit" >отправить заявку</button>
</form>
</template>

<style scoped lang="scss">
  form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 252px;
    height: 221px;
  }
  input{
    width: 100%;
  }
  .i_msg{
    width: 100%;
  }
  button{
    width: 100%;
  }
</style>