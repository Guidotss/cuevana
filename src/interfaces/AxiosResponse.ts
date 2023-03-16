import { Movie } from './movie';
import { Series } from './series';
import { SerieById } from './serieById';
import { TrendingResults } from './trendingResults';
import { Episode } from './episodes';

export interface AxiosResponse { 
    page: number;
    results: Results[];
    total_pages: number;

}

type Results = Movie | Series | SerieById | TrendingResults | Episode;