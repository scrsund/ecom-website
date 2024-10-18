import {createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomePage},
  ]
})

export default router;