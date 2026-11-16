<script setup lang="ts">
import {ref} from "vue";
const name = ref("");
const phone = ref("");
const message = ref("");
const textes = [
    {
      "img": "/IconsContact/map.svg",
      "txt":
        "ООО «ТЕХНОЛОГИЯ ПЛЮС КРЫМ» 295493,\n "+
        "Республика Крым, г. Симферополь, пгт. Грэсовский, ул. Владимира Высоцкого, д. 4."
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

const isPopupOpen = ref(false);

const openPopup = () => {
  isPopupOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closePopup = () => {
  isPopupOpen.value = false;
  document.body.style.overflow = "";
};
</script>

<template>
  <div class="contacts_form" id="contacts">
    <div class="contacts_block">
      <div class="contacts">
        <h2>Контакты</h2>
        <div class="contacts_for">
          <div class="contact" v-for="{img, txt} in textes" :key="txt">
            <img :src="img" alt="">
            <p>{{txt}}</p>
          </div>
        </div>
        <div class="mobile_form">
          <button class="open_btn" @click="openPopup">
            Оставить заявку
          </button>
        </div>
      </div>
      <form>
        <input class="i_name" v-model="name" aria-label="Ваше имя" autocomplete="name" placeholder="Введите ваше имя" />
        <input class="i_phone" v-model="phone" type="tel" aria-label="Номер телефона" autocomplete="tel" placeholder="Введите ваш номер телефона" />
        <textarea class="i_msg" v-model="message" aria-label="Сообщение" placeholder="Сообщение"></textarea>
        <button type="submit" >отправить заявку</button>
      </form>
    </div>
  </div>
<Teleport to="body">
  <transition name="popup">
    <div v-if="isPopupOpen" class="popup_overlay" @click.self="closePopup">
      <div class="popup" role="dialog" aria-modal="true" aria-label="Оставить заявку" @keydown.esc="closePopup">
        <button type="button" class="popup-close" aria-label="Закрыть форму" @click="closePopup">×</button>
        <form class="popup_form">
          <input class="i_name mobile_msg" v-model="name" aria-label="Ваше имя" autocomplete="name" placeholder="Введите ваше имя"/>
          <input class="i_phone mobile_msg" v-model="phone" type="tel" aria-label="Номер телефона" autocomplete="tel" placeholder="Введите ваш номер телефона"/>
          <textarea class="i_msg mobile_msg" v-model="message" aria-label="Сообщение" placeholder="Сообщение"></textarea>
          <button type="submit">
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  </transition>
</Teleport>
</template>

<style scoped lang="scss">
@use "@/styles/styles" as *;

.contacts_form, .contacts_form *, .popup_overlay, .popup_overlay * { float: none; }
.contacts_form { display: flex; justify-content: center; width: 100%; padding: 48px 0 64px; background: url('/HomePage/left_down_1.png') left top no-repeat, url('/HomePage/light_down_right.png') right top no-repeat; }
.contacts_block { display: grid; grid-template-columns: minmax(0, 1.65fr) minmax(0, 1fr); align-items: start; gap: 40px; width: min(1650px, calc(100% - 132px)); }
.contacts { display: flex; flex-direction: column; gap: 32px; min-width: 0; }
h2 { margin: 0; font: 700 clamp(32px, 5.45vw, 70px)/1.15 'Montserrat', sans-serif; color: #fff; text-transform: uppercase; }
.contacts_for { display: flex; flex-direction: column; gap: 18px; width: 100%; }
.contact { display: flex; align-items: flex-start; gap: 14px; width: 100%; }
.contact img { width: 30px; height: 30px; flex-shrink: 0; }
p { margin: 0; font: 400 clamp(16px, 1.7vw, 22px)/1.4 'Montserrat', sans-serif; color: #dadada; white-space: pre-line; overflow-wrap: anywhere; }
form { display: flex; flex-direction: column; align-items: stretch; gap: 10px; width: 100%; padding-top: 12px; }
input, textarea { display: block; width: 100%; min-width: 0; height: 50px; border: 1px solid #a3660b; border-radius: 10px; padding: 12px 16px 12px max(66px, 12%); font: 400 16px/1.4 'Montserrat', sans-serif; color: #fff; background-color: #ffa0110d; }
.i_name { background-image: url('/HomePage/nf.png'); background-repeat: no-repeat; background-position: 0 center; background-size: 100% 100%; }
.i_phone { background-image: url('/HomePage/phonef.png'); background-repeat: no-repeat; background-position: 0 center; background-size: 100% 100%; }
.i_msg { background-image: url('/HomePage/msgf.png'); background-repeat: no-repeat; background-position: left top; background-size: 100% 100%; height: 128px; resize: vertical; }
button { display: flex; align-items: center; justify-content: center; width: 100%; min-height: 49px; border: 1px solid #ffa011; border-radius: 10px; background: linear-gradient(125deg, #ffa011, #6237004d 52%, #ffa011); color: #fff; font: 400 16px/1.3 'Montserrat', sans-serif; text-transform: uppercase; cursor: pointer; }
form > button { margin-top: 20px; }
input:focus-visible, textarea:focus-visible, button:focus-visible { outline: 2px solid #ffa011; outline-offset: 3px; }
.mobile_form { display: none; }
.popup_overlay { position: fixed; inset: 0; display: flex; justify-content: center; align-items: center; padding: 24px 16px; background: #000c; z-index: 1100; }
.popup { position: relative; width: min(520px, 100%); max-height: 90dvh; overflow-y: auto; border: 1px solid #a3660b; border-radius: 20px; background: #090603; padding: 56px 24px 24px; }
.popup_form { padding: 0; }
.popup-close { position: absolute; right: 12px; top: 8px; width: 40px; min-height: 40px; font-size: 28px; background: transparent; border: 0; }
.popup-enter-active, .popup-leave-active { transition: opacity .25s; }
.popup-enter-from, .popup-leave-to { opacity: 0; }
@media (max-width: 1100px) { .contacts_block { width: calc(100% - 64px); gap: 24px; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); } input, textarea { font-size: 14px; } }
@media (max-width: 767px) { .contacts_block { display: flex; flex-direction: column; width: calc(100% - 32px); } .contacts { width: 100%; gap: 24px; } .contacts_block > form { display: none; } .mobile_form { display: block; width: min(320px, 100%); } .contacts_form { padding-block: 32px 48px; } h2 { font-size: 30px; } p { font-size: 16px; } .contact img { width: 26px; height: 26px; } }
</style>
