<template>
  <header class="flex justify-between items-center py-8 px-5 md:p-10">
    <div class="header-items">
      <button @click="toggleMenu" class="md:uppercase">
        <span class="hidden md:block">Shop</span>
        <HamburgerButton></HamburgerButton>
      </button>
      <span class="hidden md:block">|</span>
      <a href="#" class="hidden md:block">Search</a>
    </div>
    <h1 class="text-3xl tracking-widest ml-7 md:ml-0">Othelia</h1>
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
  }
}
</script>