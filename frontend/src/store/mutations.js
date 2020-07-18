import axios from "axios";

export default {
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
}