import { filmsApi } from "@/api"
import { Movie } from '@/interfaces';


export const getMovieById = async (id: number): Promise<Movie | undefined> => {

    if (id === 0 || id === undefined) {
        return;
    }

    try {
        const { data } = await filmsApi.get<Movie>(`movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY_TMDB}&language=es-ES`);

        if (!data) {
            return;
        }

        return data;
    } catch (err) {
        console.log(err)
    }



}