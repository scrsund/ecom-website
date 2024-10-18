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
  },

})

export default store;