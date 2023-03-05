import { TrendingResults } from "./trendingResults"

export interface AxiosTrendingResponse {
    page:number;
    results:TrendingResults[];  
    total_pages:number;
    total_results:number;
}