export default{
  state(){
    return {
      isOpen: false,
      totalCartItems: 0,
      cartItems: [],
      subtotal: 0,
    }
  },
  getters: {
    cart(state){
      return state.totalCartItems;
    },
    cartSubtotal(state){
      const subtotal = state.cartItems.reduce((total, item) => {
        const itemPrice = item.sale ? item.price * (1 - item.discount) : item.price;
        return total + itemPrice * item.quantity;
      }, 0);
      return parseFloat(subtotal.toFixed(2));
    }
  },
  mutations: {
    addItemToCart(state, product){
      const existingItem = state.cartItems.find(item => item.id === product.id);
      if(existingItem){
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({...product, quantity: 1});
      }
      state.totalCartItems++;
    },
    removeItemFromCart(state, productId){
      const index = state.cartItems.findIndex(item => item.id === productId);
      if(index !== -1){
        const item = state.cartItems[index];
        state.totalCartItems -= item.quantity;
        state.cartItems.splice(index, 1);
      }
    },
    updateItemQuantity(state, {productId, quantity}){
      const item = state.cartItems.find(item => item.id === productId);
      if(item){
        if(quantity <= 0){
          const index = state.cartItems.indexOf(item);
          state.cartItems.splice(index, 1);
          state.totalCartItems -= item.quantity;
        } else {
        state.totalCartItems += quantity - item.quantity;
        item.quantity = quantity;
        }
      }
    },
    toggleCart(state){
      state.isOpen = !state.isOpen;
    },
    closeCart(state){
      state.isOpen = false;
    },
  }
}