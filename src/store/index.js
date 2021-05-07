import Vuex from 'vuex'
import Vue from 'vue'

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
    productsCount () {
      return 0
    }
  },
  actions: { //methods
    fetchProducts () {
      //make the call
      //update the state
    }

  },
  modules: {

  }
})

