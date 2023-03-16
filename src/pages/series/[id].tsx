import { GetServerSideProps, NextPage } from "next";
import { Box, Grid, Typography } from "@mui/material";
import { filmsApi } from "@/api";
import { SerieById,Series,AxiosResponse } from "@/interfaces";
import { FilmsLayout } from "@/components/layouts";
import { BasicSelect } from "@/components/ui";
import { HeaderMoviePage } from "@/components/movie";
import { SeriesEpisodesList, SeriesTrendingList } from '@/components/series';

interface Props {
  serie: SerieById;
  episodes: any;
  trendingDay: Series[];
  trendingWeek: Series[];
}

const SeriesPage: NextPage<Props> = ({ serie, episodes,trendingDay,trendingWeek }) => {
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
        sx={{
          display: "flex",
          mt:-10
        }}
      >
        <Box
          display="flex"
          sx={{
            backgroundColor: "#141a32",
            borderRadius: 1,
            ml:10,
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
          <BasicSelect seasons={serie.seasons} />
        </Box>
      </Grid>
          <Grid container>
            <Grid 
              item
              xs={12}
              md={9}
            >
              <SeriesEpisodesList episodes={ episodes } />
            </Grid>
            <Grid
              item
              xs={12}
              md={1}
              sx={{
                ml: 10,
              }}
            >
              <SeriesTrendingList trendingDay={trendingDay} trendingWeek={trendingWeek}/>
            </Grid>
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

    const { data:trendingDay } = await filmsApi.get<AxiosResponse>(`/trending/tv/day?api_key=${process.env.API_KEY_TMDB}&language=es-ES`); 
    const { data:trendingWeek } = await filmsApi.get<AxiosResponse>(`trending/tv/week?api_key=${process.env.API_KEY_TMDB}&language=es-ES`);

    return {
      props: {
        serie: data,
        episodes: seasonsEpisodes,
        trendingDay: trendingDay.results,
        trendingWeek: trendingWeek.results,
      },
    };
  } catch (err) {
    console.log(err);
    throw new Error(`Error al obtener la serie:${err}`);
  }
};

export default SeriesPage;
