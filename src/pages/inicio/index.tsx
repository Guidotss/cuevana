import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FilmsLayout } from "@/components/layouts";
import { filmsApi } from "@/api";
import { AxiosResponse, Series, TrendingResults } from "@/interfaces";
import {
  FilmsSelector,
  FilmsTrendingList,
  SeriesList,
  HeaderImage,
} from "@/components/ui";

interface Props {
  films: TrendingResults[];
  series: Series[];
}

const HomePage: NextPage<Props> = ({ films, series }) => {
  const mostPopularFilm = films?.filter((film) => film.popularity > 100)[0];
  const mostPopularSeries = series
    ?.filter((serie) => serie.popularity > 100)
    .slice(0, 4);
  const router = useRouter();

  const navigate = (url: string) => {
    router.push(`/${url}`);
  };

  return (
    <FilmsLayout title="Home - Guivana" pageDescription="Home - Guivana">
      <Box>
        <HeaderImage film={mostPopularFilm} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          mt: -10,
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          color="#8da0bc"
          letterSpacing={-2}
          fontWeight={600}
        >
          Todas las peliculas de Guivana 3 Online Gratis
        </Typography>
      </Box>
      <Box
        sx={{
          p: 3,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            margin: "0 30px ",
            p: 5,
          }}
        >
          <Grid item xs={12} md={8}>
            <Box sx={{ p: 1, ml: 10 }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="h3"
                  component="h3"
                  gutterBottom
                  color="#8da0bc"
                  fontWeight={600}
                  letterSpacing={-1}
                >
                  Series
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: 10,
                    height: 30,
                  }}
                >
                  ver mas series
                </Button>
              </Box>
              <SeriesList series={mostPopularSeries} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="center">
              <Image
                src={`https://image.tmdb.org/t/p/w500${series[17].poster_path}`}
                alt={films[2].title!}
                width={300}
                height={300}
                style={{
                  borderRadius: "3px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              p: "0 40px",
              ml: 15,
              mt: -3,
            }}
          >
            <FilmsSelector />
            <Box display="flex" justifyContent="center" width="85%">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 10,
                  height: 50,
                  backgroundColor: "#3d4f91",
                }}
                onClick={() => navigate("peliculas")}
              >
                Cargar mas peliculas
              </Button>
            </Box>
          </Grid>
          <Grid item md={2} ml={-15}>
            <Box>
              <Typography
                color="#8da0bc"
                variant="h5"
                component="h4"
                fontWeight={600}
              >
                Peliculas Destacadas
              </Typography>
            </Box>
            <Box>
              <FilmsTrendingList />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </FilmsLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const topRatedFilms = await filmsApi.get<AxiosResponse>(
      `trending/movie/day?api_key=${process.env.API_KEY_TMDB}&language=es-ES`
    );
    const topRatedSeries = await filmsApi.get<AxiosResponse>(
      `trending/tv/day?api_key=${process.env.API_KEY_TMDB}&language=es-ES`
    );

    return {
      props: {
        films: topRatedFilms.data.results || null,
        series: topRatedSeries.data.results || null,
      },
      revalidate: 60 * 60 * 24,
    };
  } catch (error) {
    throw new Error(`Error al obtener los datos:${error}`);
  }
};

export default HomePage;
