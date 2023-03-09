import { GetServerSideProps, NextPage } from "next";
import { AxiosMovieResponse, TrendingResults } from "@/interfaces"; 
import { Box, Grid, Typography } from "@mui/material";
import { filmsApi } from "@/api";
import { FilmsInfoCard } from "@/components/movie";
import { FilmsLayout } from "@/components/layouts";
import { FilmsTrendingList } from '../../components/ui/FilmsTrendingList';


interface Props {
    movies: TrendingResults[]; 
}

const searchPage:NextPage<Props> = ({ movies }) => {

    return (
        <FilmsLayout title="Search - Guivana" pageDescription="todas las peliculas relacionadas a la busqueda del usuario">
            <Typography
                variant="h4"
                component="h1"
                fontWeight="bold"
                color="white"
                sx={{
                    ml:11,
                    mt:3,
                    mb:5

                }}
            >
                Search
            </Typography>
            <Grid 
                container 
                display="flex"
                sx={{
                    mt:2
                }}
            >
                <Grid
                    item 
                    xs={12}
                    md={8}
                    display="flex"
                    sx={{
                        ml:8
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
                <Grid
                    item
                    xs={12}
                    md={3}
                >
                    <Box
                        sx={{
                            ml:5,
                            mt:2
                        }}
                    >
                        <Typography
                            variant="h5"
                            component="h2"
                            fontWeight="bold"
                            color="#8da0bc"
                        >
                            Peliculas Destacadas
                        </Typography>
                    </Box>
                    <FilmsTrendingList/>
                </Grid>
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


