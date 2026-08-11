import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import BoiledAndSmokedSausages from "@/views/BoiledAndSmokedSausages.vue";
import BouledSausages from "@/views/BouledSausages.vue";
import AboutView from "@/views/AboutView.vue";
import ProductionView from "@/views/ProductionView.vue";
import ContactBlock from "@/HomeViewComponents/ContactBlock.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      component: HomeView
    },
    {
      path: "/boilednsmokedsausages",
      component: BoiledAndSmokedSausages
    },
    {
      path: "/boiledsausages",
      component: BouledSausages
    },
    {
      path: "/about",
      component: AboutView
    },
    {
      path: "/production",
      component: ProductionView
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return {
      top: 0,
    };
  },
});

export default router
