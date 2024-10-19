<template>
  <!-- Page Outline  v-show="isOpen" -->
  <transition name="slide">
    <div v-show="isOpen" class="fixed top-0 right-0 z-40 h-full">
      <!-- Menu Container -->
      <div class="z-50 flex flex-col h-full w-[400px] bg-white shadow-xl">
        <!-- Close button -->
        <button @click="closeCart" class="z-100 py-4 px-6 flex justify-end">
          <HamburgerButton class="open" />
        </button>
        <!-- Content Container -->
        <section>
          <div v-if="this.$store.getters.cart === 0" class="text-center">
            Your bag is empty
          </div>
          <div v-else class="text-center">
            You have {{ this.$store.getters.cart }} items in your bag
          </div>
        </section>
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

<style scoped>
/*Animations*/

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
<!-- 

Product:

img
name
quantity
delete
total price

total price

-->
