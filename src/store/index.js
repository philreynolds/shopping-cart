import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //data
    products: [],
    cart: [],
    checkoutStatus: ''
  },
  mutations: { //setters
    setProducts(state, products) {
      state.products = products
    },
    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      })
    },
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++
    },
    decrementItemInventory(state, product) {
      product.inventory--
    },
    setCheckoutStatus(state, status) {
      state.checkoutStatus = status
    },
    emptyCart(state) {
      state.cart = []
    }
  },
  getters: { //computed
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
    }
  },
  actions: { //methods
    fetchProducts ({commit}) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    },
    addProductToCart (context, product) {
      if (product.inventory > 0) {
        const cartItem = context.state.cart.find(item => item.id === product.id)
        if (!cartItem) {
          context.commit('pushProductToCart', product.id)
        } else {
          context.commit('incrementItemQuantity', cartItem)
        }
      context.commit('decrementItemInventory', product)
      }
    },
    checkout ({state, commit}) {
      shop.buyProducts(
        state.cart,
        () => {
          commit('emptyCart')
          commit('setCheckoutStatus', 'success')
        },
        () => {
          commit('setCheckoutStatus', 'fail')
        }
      )
    }
  },
  modules: {

  }
})

