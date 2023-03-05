import { useState, useEffect } from 'react';
import { TrendingResults,Movie } from '@/interfaces';
import { getMoviesByUrl, getMovieById } from '@/utils';




export const useMovies = (url:string, id:number) => {
    const [ movies, setMovies ] = useState<TrendingResults[]>([]);
    const [ movie, setMovie ] = useState<Movie>();
    useEffect(() => {
        getMovies(url);
        getMovie(id);

    },[url,id])


    const getMovies = async(url:string) => {
        const movies = await getMoviesByUrl(url);
    
        if(!movies){
            return;
        }
        setMovies(movies);
    }

    const getMovie = async(id:number) => {
        const movie = await getMovieById(id);
        if(!movie){
            return;
        }
        setMovie(movie)
    }



    return {
        movies,
        movie,

        getMovies

    }
}