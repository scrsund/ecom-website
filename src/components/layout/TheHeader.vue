<template>
  <header class="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-8 px-5 bg-white border-b shadow-sm md:p-10">
    <div class="header-items">
      <button @click="toggleMenu" class="md:uppercase">
        <span @mouseenter="showMenu" class="hidden md:block">Shop</span>
        <HamburgerButton></HamburgerButton>
      </button>
      <span class="hidden md:block">|</span>
      <a href="#" class="hidden md:block">Search</a>
    </div>
    <router-link to="/home" class="text-3xl tracking-widest ml-7 md:ml-0">Othelia</router-link>
    <div class="header-items">
      <a href="#" class="hidden md:block">Account</a>
      <a href="#">Bag <span class="tracking-widest">(0)</span></a>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex';
import HamburgerButton from '../UI/HamburgerButton.vue';

export default{
  components: {
    HamburgerButton,
  },
  methods: {
    ...mapMutations(['toggleMenu']),
    showMenu(){
      this.toggleMenu(true)
    },
    hideMenu(){
      this.toggleMenu(false)
    }
  }
}
</script>