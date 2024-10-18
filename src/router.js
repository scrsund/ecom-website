import { createRouter, createWebHistory } from "vue-router";
import store from './store/index.js';

import HomePage from "./pages/HomePage.vue";
import ItemList from './pages/ItemList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/items/:category", component: ItemList },
  ],
});

router.beforeEach((to, from, next) => {
  store.commit('closeMenu', false);
  next();
});

export default router;
