

export interface TrendingResults {
    id:number;
    name?:string; 
    title?:string;
    original_title:string;
    original_language:string;
    overview:string;
    popularity:number;
    vote_count:number;
    video:boolean;
    vote_average:number;
    total_pages:number;
    total_results:number;
    adults:boolean;
    backdrop_path:string;    
    genre:number[];
    release_date?:number;
    poster_path:string;
    first_air_date?:string;
    genre_ids:number[];
    genres:Genres[]; 
    runtime:number;
}
interface Genres { 
    id:number
    name:string; 
}
