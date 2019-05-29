import axios from "@/plugins/axiosApi";

export default {
    namespaced: true,

    state: {
        token: null,
    },

    getters: {
        isAuthenticated: state => !!state.token,
        token: state => state.token
    },

    mutations: {
        setToken: (state, payload) => {
            localStorage.setItem('user-token', JSON.stringify(payload))
            state.token = payload
        },
        removeToken: (state) => {
            localStorage.removeItem("user-token")
            state.token = null
        }
    },

    actions: {
        login: ({ commit }, credentials) => {
            return axios
                .get('/info/token', {
                    auth: {
                        username: credentials.username,
                        password: credentials.password
                    }
                })
                .then(response => {
                    commit('setToken', response.data)
                    return Promise.resolve();
                }).catch(error => {
                    switch (error.response.status) {
                        case 401:
                            return Promise.reject("Utente o Password errati!");
                        default:
                            return Promise.reject(error.response.data);
                    }
                });
        },
        // Used on application startup vue.js created()
        setTokenFromLocalStorage: ({ commit }) => {
            let token = localStorage.getItem("user-token") || null;
            commit('setToken', JSON.parse(token));
        },
        logout: ({ commit, dispatch }) => {
            commit('removeToken');
        }
    },
}