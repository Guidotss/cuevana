import axios from 'axios';


const topFilmsApi = axios.create({
    baseURL: 'https://aiom-db-all-in-one-movie-database.p.rapidapi.com',
    headers:{
        'X-RapidAPI-Key': '6c4d2bd3b6msh0c75b6cb911863ep11fa5ejsnb6effbf8c3a1',
        'X-RapidAPI-Host': 'aiom-db-all-in-one-movie-database.p.rapidapi.com'
    }
}); 


export default topFilmsApi;