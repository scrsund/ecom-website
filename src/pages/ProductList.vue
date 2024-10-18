<template>
  <main class="h-screen mb-10">
    <div class="py-6">
      <h1 class="text-center">{{ category }}</h1>
    </div>
    <!-- Gallery Container -->
    <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <!-- Product Container -->
      <div v-for="product in products" :key="product.id">
        <img :src="product.img" class="h-[300px] w-full object-cover">
        <ul class="py-1 mb-4 ml-1">
          <li class="text-xs">{{product.name}}</li>
          <li class="text-xs">${{product.price}}</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
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
};
</script>
