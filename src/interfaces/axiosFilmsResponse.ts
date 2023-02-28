import { FilmsResults } from "./filmsResults"

export interface AxiosFilmsResponse {
    page:number;
    results:FilmsResults[];  
}