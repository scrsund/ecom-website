import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index.js";

import HomePage from "./pages/HomePage.vue";
import ProductList from "./pages/ProductList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/products/:category", component: ProductList },
  ],
  scrollBehavior(){
    return { top: 0};
  },
});

router.beforeEach((to, from, next) => {
  store.commit("closeMenu", false);
  next();
});

export default router;
