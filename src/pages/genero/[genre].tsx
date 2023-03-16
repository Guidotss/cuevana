import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Box, capitalize, Grid, Typography } from "@mui/material";
import { filmsApi } from "@/api";
import { AsignGenreId } from "@/utils";
import { AxiosResponse, TrendingResults } from "@/interfaces";
import { FilmsLayout } from "@/components/layouts";
import { FilmsInfoCard } from "@/components/movie";
import { FilmsTrendingList, GenreText } from "@/components/ui";

interface Props {
  movies: TrendingResults[];
}

const GenrePage: NextPage<Props> = ({ movies }) => {
  const router = useRouter();
  const genre = router.query.genre;

  return (
    <FilmsLayout
      title="Tendencias de las semana peliculas - Guivana"
      pageDescription="Listado de las tendencias semanales publicadas en el sitio web de Guivana"
    >
      <Grid
        container
        display="flex"
        sx={{
          margin: "60px 150px",
        }}
      >
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              ml: 10,
            }}
          >
            <Typography
              color="white"
              variant="h4"
              component="h4"
              fontWeight="bold"
              sx={{
                mb: 1,
              }}
            >
              Películas de {capitalize(genre as string)}
            </Typography>
            <Box
              sx={{
                backgroundColor: "#141a32",
                p: 2,
                borderRadius: 1,
                width: "95%",
              }}
              textAlign="start"
            >
              <GenreText genre={genre as string} />
            </Box>
          </Box>
          <Grid
            display="flex"
            container
            sx={{
              mt: 3,
              ml: 10,
            }}
          >
            {movies.map((movie: TrendingResults) => (
              <FilmsInfoCard key={movie.id} movie={movie} />
            ))}
          </Grid>
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
          <FilmsTrendingList />
        </Grid>
      </Grid>
    </FilmsLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const genres: string[] = [
    "acción",
    "aventura",
    "animación",
    "ciencia ficción",
    "crimen",
    "drama",
    "familia",
    "fantasía",
    "misterio",
    "romance",
    "suspenso",
    "terror",
  ];

  return {
    paths: genres.map((genre) => ({ params: { genre } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  let { genre } = ctx.params as { genre: string };

  const genreId = AsignGenreId(genre);
  const { data } = await filmsApi.get<AxiosResponse>(
    `discover/movie?api_key=${process.env.API_KEY_TMDB}&language=es-ES&with_genres=${genreId}`
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movies: data.results,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default GenrePage;
