import NextLink from "next/link";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Box, Grid, Link, Typography } from "@mui/material";
import { filmsApi } from "@/api";
import { FilmsLayout } from "@/components/layouts";
import { AxiosTrendingResponse, TrendingResults } from "@/interfaces";
import { FilmsInfoCard } from "@/components/movie";
import { FilmsTrendingList } from "@/components/ui";

interface Props {
  trendingMovies: TrendingResults[];
}


const TrendingPage: NextPage<Props> = ({ trendingMovies }) => {
  const router = useRouter();
  const trending = router.query.trending;

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
        <Grid 
          item 
          xs={12} 
          md={8}
        >
          <Box
            sx={{
              ml:10
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
              Películas - Tendencias{" "}
              {trending === "semanal" ? "de la semana" : "del día"}
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
              <Box>
                {trending === "semanal" ? (
                  <Box>
                    <Typography color="#b9c4d5">
                      Aquí te mostramos las películas más populares de la semana
                      en cuevana, esta lista contiene lo más interesante de los
                      últimos 7 días. También puedes consultar las películas que
                      están en
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
                          tendencia del día
                        </Link>
                      </NextLink>
                    </Typography>
                  </Box>
                ) : (
                  <Box>
                    <Typography color="#b9c4d5">
                      En esta sección te mostramos las películas que se encuentran
                      en tendencia el día de hoy en Guivana, quiere decir que aquí
                      verás las películas más populares en las últimas 24 horas.
                      Recuerda que esta sección es diferente a las
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
                          últimas peliculas subidas.
                        </Link>
                      </NextLink>
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
          <Grid
            display="flex"
            container
            sx={{
              mt: 3,
              ml:10
            }}
          >
            {trendingMovies.map((movie: TrendingResults) => (
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
export default TrendingPage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const timeWindow: string[] = ["diaria", "semanal"];

  return {
    paths: timeWindow.map((time) => ({ params: { trending: time } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    let { trending } = ctx.params as { trending: string };

    if (trending.trim() === "semanal") {
      trending = "week";
    } else if (trending.trim() === "diaria") {
      trending = "day";
    }

    const { data } = await filmsApi.get<AxiosTrendingResponse>(
      `/trending/movie/${trending}?api_key=${process.env.API_KEY_TMDB}&language=es-ES`
    );

    if (!data) throw new Error("No se encontraron las tendencias");

    return {
      props: {
        trendingMovies: data.results,
      },
      revalidate: 60 * 60 * 24,
    };
  } catch (err) {
    console.log(err);
    throw new Error("Error al encontrar las tendencias");
  }
};
