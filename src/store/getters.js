export default { //computed
    availableProducts (state, getters) {
    return state.products.filter(p => p.inventory > 0)
  },
  cartProducts (state, getters) {
    return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id === cartItem.id)
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      }
    )
  },
  cartTotal (state, getters) {
    return getters.cartProducts.reduce((total, product) => total += total + product.price * product.quantity, 0)
  },
  productIsInStock (state, getters) {
    return (product) => {
      return product.inventory > 0
    }
  }
}
