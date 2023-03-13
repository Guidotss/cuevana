import { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Series } from "@/interfaces/series";
import { Box, Chip, Link, Typography } from "@mui/material";
import { PlayCircleOutlineOutlined } from "@mui/icons-material";
import HoverSeriesInfo from './HoverSeriesInfo';


interface Props {
  serie: Series;
}

export const SeriesCard: FC<Props> = ({ serie }) => {
  
  const [ id, setId ] = useState<number>(0);
  const router = useRouter();
  
  const navigateToSerie = () => {
    router.push(`/series/${serie.id}`);
  };
  


  return (
    <Box
      onClick={navigateToSerie}
      onMouseEnter={() => setId(serie.id)}
      sx={{
        "&:hover": {
          cursor: "pointer",
          "& > div > img": {
            opacity: 0.5,
          },
          "& > div > svg": {
            display: "block",
          },
          "& > div > div": {
            display: "flex",
          },
          
        },
      }}
    >
      <Box display="flex" justifyContent="center">
        <Image
          src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
          alt={serie.name}
          width={190}
          height={300}
          style={{
            borderRadius: 4,
          }}
        />
        <PlayCircleOutlineOutlined
          sx={{
            color: "white",
            position: "absolute",
            alignSelf: "center",
            fontSize: 80,
            display: "none",
          }}
        />
        <Box 
          display="flex" 
          justifyContent="space-between"
        >
          <Chip
            sx={{
              position: "absolute",
              mt: 35,
              ml: -23,
              backgroundColor: "#edb709",
              height: 15,
              width: 35,
            }}
            label={
              <Typography
                variant="body2"
                component="p"
                fontSize={11}
                fontWeight={600}
                color="black"
                sx={{
                  ml: -1,
                }}
              >
                Serie
              </Typography>
            }
          />
          <Chip
            color="primary"
            sx={{
              position: "absolute",
              mt: 35,
              ml:-5,
              height: 15,
              width: 35,
            }}
            label={
              <Typography
                variant="body2"
                component="p"
                fontSize={11}
                fontWeight={600}
                color="white"
                sx={{
                  ml: -1,
                }}
              >
                {serie.first_air_date.split("-")[0]}
              </Typography>
            }
          />
        </Box>
        <Box 
          display="none"
          sx={{
            position: "absolute",
            mt:45,
            ml:-30
          }}
        >
          <HoverSeriesInfo serieId={serie.id} serie={ serie } />
      </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          width: 200,
        }}
      >
        <Typography color="white">{serie.name}</Typography>
      </Box>
    </Box>
  );
};
