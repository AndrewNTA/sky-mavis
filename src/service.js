import axios from 'axios';
const BACKEND_HOST = 'https://wallet-online.herokuapp.com/';

const instance = axios.create({
  baseURL: BACKEND_HOST,
});

instance.defaults.headers.common['Content-Type'] = 'application/json';

export default instance;
