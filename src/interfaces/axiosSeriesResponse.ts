import { Series } from './series';
export interface AxiosSeriesResponse { 
    page:number; 
    results: Series[];
    total_pages:number;
    total_results:number;

}