import { TrendingResults } from './trendingResults';
export interface AxiosAnotherMoviesResponse {
    page:number;
    results:TrendingResults[]; 
    total_pages:number;
    total_results:number;
}