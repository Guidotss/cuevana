import NextLink from "next/link";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { filmsApi } from "@/api";
import { AxiosSeriesResponse, Series } from "@/interfaces";
import { useRouter } from "next/router";
import { ElevatorSharp } from "@mui/icons-material";
import { Box, Grid, Link, Typography } from "@mui/material";
import { FilmsLayout } from "@/components/layouts";
import { SeriesPageList, SeriesTrendingList } from "@/components/series";

interface Props {
  series: Series[];
  trendingData: Series[];
}

const TrendingPage: NextPage<Props> = ({ series,trendingData }) => {
  const router = useRouter();
  const { trending } = router.query;

  return (
    <FilmsLayout
      title={`Tendencias ${trending} - Guivana`}
      pageDescription={`Lista de tendias ${trending} publicadas en el sitio web Guivana`}
    >
      <Box>
        <Grid container display="flex" justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                mt: 5,
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                color="white"
                fontWeight="bold"
                sx={{
                  mb: 2,
                }}
              >
                Series - Tendencias{" "}
                {trending === "day" ? "del día" : "de la semana"}
              </Typography>
              <Box
                sx={{
                  p: 2,
                  backgroundColor: "#141a32",
                  borderRadius: 1,
                  width: "91%",
                  mb: 2,
                }}
              >
                {trending === "diarias" ? (
                  <Typography color="#b9c4d5">
                    Las series más populares en estreno del día se encuentra en
                    esta sección. Te filtramos las series que están en tendencia
                    en las últimas 24 horas. Recuerda que también contamos con
                    una lista de series en{" "}
                    <NextLink
                      href="/series/tendencias/semanales"
                      passHref
                      legacyBehavior
                    >
                      <Link
                        sx={{
                          fontWeight: "bold",
                          "&:hover": {
                            color: "#007aff",
                          },
                        }}
                      >
                        tendencia de los últimos 7 días.
                      </Link>
                    </NextLink>
                  </Typography>
                ) : (
                  <Typography color="#b9c4d5">
                    Esta lista te mostrará todas las series que están en
                    tendencia en los últimos 7 días de cuevana. Por lo regular
                    verás series relevantes en estreno. Aparte puedes consultar
                    la lista de las{" "}
                    <NextLink
                      href="/series/tendencias/diarias"
                      passHref
                      legacyBehavior
                    >
                      <Link
                        sx={{
                          fontWeight: "bold",
                          "&:hover": {
                            color: "#007aff",
                          },
                        }}
                      >
                        series en tendencia en las últimas 24 horas.
                      </Link>
                    </NextLink>
                  </Typography>
                )}
              </Box>
            </Box>
            <Box>
              <SeriesPageList series={series}/>
            </Box>
          </Grid>
          <Grid 
            item 
            xs={12}
            md={2}
          >
            <Box>
              <Typography
                variant="h5"
                component="h2"
                fontWeight="bold"
                color="#8da0bc"
                sx={{
                  mt: 5,
                  mb: 2,
                }}
              >
                Series Destacadas
              </Typography>
            </Box>
            <SeriesTrendingList trendingDay={series} trendingWeek={trendingData}/>
          </Grid>
        </Grid>
      </Box>
    </FilmsLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const timeWindows: string[] = ["day", "week"];

  return {
    paths: timeWindows.map((timeWindow) => ({
      params: {
        trending: timeWindow,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  let { trending } = ctx.params as { trending: string };
  let trendingData; 

  if (trending === "diarias") {
    trending = "day";
  }
  if (trending === "semanales") {
    trending = "week";
  }

  try {
    const { data } = await filmsApi.get<AxiosSeriesResponse>(
      `trending/tv/${trending}?api_key=${process.env.API_KEY_TMDB}&language=es-ES`
    );

    if(trending === 'day'){
      trendingData = await filmsApi.get<AxiosSeriesResponse>(`trending/tv/week?api_key=${process.env.API_KEY_TMDB}&language=es-ES}`);
    }else{
      trendingData = await filmsApi.get<AxiosSeriesResponse>(`trending/tv/day?api_key=${process.env.API_KEY_TMDB}&language=es-ES}`);
    }

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        series: data.results,
        trendingData: trendingData.data.results,
        
      },
      revalidate: 60 * 60 * 24,
    };
  } catch (err) {
    console.log(err);
    throw new Error(`Error al obtener las series:${err}`);
  }
};

export default TrendingPage;
