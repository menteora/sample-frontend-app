import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/thecore/auth'
//import users from '@/store/thecore/users'
import snackbar from '@/store/utils/snackbar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    //users,
    snackbar,
  },
  states: {
  },
  mutations: {
  },
  actions: {
  }
})