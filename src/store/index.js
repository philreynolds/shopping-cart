import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

new Vuex.Store({
  state: { //data
    products: []
  },
  mutations: { //setters
    setProducts () {
      //update products
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
    }

  },
  modules: {

  }
})

