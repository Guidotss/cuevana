import { GetStaticProps, NextPage } from 'next'
import { FilmsLayout } from '../../components/layouts';
import { HeaderImage } from '../../components/ui/HeaderImage';
import { Box, Grid, Typography } from '@mui/material';
import { filmsApi } from '../../api';
import { AxiosFilmsResponse, FilmsResults } from '../../interfaces';

interface Props {
  films: FilmsResults[]
}

export const HomePage:NextPage<Props>  = ({ films }) => {

  const mostPopularFilm = films.filter((film) => film.popularity > 100)[0];
  console.log(mostPopularFilm);
  
  
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
        <Grid container>
          <Grid item xs={7}>
            <Typography
              variant="h5"
              component="h5"
              fontWeight={600}
              color="#8da0bc"
            >
              Episodios
            </Typography>
            {/* //TODO: Crear componente de episodios */ }

          </Grid>
        </Grid>
      <Box flex={1}/>
    </FilmsLayout>
  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {

  try{
    const { data } = await filmsApi.get<AxiosFilmsResponse>(`/popular?api_key=${process.env.API_KEY_TMDB}`);
    

    return {
      props: {
        films: data.results
      }
    }

  }catch(error){
    throw new Error(`Error al obtener los datos:${error}`);
  }
}

export default HomePage;