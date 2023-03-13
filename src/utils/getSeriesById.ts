import { localFilmsApi } from '@/api';
import { Series } from '@/interfaces/series';
import { AxiosSeriesResponse } from '../interfaces/axiosSeriesResponse';

export const getSeriesById = async(id:number):Promise<Series | undefined> => {

    if (id == 0) return 

    try{
        const  { data }  = await localFilmsApi.get(`/series/${id}`); 
    
        if(!data.results){
            throw new Error('No hay resultados');
        }

        return data.results;

    }catch(err){
        console.log(err);
        throw new Error('Error al obtener la serie');
    }

}