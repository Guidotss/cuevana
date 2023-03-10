import { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Series } from "@/interfaces/series";
import { Box, Link, Typography } from "@mui/material";
import { PlayCircleOutlineOutlined } from "@mui/icons-material";
import HoverSeriesInfo from './HoverSeriesInfo';


interface Props {
  serie: Series;
}

export const SeriesCard: FC<Props> = ({ serie }) => {
  
  const [ id, setId ] = useState<number>(0);
  const router = useRouter();
  
  const navigateToSerie = () => {
    router.push(`/serie/${serie.id}`);
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
            borderRadius: 10,
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
