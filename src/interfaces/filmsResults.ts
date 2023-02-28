export interface FilmsSearchResults {
    title:string;
    imdbid:string; 
    genre:genre[];
    type:string; 
    released:number;
    imageurl?:string[];
    synopsis?:string;
}

type genre = 
    |"Action" 
    | "Adult"  
    | "Adventure" 
    | "Animation" 
    | "Biography" 
    | "Comedy" 
    | "Crime" 
    | "Documentary" 
    | "Drama" 
    | "Family"
    | "Fantasy"
    | "Game-Show" 
    | "History"
    | "Horror"
    | "Music"
    | "Musical"
    | "Mystery"
    | "News"
    | "Reality-TV"
    | "Romance"
    | "Sci-Fi"
    | "Short"
    | "Sport"
    | "Talk-Show"
    | "Thriller"
    | "War"
    | "Western"


