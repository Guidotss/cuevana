import axios from 'axios';


const filmsApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
});

export default filmsApi;