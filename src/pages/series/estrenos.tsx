import NextLink from "next/link";
import { GetStaticProps, NextPage } from "next";
import { Box, Grid, Link, Typography } from "@mui/material";
import { filmsApi } from "@/api";
import { Series, AxiosResponse } from "@/interfaces";
import { FilmsLayout } from "@/components/layouts";
import { SeriesPageList, SeriesTrendingList } from "@/components/series";

interface Props {
  series: Series[];
  trendingDay: Series[];
  trendingWeek: Series[];
}

const UpcomingPage: NextPage<Props> = ({ series,trendingDay,trendingWeek, }) => {
  return (
    <FilmsLayout
      title="Últimas series en estrenos - Guivana"
      pageDescription="Listado de los ultimos estrenos publicados en el sitio web Guivana"
    >
      <Box>
        <Grid
          container
          display="flex"
          justifyContent="center"
          sx={{
            mt: 10,
          }}
        >
          <Grid item xs={12} md={8}>
            <Box>
              <Typography
                variant="h4"
                component="h1"
                color="white"
                fontWeight="bold"
              >
                Series - Estrenos
              </Typography>

              <Box
                sx={{
                  backgroundColor: "#141a32",
                  width: "90%",
                  p: 2,
                  borderRadius: 1,
                }}
              >
                <Typography color="#b9c4d5">
                  Te gustan los estrenos de series? Esta debe ser tu sección
                  favorita entonces, aquí tienes las ultimas series del año en
                  curso, los estrenos más esperados de tus series favoritas.
                  Cabe decir que encontrarás estas series también en el apartado
                  de
                  <NextLink
                    href="/series/tendencias/diarias"
                    passHref
                    legacyBehavior
                  >
                    <Link
                      sx={{
                        "&:hover": {
                          color: "#007aff",
                        },
                      }}
                    >
                      {" "}
                      Tendencias del dia{" "}
                    </Link>
                  </NextLink>
                  {" y "}
                  <NextLink
                    href="/series/tendencias/semanales"
                    passHref
                    legacyBehavior
                  >
                    <Link
                      sx={{
                        "&:hover": {
                          color: "#007aff",
                        },
                      }}
                    >
                      {" "}
                      Tendencias de la semana{" "}
                    </Link>
                  </NextLink>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                mt: 4,
              }}
            >
              <SeriesPageList series={series} />
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box>
              <Typography
                variant="h5"
                component="h1"
                fontWeight="bold"
                color="#b9c4d5"
                sx={{
                  mb: 2,
                }}
              >
                Series Destacadas
              </Typography>
            </Box>
            <SeriesTrendingList
              trendingDay={trendingDay}
              trendingWeek={trendingWeek}
            />
          </Grid>
        </Grid>
      </Box>
    </FilmsLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const { data } = await filmsApi.get<AxiosResponse>(
      `tv/popular?api_key=${process.env.API_KEY_TMDB}&language=es-ES`
    );

    if (!data) {
      return {
        notFound: true,
      };
    }
    const { data: trendingDay } = await filmsApi.get<AxiosResponse>(
      `trending/tv/day?api_key=${process.env.API_KEY_TMDB}&language=es-ES`
    );
    const { data: trendingWeek } = await filmsApi.get<AxiosResponse>(
      `trending/tv/week?api_key=${process.env.API_KEY_TMDB}&language=es-ES`
    );

    return {
      props: {
        series: data.results,
        trendingDay: trendingDay.results,
        trendingWeek: trendingWeek.results,
      },
    };
  } catch (err) {
    console.log(err);
    throw new Error("Error al obtener los datos");
  }
};

export default UpcomingPage;
