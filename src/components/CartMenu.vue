<template>
  <!-- Page Outline  v-show="isOpen" -->
  <transition name="slide">
    <div v-show="isOpen" class="fixed top-0 right-0 z-40 h-full">
      <!-- Menu Container -->
      <div
        class="z-50 flex flex-col h-full w-[350px] bg-white shadow-xl border-t-4 border-slate-600"
      >
        <!-- Header -->
        <h1 class="tracking-widest text-2xl relative flex justify-center py-8">
          Othelia
        </h1>
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
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="flex py-4 px-4"
            >
              <img
                :src="item.img"
                alt=""
                class="h-[150px] w-[120px] object-cover border border-zinc-100"
              />
              <ul id="cart-list" class="flex flex-col justify-between text-sm w-2/3 pl-4">
                <div class="flex justify-between mb-2">
                  <li>{{ item.name }}</li>
                  <li v-if="item.sale">
                    <div class="text-right">
                      <div>
                        ${{ parseFloat(item.price * (1 - item.discount)).toFixed(2) }}
                      </div>
                      <div class="line-through text-[11px]">${{item.price}}</div>
                    </div>
                  </li>
                  <li v-else>${{item.price}}</li>
                </div>
                <li id="quantity" class="mb-20">
                  <span>
                    <button
                      @click="updateQuantity(item.id, item.quantity - 1)"
                    >
                      -
                    </button>
                    {{ item.quantity }}
                    <button @click="updateQuantity(item.id, item.quantity + 1)">
                      +
                    </button>
                  </span>
                </li>
                <!-- <li>
                  <button @click="removeItems(item.id)" class="uppercase text-[10px]">
                    Delete
                  </button>
                </li> -->
              </ul>
            </div>
            <div id="checkout" class="flex flex-col">
              <div
                class="flex justify-between px-5 py-5 mt-10 border-t-2 border-slate-200 text-sm"
              >
                <div>Subtotal</div>
                <div>${{ cartSubtotal }}</div>
              </div>
              <button
                class="py-2 bg-slate-300 shadow-md rounded-lg uppercase text-sm tracking-wider"
              >
                Checkout
              </button>
            </div>
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
    ...mapState({ cartItems: (state) => state.cart.cartItems }),
    cartSubtotal() {
      return this.$store.getters.cartSubtotal;
    },
  },
  methods: {
    ...mapMutations({
      closeCart: "closeCart",
      removeItems: "removeItemFromCart",
      updateItemQuantity: "updateItemQuantity",
    }),
    updateQuantity(productId, quantity) {
        this.updateItemQuantity({ productId, quantity });
    },
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
