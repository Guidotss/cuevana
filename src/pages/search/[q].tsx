import { GetServerSideProps, NextPage } from "next";
import { AxiosMovieResponse, TrendingResults } from "@/interfaces"; 
import { Box, Grid, Typography } from "@mui/material";
import { filmsApi } from "@/api";
import { FilmsInfoCard } from "@/components/movie";
import { FilmsLayout } from "@/components/layouts";


interface Props {
    movies: TrendingResults[]; 
}

const searchPage:NextPage<Props> = ({ movies }) => {

    return (
        <FilmsLayout title="Search - Guivana" pageDescription="todas las peliculas relacionadas a la busqueda del usuario">
            <Grid 
                container 
                display="flex"
                sx={{
                    mt:2
                }}
            >
                {
                    movies.map((movie:TrendingResults) => {
                        if(!movie.backdrop_path || !movie.release_date){
                            return null
                        }

                        return (
                            <FilmsInfoCard key={movie.id}  movie={movie}/>
                        )
                    })
                }
            </Grid>
        </FilmsLayout>
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


