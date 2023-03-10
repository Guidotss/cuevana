import NextLink from "next/link"
import { NextPage, GetStaticProps } from "next";
import { Box, Grid, Link, Typography } from "@mui/material";
import { FilmsLayout } from "@/components/layouts";
import { filmsApi } from "@/api";
import { AxiosSeriesResponse, Series } from "@/interfaces";
import { SeriesCard, SeriesPageList } from "@/components/series";

interface Props {
  series: Series[];
}

const SeriesPage: NextPage<Props> = ({ series }) => {
  return (
    <FilmsLayout
      title="Últimas series publicadas - Guivana"
      pageDescription="Listado de las últimas series publicadas en el sitio web de guivana. Encontra todas tus series en un solo lugar"
    >
      <Box
        sx={{
          mt: 3,
          ml: 40,
          mb: 3,
        }}
      >
        <Typography variant="h4" component="h1" color="white" fontWeight="bold">
          Series - Estrenos
        </Typography>
        <Box
            sx={{
                backgroundColor:"#141a32",
                width: "75%",
                p:2,
                borderRadius: 2
            }}
        >
          <Typography
            color="#b9c4d5"
          >
            Te gustan los estrenos de series? Esta debe ser tu sección favorita
            entonces, aquí tienes las ultimas series del año en curso, los
            estrenos más esperados de tus series favoritas. Cabe decir que
            encontrarás estas series también en el apartado de 
            <NextLink
                href="/series/tendencias/diarias"
                passHref
                legacyBehavior
            >
                <Link
                    sx={{
                        '&:hover':{
                            color: "#007aff"
                        }
                    }}
                >
                    {" "}
                    Tendencias del dia{" "}
                </Link>
            </NextLink>
            { " y " }
            <NextLink
                href="/series/tendencias/semanales"
                passHref
                legacyBehavior
            >
                <Link
                    sx={{
                        '&:hover':{
                            color: "#007aff"
                        }
                    }}
                >
                    {" "}
                    Tendencias de la semana{" "}
                </Link>
            </NextLink>
          </Typography>
        </Box>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid item xs={12} md={8}>
          <SeriesPageList series={series} />
        </Grid>
      </Grid>
    </FilmsLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await filmsApi.get<AxiosSeriesResponse>(
    `tv/top_rated?api_key=${process.env.API_KEY_TMDB}&language=es-ES`
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      series: data.results,
    },
  };
};

export default SeriesPage;
