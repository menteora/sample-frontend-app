import axios from "@/plugins/axiosApi";

const model = 'items'

export default {
    namespaced: true,

    state: {
    },

    getters: {
    },

    mutations: {
    },

    actions: {
        // TO BE TESTED
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
        create: ({ rootGetters }, data) => {
            const tokenApi = rootGetters["auth/token"];
            return axios
                .post(`/${model}`, data, {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Token token="${tokenApi.token}", email="${tokenApi.email}"`
                    }
                })
                .then(response => response.data)
        },
        // TO BE TESTED
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