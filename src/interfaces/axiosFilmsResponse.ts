import { FilmsSearchResults } from "./filmsResults"

export interface AxiosFilmsSearchResponse {
    data:{
        page:number;
        results:FilmsSearchResults[];   
    }
}