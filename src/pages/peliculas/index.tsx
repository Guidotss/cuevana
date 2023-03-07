import NextLink from "next/link";
import { GetStaticProps, NextPage } from 'next'
import { FilmsLayout } from "@/components/layouts";
import { Box, Chip, Grid, Link, Typography } from "@mui/material";
import { TrendingResults } from '../../interfaces/trendingResults';
import { filmsApi } from "@/api";
import { AxiosTrendingResponse } from '../../interfaces/axiosTrendingResponse';
import { FilmsInfoCard } from "@/components/movie/FilmsInfoCard";
import { FilmsTrendingList } from '../../components/ui/FilmsTrendingList';



interface Props { 
    movies: TrendingResults[];
}

const FilmsPage:NextPage<Props> = ({ movies }) => {
  return (
    <FilmsLayout title="Últimas peliculas publicadas - Guivana" pageDescription="Listado de las ultimas peliculas publicadas en el sitio web Guivana">
        <Grid 
            container
            display="flex"
            sx={{
                margin:'50px 100px'
            }}
        >
            <Grid item xs={12} md={8}>
                <Typography
                    color="white"
                    variant="h4"
                    component="h4"
                    fontWeight="bold"
                >
                    Últimas peliculas publicadas
                </Typography>
                <Box
                    sx={{
                        backgroundColor:"#141a32",
                        p:2,
                        borderRadius:1,
                    }}
                    textAlign="start"
                >
                    <Typography
                        color="#b9c4d5"
                    >
                        En esta sección tendrás las últimas películas publicadas en cuevana, cada vez que subimos una película nueva, aquí verás el contenido más reciente y actualizado. Sin embargo, puedes visitar la sección de peliculas 
                    </Typography>
                    <Box
                        display="flex"
                        gap={1}
                    >
                        <NextLink
                            href={`/peliculas`}
                            passHref
                            legacyBehavior
                        >
                            <Link
                                fontWeight="bold"
                                sx={{
                                    '&:hover':{
                                        color:"#007aff"
                                    }
                                }}
                            >
                                tendencia del día 
                            </Link>
                        </NextLink>
                        <Typography
                            color="#b9c4d5"
                        >
                            y
                        </Typography>
                        <NextLink
                            href={`/peliculas`}
                            passHref
                            legacyBehavior
                        >
                            <Link
                                fontWeight="bold"
                                sx={{
                                    '&:hover':{
                                        color:"#007aff"
                                    }
                                }}
                            >
                                tendencia de la semana.
                            </Link>
                        </NextLink>
                    </Box>
                </Box>
                <Grid 
                    display="flex" 
                    container 
                    sx={{
                        mt:3
                    }}
                >
                    {
                        movies.map((movie:TrendingResults) => ( 
                            <FilmsInfoCard key={movie.id} movie={movie}/>
                        ))
                    }
                </Grid>
            </Grid>
            <Grid>
                <FilmsTrendingList/>
            </Grid>
        </Grid>
    </FilmsLayout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

    try{

        const { data } = await  filmsApi.get<AxiosTrendingResponse>(`movie/now_playing?api_key=${process.env.API_KEY_TMDB}&language=es-ES`); 
        if(!data){
            return {
                notFound: true
            }
        }
    
        return {
            props: {
                movies:data.results    
            },
            revalidate: 60 * 60 * 24
        }
    }catch(err){
        console.log(err); 
        throw new Error('Error al obtener las peliculas');
    }
}


export default FilmsPage;