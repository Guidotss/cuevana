import { TrendingResults } from "./trendingResults"

export interface AxiosTrendingResponse {
    page:number;
    results:TrendingResults[];  
}