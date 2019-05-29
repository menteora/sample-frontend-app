import axios from 'axios'

let config = {
  baseURL: 'https://test.bancolini.com/tracker/api/v1/'
};

const $axios = axios.create(config);

export default $axios;