import axios from "@/plugins/axiosApi";
const model = 'users'

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
      .get(`/${model}`, {
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
      .post(`/${model}`, data, {
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
      .get(`/${model}/${id}`, {
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