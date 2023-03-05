import { Movie } from './movie';
export interface AxiosMovieResponse {
    page:number; 
    results:Movie;
    total_pages:number;
    total_results:number;
}