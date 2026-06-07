import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import BoiledAndSmokedSausages from "@/views/BoiledAndSmokedSausages.vue";
import BouledSausages from "@/views/BouledSausages.vue";
import AboutView from "@/views/AboutView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: "/", component: HomeView
      },
      {
        path: "/boilednsmokedsausages", component: BoiledAndSmokedSausages
      },
      {
          path: "/boiledsausages", component: BouledSausages
      },
      {
          path: "/about", component: AboutView
      }
  ],
})

export default router
