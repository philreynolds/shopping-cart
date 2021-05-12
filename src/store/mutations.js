export default { //setters
  setProducts(state, products)
  {
    state.products = products
  },
  pushProductToCart(state, productId)
  {
    state.cart.push({
      id: productId,
      quantity: 1
    })
  },
  incrementItemQuantity(state, cartItem)
  {
    cartItem.quantity++
  },
  decrementItemInventory(state, product)
  {
    product.inventory--
  },
  setCheckoutStatus(state, status)
  {
    state.checkoutStatus = status
  },
  emptyCart(state)
  {
    state.cart = []
  }
}
