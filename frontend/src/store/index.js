import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/V1'

export default new Vuex.Store({
  state: {
    user: null
  },

  mutations: {
    setUserData (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
    },

    clearUserData () {
      localStorage.removeItem('user')
      location.replace('/login')
    },

    registerPassed () {
      location.replace('/login')
    }
  },

  actions: {
    login ({ commit }, credentials) {
      return axios
          .post('/login', credentials)
          .then(({ data }) => {
            commit('setUserData', data)
          })
    },

    register ({ commit }, params) {
      console.log(params)
      return axios
          .post('/register', params)
          .then(() => {
            commit('registerPassed')
          })
    },

    logout ({ commit }) {
      commit('clearUserData')
    }
  },

  getters : {
    isLogged: state => !!state.user
  }
})
