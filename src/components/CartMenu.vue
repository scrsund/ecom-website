<template>
  <!-- Page Container -->
  <div v-show="isOpen" class="fixed inset-0 z-40 h-full w-full">
    <div class="bg-zinc-100 z-50 h-full w-2/3 shadow-xl">
      <button @click="closeCart" class="z-100">Close</button>

    </div>
  </div>
</template>


<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState({isOpen: state => state.cart.isOpen}),
  },
  methods: {
    ...mapMutations({
      closeCart: 'closeCart'
    }),
  }
}
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