import axios from "axios";

export default {
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
}