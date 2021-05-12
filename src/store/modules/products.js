import shop from '@/api/shop'

export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    availableProducts (state, getters) {
      return state.items.filter(p => p.inventory > 0)
    },
    productIsInStock (state, getters) {
      return (product) => {
        return product.inventory > 0
      }
    }
  },
  mutations: {
    setProducts(state, products) {
      state.items = products
    },
    decrementItemInventory(state, product) {
      product.inventory--
    }
  },
  actions: {
    fetchProducts ({commit}) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    }
  }
}
