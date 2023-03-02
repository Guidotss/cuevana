import NextLink from "next/link";
import { GetStaticProps, NextPage } from "next";
import { FilmsLayout } from "@/components/layouts";
import { HeaderImage } from "@/components/ui/HeaderImage";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { filmsApi } from "@/api";
import { AxiosTrendingResponse, TrendingResults } from "@/interfaces";
import { SeriesList } from "@/components/ui";
import Image from "next/image";
import { FilmsSelector } from '../../components/ui/FilmsSelector';

interface Props {
  films: TrendingResults[];
  series: TrendingResults[];
}

export const HomePage: NextPage<Props> = ({ films, series }) => {
  const mostPopularFilm = films.filter((film) => film.popularity > 100)[0];
  const mostPopularSeries = series
    .filter((serie) => serie.popularity > 100)
    .slice(0, 4);

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
              width={350}
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
          md={8}
          sx={{
            p: 5,
            ml:15
          }}
        >
          <FilmsSelector/>
        </Grid>  
      </Grid> 
    </FilmsLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const topRatedFilms = await filmsApi.get<AxiosTrendingResponse>(
      `trending/movie/day?api_key=${process.env.API_KEY_TMDB}`
    );
    const topRatedSeries = await filmsApi.get<AxiosTrendingResponse>(
      `trending/tv/day?api_key=${process.env.API_KEY_TMDB}`
    );

    return {
      props: {
        films: topRatedFilms.data.results,
        series: topRatedSeries.data.results,
      },
    };
  } catch (error) {
    throw new Error(`Error al obtener los datos:${error}`);
  }
};

export default HomePage;
