<script setup lang="ts">
import {ref} from "vue";
const name = ref("");
const phone = ref("");
const message = ref("");
const textes = [
    {
      "img": "/IconsContact/map.svg",
      "txt": "ООО «ТЕХНОЛОГИЯ ПЛЮС КРЫМ» 295493, Республика Крым, г. Симферополь, пгт. Грэсовский, ул. Владимира Высоцкого, д. 4."
    },
    {
      "img": "/IconsContact/phone.svg",
      "txt": "+7 (988) 380 87 67"
    },
    {
      "img": "/IconsContact/mail.svg",
      "txt": "office@t-pluss.com"
    },
    {
      "img": "/IconsContact/reply.svg",
      "txt": "Оставь заявку и мы с тобой свяжемся!"
    },
    ]
</script>

<template>
  <div class="contacts_form">
    <div class="contacts">
      <h2>Контакты</h2>
      <div class="contacts_for">
        <div class="contact" v-for="{img, txt} in textes">
          <img :src="img">
          <p>{{txt}}</p>
        </div>
      </div>
    </div>
    <form>
      <input class="i_name" v-model="name" placeholder="Введите ваше имя" />
      <input class="i_phone" v-model="phone" placeholder="Введите ваш номер телефона" />
      <textarea class="i_msg" v-model="message" placeholder="Сообщение"></textarea>
      <button type="submit" >отправить заявку</button>
    </form>
  </div>

</template>

<style scoped lang="scss">
  @use "@/styles/styles" as *;
  .contacts_form{
    @include display($justify-content: space-between);
    @include block(100%, 435px, $color: url("/BackgroundContact.svg") center center / cover no-repeat);
  }
  .contacts{
    @include display(flex-start, flex-start, 38px, column);
    width: 1050px;
  }
  .contacts_for{
    @include display(flex-start, flex-start, 23px, column);
  }
  h2{
    @include h2();
  }
  p{
    @include fonts($size: 24px,$family: (Roboto Condensed, sans-serif), $weight: 300, $transform: none);
    width: 500px;
  }
  form{
    @include display(flex-start, flex-start, 9px, column);
    @include block(497px, 372px, )
  }
  input, textarea{
    @include display(center, center);
    @include button(497px, 55px,  10px, transparent);
    padding-left: 65px;
    @include fonts($size: 15px,$family: (Roboto Condensed, sans-serif), $weight: 400, $transform: none);
    border-color: #FFA011;
  }
  .i_name{
    background: url("/nf.png") no-repeat ;
  }
  .i_phone{
    background: url("/phonef.png") no-repeat;
  }
  .i_msg{
    background: url("/msgf.png") no-repeat;
    padding-top: 15px;
    width: 497px;
    height: 130px
  }
  button{
    @include button(497px, 49px,10px, linear-gradient(-115deg, $moc 0%, rgba(#623700, 0.3) 51%,  $moc 100%));
    @include fonts($size: 16px, $weight: 600);
  }

  @media screen and (min-width: 1280px) and (max-width: 1650px) {
    .contacts_form {
      width: 100%;
    }
    .contacts {
      width: 620px;
    }
    .form{
      width: 497px;
    }
    button{
      margin-top: 60px;
    }
  }
  @media screen and (min-width: 1150px) and (max-width: 1279px){
    .contacts_form {
      width: 100%;
    }

    form{
      width: 497px;
      gap: 10px;
      height: 372px;
    }
    button{
      margin-top: 50px;
    }
  }


  @media screen and (min-width: 1000px) and (max-width: 1149px){
    .contacts_form{
      width: 100%;
    }
    p{
      font-size: 20px;
      width: 400px;
    }
    h2{
      @include h2_800();
    }
    .contacts{
      gap: 18px;
      height: 372px;
    }
  }


  @media screen and (min-width: 800px)and (max-width: 999px){
    .contacts_form{
      width: 100%;
    }
    form{
      width: 400px;
    }
    img{
      width: 35px;
      height: 35px;
    }

    h2{
      @include h2_800();
    }
    .contacts_for{
      gap: 15px;
    }
    .contacts{
      width: 350px;
      gap: 10px;
    }
    p{
      width: 313px;
      font-size: 20px;
    }

  }


  @media screen and (min-width: 601px)and (max-width: 799px){
    .contacts_form{
      width: 100%;
    }
    form{
      width: 252px;
    }
    img{
      width: 35px;
      height: 35px;
    }

    h2{
      @include h2_800();
    }
    .contacts_for{
      gap: 15px;
    }
    .contacts{
      width: 350px;
      gap: 10px;
    }
    p{
      width: 280px;
      font-size: 20px;
    }
    input{
      width: 252px;
    }
    .i_msg{
      width: 252px;
    }
    button{
      width: 252px;
    }

  }
  @media screen and (max-width: 600px){
    .contacts_form{
      width: 100%;
      height: 300px;
    }
    form{
      display: none;
      width: 252px;
    }
    img{
      width: 23px;
      height: 23px;
    }

    h2{
      @include h2_400 ();
    }
    .contacts_for{
      gap: 15px;
    }
    .contacts{
      width: 350px;
      gap: 10px;
    }
    p{
      width: 280px;
      font-size: 14px;
    }
    input{
      width: 252px;
    }
    .i_msg{
      width: 252px;
    }
    button{
      width: 252px;
    }

  }
</style>