import {createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: ''},
  ]
})

export default router;