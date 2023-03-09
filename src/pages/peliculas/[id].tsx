import { GetServerSideProps, NextPage } from "next";
import { Box, Grid, Typography } from "@mui/material";
import { filmsApi } from "@/api";
import { Movie,TrendingResults,Video,AxiosAnotherMoviesResponse,AxiosMovieResponse,AxiosSimilarMoviesResponse,AxiosVideoResponse,} from "@/interfaces";
import { FilmsLayout } from "@/components/layouts";
import { FilmsTrendingList,} from "@/components/ui";
import { AnotherMovieList,HeaderMoviePage,VideoMoviePage,SimilarMovieList } from "@/components/movie";


interface Props {
  movie: Movie;
  video: Video;
  similarMovies: TrendingResults[];
  anothersMovies: TrendingResults[];
}

const FilmPage: NextPage<Props> = ({movie,video,similarMovies,anothersMovies,}) => { 
  
  const similarMoviesSplited = similarMovies?.slice(0, 5);
  const anothersMoviesSplited = anothersMovies?.slice(0, 5);

  return (
    <FilmsLayout
      title={`Ver ${movie.title} 2023 online HD - Guivana 3`}
      pageDescription={movie.overview}
      imageFullUrl={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
    >
      <HeaderMoviePage movie={movie} />
      <Box display="flex" justifyContent="center">
        <VideoMoviePage video={video} videoTitle={movie.title} />
      </Box>
      <Grid
        container
        sx={{
          p: 3,
          mt: 10,
          ml:10
        }}
      >
        <Grid 
          item xs={12} md={8}>
          <Box>
            <Typography
              color="white"
              variant="h4"
              component="h4"
              fontWeight="bold"
            >
              Peliculas similares a {movie.title}
            </Typography>
          </Box>
          <Grid
            container
            display="flex"
            gap={2}
            sx={{
              mt: 5,
            }}
          >
            <SimilarMovieList similarMovies={similarMoviesSplited} />
          </Grid>
          <Box
            sx={{
              mt: 15,
            }}
          >
            <Typography
              color="white"
              variant="h4"
              component="h4"
              fontWeight="bold"
            >
              Otras Peliculas
            </Typography>
          </Box>
          <Box>
            <AnotherMovieList anothersMovies={anothersMoviesSplited} />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box>
            <Typography
              color="#8da0bc"
              variant="h5"
              component="h5"
              fontWeight="bold"
            >
              Peliculas Destacadas
            </Typography>
          </Box>
          <Box>
            <FilmsTrendingList />
          </Box>
        </Grid>
      </Grid>
    </FilmsLayout>
  );
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params as { id: string };

  try {
    const { data } = await filmsApi.get<AxiosMovieResponse>(
      `movie/${id}?api_key=${process.env.API_KEY_TMDB}&language=es-ES`
    );

    if (!data) throw new Error("No se encontro la pelicula");

    const { data: video } = await filmsApi.get<AxiosVideoResponse>(
      `movie/${id}/videos?api_key=${process.env.API_KEY_TMDB}&language=es-ES`
    );
    if (!video.results) throw new Error("No se encontro el video");
 
    const { data: similar } = await filmsApi.get<AxiosSimilarMoviesResponse>(
      `movie/${id}/similar?api_key=${process.env.API_KEY_TMDB}&language=es-ES&page=1`
    );

    const movie = JSON.parse(JSON.stringify(data));
    const similarMovies = JSON.parse(JSON.stringify(similar.results));

    const { data: anothers } = await filmsApi.get<AxiosAnotherMoviesResponse>(
      `movie/popular?api_key=${process.env.API_KEY_TMDB}&language=es-ES&page=1`
    );
    
    const anothersMovies = JSON.parse(JSON.stringify(anothers.results)); 
    return {
      props: {
        movie: movie || null,
        video: video.results[0] || null,
        similarMovies: similarMovies || null,
        anothersMovies: anothersMovies || null,
      },
    };
  } catch (err) {
    console.log(err);
    throw new Error(`Error al obtener la pelicula: ${err}`);
  }
};

export default FilmPage;
