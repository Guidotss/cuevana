import { GenreMenu } from '../components/ui/GenreMenu';
export interface FilmsResults {
    id:number;
    title:string;
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
    released_date:number;
}
