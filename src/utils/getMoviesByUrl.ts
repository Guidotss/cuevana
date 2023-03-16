import axios from "axios";
import { filmsApi } from "@/api";
import { TrendingResults } from "@/interfaces";

export const getMoviesByUrl = async ( url: string ): Promise<TrendingResults[] | undefined> => {
  if (url === "") {
    return;
  }
  try {
    const { data } = await filmsApi.get(
      `/${url}?api_key=${process.env.NEXT_PUBLIC_API_KEY_TMDB}&language=es-ES`
    );

    if (!data.results) {
      return;
    }
    return data.results;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log(err);
    }
  }
};
