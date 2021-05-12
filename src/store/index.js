import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'
import state from '@/store/state'
import actions from '@/store/actions'
import mutations from '@/store/mutations'
import getters from '@/store/getters'


Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

