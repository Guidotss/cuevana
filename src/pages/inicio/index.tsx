import { GetStaticProps, NextPage } from 'next'
import { FilmsLayout } from '@/components/layouts/FilmsLayout';
import { HeaderImage } from '../../components/ui/HeaderImage';
import { Box } from '@mui/material';
import { filmsApi } from '@/api';
import { AxiosFilmsResponse, FilmsResults } from '@/interfaces';

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