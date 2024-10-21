export default{
  state(){
    return {
      isOpen: false,
      totalCartItems: 0,
      cartItems: [],
    }
  },
  getters: {
    cart(state){
      return state.totalCartItems;
    }
  },
  mutations: {
    addItemToCart(state, product){
      state.totalCartItems++;
      state.cartItems.push(product);
    },
    toggleCart(state){
      state.isOpen = !state.isOpen;
    },
    closeCart(state){
      state.isOpen = false;
    },
    removeItemFromCart(state, productId){
      const index = state.cartItems.findIndex(item => item.id === productId);
      if(index !== -1){
        state.cartItems.splice(index, 1);
        state.totalCartItems--;
      }
    }
  }
}