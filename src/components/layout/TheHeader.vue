<template>
  <header class="fixed top-0 left-0 right-0 z-30 py-8 px-5 bg-white border-b shadow-sm md:p-10">
    <div class="flex justify-between items-center">
      <div class="header-items justify-start">
        <button @click="toggleMenu" class="md:uppercase">
          <span @mouseenter="showMenu" class="hidden md:block">Shop</span>
          <HamburgerButton></HamburgerButton>
        </button>
        <span class="hidden md:block">|</span>
        <a href="#" class="hidden md:block">Search</a>
      </div>
      <router-link to="/home" class="text-3xl tracking-widest">Othelia</router-link>
      <div class="header-items justify-end">
        <a href="#" class="hidden md:block">Account</a>
        <button @click="toggleCart" class="uppercase">Bag <span class="tracking-widest">({{this.$store.getters.cart}})</span></button>
      </div>
    </div>
  </header>
  <CartMenu />
  <DropdownMenu/>
</template>

<script>
import { mapMutations } from 'vuex';
import HamburgerButton from '../UI/HamburgerButton.vue';
import DropdownMenu from '../DropdownMenu.vue';
import CartMenu from '../CartMenu.vue';

export default{
  components: {
    HamburgerButton,
    DropdownMenu,
    CartMenu,
  },
  methods: {
    ...mapMutations(['toggleMenu', 'toggleCart']),
    showMenu(){
      this.toggleMenu(true)
    },
    hideMenu(){
      this.toggleMenu(false)
    },
  }
}
</script>