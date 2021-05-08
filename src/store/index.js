import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //data
    products: []
  },
  mutations: { //setters
    setProducts (state, products) {
      state.products = products
    }
  },
  getters: { //computed
    availableProducts (state, getters) {
      return state.products.filter(p => p.inventory > 0)
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
    }
  },
  modules: {

  }
})

