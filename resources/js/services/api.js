import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://setshare.test',
    withCredentials: true,
});

export default apiClient;