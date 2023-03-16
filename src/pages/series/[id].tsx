import { GetServerSideProps, NextPage } from "next";
import { filmsApi } from "@/api";
import { SerieById } from "@/interfaces";
import { Box, Grid, Typography } from "@mui/material";
import { FilmsLayout } from "@/components/layouts";
import { HeaderMoviePage } from "@/components/movie";


interface Props {
  serie: SerieById;
  episodes: any;
}

const SeriesPage: NextPage<Props> = ({ serie, episodes }) => {
  return (
    <FilmsLayout
      title={`Ver ${serie.name} 2023 Online gratis - Guivana`}
      pageDescription={serie.overview}
    >
      <Box>
        <HeaderMoviePage serie={serie} />
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          position: "absolute",
          top: "60%",
          left: "150px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#141a32",
            borderRadius: 1,
          }}
        >
          <Typography
            variant="body1"
            component="p"
            color="#4f6b95"
            sx={{
              mt: 2,
            }}
          >
            Seleccionar temporada
          </Typography>
        </Box>
      </Grid>
    </FilmsLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { id } = ctx.params as { id: string };
  const seasonsEpisodes = [];

  try {
    const { data } = await filmsApi.get<SerieById>(
      `tv/${id}?api_key=${process.env.API_KEY_TMDB}&language=es-ES`
    );
    if (!data) {
      return {
        notFound: true,
      };
    }
    for (let i = 0; i < data.seasons.length; i++) {
      const { data: episodes } = await filmsApi.get(
        `tv/${id}/season/${data.seasons[i].season_number}?api_key=${process.env.API_KEY_TMDB}&language=es-ES`
      );
      seasonsEpisodes.push(episodes);
    }

    return {
      props: {
        serie: data,
        episodes: seasonsEpisodes,
      },
    };
  } catch (err) {
    console.log(err);
    throw new Error(`Error al obtener la serie:${err}`);
  }
};

export default SeriesPage;
