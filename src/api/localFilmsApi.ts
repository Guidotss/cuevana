import axios from 'axios'; 


const localFilmsApi = axios.create({
    baseURL:'/api'
}); 


export default localFilmsApi;