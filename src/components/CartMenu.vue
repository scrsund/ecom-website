<template>
  <!-- Page Outline  v-show="isOpen" -->
  <transition>
    <div v-show="isOpen" class="fixed top-0 right-0 z-40 h-full">
      <!-- Menu Container -->
      <div class="z-50 flex flex-col h-full w-[350px] bg-white shadow-xl">
        <!-- Close button -->
        <button @click="closeCart" class="z-100 py-4 px-6 flex justify-end">
          <HamburgerButton class="open" />
        </button>
        <!-- Content Container -->
        <div>
          <h1 v-if="this.$store.getters.cart === 0" class="text-center">
            Your bag is empty
          </h1>
          <h1 v-else class="text-center">
            You have {{ this.$store.getters.cart }} items in your bag
          </h1>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import HamburgerButton from "./UI/HamburgerButton.vue";

export default {
  components: {
    HamburgerButton,
  },
  computed: {
    ...mapState({ isOpen: (state) => state.cart.isOpen }),
  },
  methods: {
    ...mapMutations({
      closeCart: "closeCart",
    }),
  },
};
</script>
<!-- 

w- 1/4 of screen

"Your bag is empty"

close button

Product:

img
name
quantity
delete
total price

total price

-->
