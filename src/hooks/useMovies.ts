import { useState, useEffect } from 'react';
import { TrendingResults } from '@/interfaces/trendingResults';
import { getMoviesByUrl } from '../utils/getMoviesByUrl';



export const useMovies = (url:string) => {
    const [ movies, setMovie ] = useState<TrendingResults[]>([]);

    useEffect(() => {
        getMovies(url);
        console.log(url);
    },[url])


    const getMovies = async(url:string) => {
        const movies = await getMoviesByUrl(url);
    
        if(!movies){
            return;
        }
        setMovie(movies);
    }



    return {
        movies,

        getMovies

    }
}