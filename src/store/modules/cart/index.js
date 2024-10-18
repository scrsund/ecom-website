export default{
  state(){
    return {
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
    }
  }
}