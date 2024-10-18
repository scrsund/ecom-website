import { createStore } from 'vuex';

import productsModule from './modules/products/index.js';
import cartModule from './modules/cart/index.js';

const store = createStore({
  modules: {
    products: productsModule,
    cart: cartModule,
  },
  state(){
    return {
      isMenuOpen: false,
    }
  },
  mutations: {
    toggleMenu(state){
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu(state){
      state.isMenuOpen = false;
    }
  },

})

export default store;