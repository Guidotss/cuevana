import { FC, useContext } from "react";
import Image from "next/image";
import { Box, Chip, Grid, Typography } from "@mui/material";
import { UiContext } from "@/context/UiContext";
import { Episode } from "@/interfaces";

interface Props {
  episodes: Episode[];
}

export const SeriesEpisodesList: FC<Props> = ({ episodes }) => {

  const { season } = useContext(UiContext);
  const episodesBySeason = episodes.filter((episode) => episode.id === season);

  return (
    <Grid
      gap={2}
      display="flex"
      container
      sx={{
        ml: 10,
      }}
    >
      {episodesBySeason[0]?.episodes?.map((episode: Episode) => {
        if (!episode.still_path) return null;

        return (
          <Box 
                key={episode.id}
                sx={{
                    '&:hover':{
                        cursor:'pointer',          
                    }
                }}
            >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                    mt: 2,
                }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/original${episode.still_path}`}
                alt={episode.name}
                width={180}
                height={130}
                loading="lazy"
                quality={100}
                style={{
                  borderRadius: 5,
                }}
              />
              <Chip
                color="primary"
                sx={{
                    height: 20,
                    position: "absolute",
                    mt:12,
                    ml: 15,
                }}
                label={
                    <Typography
                        color="white"
                        variant="body2"
                        component="p"
                        fontWeight={200}
                    >
                        {episode.episode_number}
                        x
                        {episodesBySeason[0].episodes?.length}
                    </Typography>
                }
              />
            </Box>
            <Box
                width="200px"
            >
                <Typography
                    color="white"
                    variant="body2"
                    component="p"
                    fontWeight={200}
                    textAlign="center"
                >
                    {episode.name}
                </Typography>
            </Box>
          </Box>
        );
      })}
    </Grid>
  );
};
