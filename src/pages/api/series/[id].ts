import { filmsApi } from '@/api';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Series } from '@/interfaces/series';

type Data = 
    |{ message: string }
    |{ message:string, results:Series }

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch(req.method){
        case 'GET': 
            return getSeriesInfo(req, res);
        default:
            return res.status(405).json({message: "Method not allowed"});
    }
}


const getSeriesInfo = async(req:NextApiRequest, res:NextApiResponse) => {

    const { id } = req.query;
    if(!id) return res.status(400).json({message: "Missing id"});

    

    try{
        const { data } = await filmsApi.get(`tv/${id}?api_key=${process.env.API_KEY_TMDB}&language=es-ES`);
        if(!data){
            return res.status(404).json({message: "Not found"});
        }

        return res.status(200).json({
            message: "Success",
            results: data
        }); 

    }catch(err){
        console.log(err);
        return res.status(500).json({message: "Internal server error"});
    }
    
}