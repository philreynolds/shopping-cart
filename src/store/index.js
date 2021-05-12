import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

import cart from '@/store/modules/cart'
import products from '@/store/modules/products'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})

