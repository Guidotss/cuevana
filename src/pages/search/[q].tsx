import { GetServerSideProps, NextPage } from "next";
import { AxiosMovieResponse, TrendingResults } from "@/interfaces"; 
import { Box, Grid, Typography } from "@mui/material";
import { filmsApi } from "@/api";
import { FilmsInfoCard } from "@/components/movie";


interface Props {
    movies: TrendingResults; 
}

const searchPage:NextPage<Props> = ({ movies }) => {
    console.log({movies}); 
    return (
        <Grid container>
            <Grid item>
                {   
                    movies.map((movie:TrendingResults) => ( 
                        <FilmsInfoCard key={movie.id} movie={ movie } />
                    ))
                }
            </Grid>
        </Grid>
    )
}



export const getServerSideProps:GetServerSideProps = async(ctx) => {
    
    const { q="" } = ctx.params as { q:string }

    try{

        const { data } = await filmsApi.get<AxiosMovieResponse>(`/search/multi?api_key=${process.env.API_KEY_TMDB}&query=${q}`);

        if(!data) throw new Error("Error al obtener las peliculas"); 


        return {
            props:{
                movies:data.results
            }
        }
    }catch(err){
        console.log(err); 
        throw new Error("Error al buscar la peliculas"); 
    }
    
}

export default searchPage; 


