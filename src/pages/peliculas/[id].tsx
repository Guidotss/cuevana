import { FC } from "react";
import { GetServerSideProps } from "next";
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

const FilmPage: FC<Props> = ({movie,video,similarMovies,anothersMovies,}) => {
  return (
    <FilmsLayout
      title={`Ver ${movie.title} 2023 online HD - Guivana 3`}
      pageDescription={movie.overview}
      imageFullUrl={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
    >
      <HeaderMoviePage movie={movie} />
      <Box>
        <VideoMoviePage video={video} videoTitle={movie.title} />
      </Box>
      <Grid
        container
        sx={{
          p: 3,
          ml: 25,
          mt: 10,
        }}
      >
        <Grid item xs={12} md={8}>
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
            <SimilarMovieList similarMovies={similarMovies} />
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
            <AnotherMovieList anothersMovies={anothersMovies} />
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
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
};


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
    if (video.results === null) throw new Error("No se encontro el video");

    const { data: similar } = await filmsApi.get<AxiosSimilarMoviesResponse>(
      `movie/${id}/similar?api_key=${process.env.API_KEY_TMDB}&language=es-ES&page=1`
    );

    const movie = JSON.parse(JSON.stringify(data));
    const similarMovies = JSON.parse(JSON.stringify(similar.results)).slice(
      0,
      5
    );

    const { data: anothers } = await filmsApi.get<AxiosAnotherMoviesResponse>(
      `movie/popular?api_key=${process.env.API_KEY_TMDB}&language=es-ES&page=1`
    );
    const anothersMovies = JSON.parse(JSON.stringify(anothers.results)).slice(
      0,
      5
    );

    return {
      props: {
        movie,
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
