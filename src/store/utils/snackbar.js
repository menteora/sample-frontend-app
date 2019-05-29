export default {
    namespaced: true,

    state: {
      message: ''
    },

    getters: {
      message: (state) => {
        return state.message;
      }
    },

    mutations: {
      setMessage: (state, payload) => {
        state.message = payload
      }
    },

    actions: {
      setMessage: ({ commit }, message) => {
        commit('setMessage', message)
      }
    }
  }