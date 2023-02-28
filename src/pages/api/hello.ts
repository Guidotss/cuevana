import { filmsSearchApi, topFilmsApis } from '@/api'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
  | { message: string }
  | { data: object[] }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  if (req.method === 'GET') {
    const { data } = await topFilmsApis.get('/showtime',{
      params:{
        mode:'popular',
      }
    });
    console.log({data});
    res.status(200).json({ data })
    
  }

}