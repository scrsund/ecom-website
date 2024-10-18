import { createStore } from 'vuex';

import productsModule from './modules/products/index.js';

const store = createStore({
  modules: {
    products: productsModule,
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