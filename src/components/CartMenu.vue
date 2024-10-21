<template>
  <!-- Page Outline  v-show="isOpen" -->
  <transition name="slide">
    <div v-show="isOpen" class="fixed top-0 right-0 z-40 h-full">
      <!-- Menu Container -->
      <div class="z-50 flex flex-col h-full w-[350px] bg-white shadow-xl border-t-4 border-slate-600">
        <!-- Header -->
          <h1 class="tracking-widest text-2xl relative flex justify-center py-8">Othelia</h1>
           <!-- Close button -->
           <button @click="closeCart" class="absolute z-100 p-4 right-0">
             <HamburgerButton class="open" />
           </button>
        <!-- Content Container -->
        <section class="flex-1 overflow-y-auto py-2">
          <div v-if="this.$store.getters.cart === 0" class="text-center">
            Your bag is empty
          </div>
          <div v-else>
            <div v-for="item in cartItems" :key="item.id" class="flex py-4 px-4">
              <img :src="item.img" alt="" class="h-[150px] w-[120px] object-cover border border-zinc-100">
              <ul id="cart-list" class="flex flex-col mx-4 text-xs">
                <li>{{item.name}}</li>
                <li>${{item.price}}</li>
                <li>Qnt: 1</li>
                <button @click="removeItems(item.id)" class="border">Delete</button>
              </ul>
            </div>
          </div>
          <div>Subtotal</div>
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
    ...mapState({cartItems: (state) => state.cart.cartItems})
  },
  methods: {
    ...mapMutations({
      closeCart: "closeCart",
      removeItems: "removeItemFromCart",
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
