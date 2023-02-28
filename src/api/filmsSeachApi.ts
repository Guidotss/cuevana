import axios from 'axios';


const filmsSearch = axios.create({
    baseURL: 'https://ott-details.p.rapidapi.com',
    headers:{
        'X-RapidAPI-Key': '6c4d2bd3b6msh0c75b6cb911863ep11fa5ejsnb6effbf8c3a1',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
});

export default filmsSearch;