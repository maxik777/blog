import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  created () {
    const userInfo = localStorage.getItem('user')
    if (userInfo) {
      const userData = JSON.parse(userInfo)
      this.$store.commit('setUserData', userData)
    }
    axios.interceptors.response.use(
        response => response,
        error => {
          if (error.response.status === 401) {
            this.$store.dispatch('logout')
          }
          return Promise.reject(error)
        }
    )
  },
  render: h => h(App)
}).$mount('#app')
