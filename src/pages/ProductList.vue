<template>
  <main class="h-screen mb-10">
    <div class="py-6">
      <h1 class="text-center">{{ category }}</h1>
    </div>
    <!-- Gallery Container -->
    <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <!-- Product Container -->
      <div v-for="product in products" :key="product.id" class="mt-4">
        <div class="relative group">
          <img :src="product.img" class="h-[300px] w-full object-cover">
          <div :class="{'clicked': isBannerClicked, 'banner': !isBannerClicked}" @click="addItemToCart(product)" @mousedown="changeColor">
            <div class="flex justify-center items-center">
              <button class="uppercase tracking-wider">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <ul id="product-list" class="py-2 mb-4 ml-1">
          <li>{{product.name}}</li>
          <li>${{product.price}}</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data(){
    return {
      isBannerClicked: false,
    }
  },
  computed: {
    ...mapState({
      products(state){
        const category = this.$route.params.category;
        return state.products[category] || [];
      }
  }),
    category() {
      return this.$route.params.category;
    },
  },
  methods: {
    ...mapMutations({
      addItemToCart: 'addItemToCart'
    }),
    changeColor(){
      this.isBannerClicked = true;
      setTimeout(() => {
        this.isBannerClicked = false;
      }, 350)
    },
  }
};
</script>