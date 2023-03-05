import axios, { AxiosError } from "axios";
import { filmsApi } from "@/api"
import { AxiosTrendingResponse } from '@/interfaces/axiosTrendingResponse';
import { TrendingResults } from "@/interfaces";

export const getMoviesByUrl = async (url: string): Promise<TrendingResults[] | undefined> => {
    if (url === "") {
        return;
    }
    try {
        const { data } = await filmsApi.get<AxiosTrendingResponse>(`/${url}?api_key=${process.env.NEXT_PUBLIC_API_KEY_TMDB}&language=es-ES`);

        if (!data.results) {
            return;
        }
        return data.results;

    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.log(err);
        }
    }
}

