import axios from "@/plugins/axiosApi";

export default {
  namespaced: true,

  state: {
  },

  getters: {
  },

  mutations: {
  },

  actions: {
    fetch: ({ commit, rootGetters }) => {
      const tokenApi = rootGetters["auth/token"];
      return axios
        .get('/users', {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token token="${tokenApi.token}", email="${tokenApi.email}"`
          }
        })
        .then(response => response.data)
    },
    // TO BE TESTED
    create: ({ commit }, data) => {
      return axios
        .post('/users', data, {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(response => response.data)
    },
    read: ({ commit, rootGetters }, id) => {
      const tokenApi = rootGetters["auth/token"];
      return axios
        .get('/users/' + id , {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token token="${tokenApi.token}", email="${tokenApi.email}"`
          }
        })
        .then(response => response.data)
    },
    update: ({ commit }, data) => {
      // CRUD UPDATE ACTION
    },
    delete: ({ commit }, id) => {
      // CRUD DELETE ACTION
    }
  }
}