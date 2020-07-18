import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//Global store
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/V1'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
