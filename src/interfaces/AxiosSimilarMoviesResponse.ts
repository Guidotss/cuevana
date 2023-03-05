import { TrendingResults } from './'

export interface AxiosSimilarMoviesResponse {
    page:number;
    results:TrendingResults[];
    total_pages:number;
    total_results:number;
}