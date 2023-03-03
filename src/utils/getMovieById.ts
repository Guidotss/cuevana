import { filmsApi } from "@/api"
import { AxiosTrendingResponse } from '@/interfaces/axiosTrendingResponse';
import { TrendingResults } from '../interfaces/trendingResults';

export const getMovieById = async(id: number):Promise<TrendingResults | undefined> => {

    if(id === 0 || id === undefined){
        return;
    }

    try{
        
        const { data } = await filmsApi.get<TrendingResults>(`movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY_TMDB}&language=es-ES`); 
        if(!data){
            return;
        }
        return data; 
    }catch(err){
        console.log(err)
    }


    
}