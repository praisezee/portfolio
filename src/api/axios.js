import axios from 'axios';

export default axios.create( {
      baseURL: 'https://wallet-server-5k6e.onrender.com',
      withCredentials: true
})