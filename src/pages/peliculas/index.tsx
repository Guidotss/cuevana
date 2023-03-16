import { GetStaticProps, NextPage } from "next";
import NextLink from "next/link";
import { Box, Grid, Link, Typography } from "@mui/material";
import { filmsApi } from "@/api";
import { FilmsLayout } from "@/components/layouts";
import { TrendingResults, AxiosResponse } from "@/interfaces";
import { FilmsInfoCard } from "@/components/movie";
import { FilmsTrendingList } from "@/components/ui";

interface Props {
  movies: TrendingResults[];
}

const FilmsPage: NextPage<Props> = ({ movies }) => {
  return (
    <FilmsLayout
      title="Últimas peliculas publicadas - Guivana"
      pageDescription="Listado de las ultimas peliculas publicadas en el sitio web Guivana"
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
              Últimas peliculas publicadas
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
              <Typography color="#b9c4d5">
                En esta sección tendrás las últimas películas publicadas en
                cuevana, cada vez que subimos una película nueva, aquí verás el
                contenido más reciente y actualizado. Sin embargo, puedes
                visitar la sección de peliculas
                <NextLink href={`/peliculas`} passHref legacyBehavior>
                  <Link
                    fontWeight="bold"
                    sx={{
                      ml: 1,
                      mr: 1,
                      "&:hover": {
                        color: "#007aff",
                      },
                    }}
                  >
                    tendencia del día
                  </Link>
                </NextLink>
                y
                <NextLink href={`/peliculas`} passHref legacyBehavior>
                  <Link
                    fontWeight="bold"
                    sx={{
                      ml: 1,
                      "&:hover": {
                        color: "#007aff",
                      },
                    }}
                  >
                    tendencia de la semana.
                  </Link>
                </NextLink>
              </Typography>
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const { data } = await filmsApi.get<AxiosResponse>(
      `movie/now_playing?api_key=${process.env.API_KEY_TMDB}&language=es-ES`
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
  } catch (err) {
    console.log(err);
    throw new Error("Error al obtener las peliculas");
  }
};

export default FilmsPage;
