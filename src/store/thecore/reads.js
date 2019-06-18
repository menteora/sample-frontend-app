import axios from "@/plugins/axiosApi";

const model = 'reads'

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
        create: ({ dispatch, rootGetters }, data) => {
            let item_object = { item: data.item };
            let read_object = { read: data.read };
            return dispatch('items/create', item_object, { root: true }).then(item_data => {
                read_object.read.item_id = item_data.id;

                const tokenApi = rootGetters["auth/token"];
                return axios
                    .post(`/${model}`, read_object, {
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": `Token token="${tokenApi.token}", email="${tokenApi.email}"`
                        }
                    })
                    .then(response => {
                        return { item: item_data, read: response.data }
                    })
            });
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