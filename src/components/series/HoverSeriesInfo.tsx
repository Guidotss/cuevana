import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { useSeries } from "@/hooks";
import { Series } from "@/interfaces";

interface Props {
  serie: Series;
  serieId: number;
}

const HoverSeriesInfo: FC<Props> = ({ serie, serieId }) => {
  const { serie: serieInfo } = useSeries(serieId);

  if (!serie) return null;

  return (
    <Box>
      <Box
        display="flex"
        sx={{
          position: "absolute",
          backgroundColor: "#080f28",
          width: "380px",
          height: "200px",
          borderRadius: "10px",
          mt: "-300px",
          ml: 10,
          zIndex: 99,
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            ml: 2,
            mt: 3,
          }}
        >
          <Typography
            color="white"
            fontSize={15}
            fontWeight="bold"
            alignSelf="flex-start"
          >
            {serie.name}
          </Typography>
          <Box display="flex" alignItems="center">
            <Box>
              <Typography color="#4f6b95" alignSelf="flex-start">
                {`${serie.first_air_date}`.slice(0, 4)}
              </Typography>
            </Box>
            <Box
              display="flex"
              sx={{
                ml: 1,
              }}
            >
              <Typography alignSelf="flex-start" color="#edb709">
                {serie.vote_average.toFixed(1)}/
              </Typography>
              <Typography color="#edb709" fontSize={15}>
                10
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                width: "200px",
              }}
            >
              <Typography fontSize={13} textAlign="left" color="#8da0bc">
                {`${serie.overview}`.slice(0, 100) + "..."}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            sx={{
              mt: 2,
            }}
          >
            <Box display="flex" alignContent="center" alignItems="center">
              <Typography color="white" fontWeight={100}>
                Genero:
              </Typography>
              <Box
                display="flex"
                gap={1}
                sx={{
                  ml: 1,
                }}
              >
                {serieInfo?.genres.map((genre) => (
                  <Typography color="#4f6b95" fontSize={13} key={genre.id}>
                    {genre.name}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HoverSeriesInfo;
