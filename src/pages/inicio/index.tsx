import NextLink from 'next/link';
import { GetStaticProps, NextPage } from 'next'
import { FilmsLayout } from '@/components/layouts';
import { HeaderImage } from '@/components/ui/HeaderImage';
import { Box, Grid, Link, Typography } from '@mui/material';
import { filmsApi } from '@/api';
import { AxiosTrendingResponse, TrendingResults } from '@/interfaces';
import { SeriesList } from '@/components/ui'; 


interface Props {
  films: TrendingResults[]; 
  series: TrendingResults[];
}

export const HomePage:NextPage<Props>  = ({ films,series }) => {
  
  const mostPopularFilm = films.filter((film) => film.popularity > 100)[0];
  const mostPopularSeries = series.filter((serie) => serie.popularity > 100).slice(0,4);

  return (
    <FilmsLayout title="Home - Guivana" pageDescription="Home - Guivana">
      <Box>
        <HeaderImage film={ mostPopularFilm }/>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          mt:'-50px'
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          fontWeight={600}
          color="#8da0bc"
        >
          Todas las peliculas de Guivana 3 Online Gratis
        </Typography>
      </Box>
      <Box flex={1}/>
        <Grid 
          container  
          sx={{
            ml:10
          }}
        >
          <Grid 
            item 
            xs={4} 
          >
            <Box>
              <Typography
                variant="h4"
                component="h4"
                fontWeight={600}
                color="#8da0bc"
                letterSpacing={-1}
                sx={{
                  mb:3,
                  ml:1
                }}
              >
                Episodios
              </Typography>
              <NextLink 
                href="/episodios"
                passHref
                legacyBehavior
                
              >
                <Link
                  sx={{
                    ml:2,
                    backgroundColor:'#007aff',
                    borderRadius:'10px',
                    height:'40px',
                    width:'130px',
                  }}
                >
                  <Typography
                    sx={{
                      ml:1.5,
                      mt:1
                    }}
                  >
                    Ver mas series
                  </Typography>
                </Link>
              </NextLink>
            </Box>
            {/* //TODO: Crear componente de episodios */ }
            <SeriesList series={ mostPopularSeries }/>
            
          </Grid>
        </Grid>
      <Box flex={1}/>
    </FilmsLayout>
  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {

  try{

    const topRatedFilms = await filmsApi.get<AxiosTrendingResponse>(`trending/movie/day?api_key=${process.env.API_KEY_TMDB}`);
    const topRatedSeries = await filmsApi.get<AxiosTrendingResponse>(`trending/tv/day?api_key=${process.env.API_KEY_TMDB}`); 

    return {
      props: {
        films: topRatedFilms.data.results,
        series:topRatedSeries.data.results
      }
    }

  }catch(error){
    throw new Error(`Error al obtener los datos:${error}`);
  }
}

export default HomePage;