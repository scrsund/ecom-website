import { createStore } from 'vuex';

const store = createStore({
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