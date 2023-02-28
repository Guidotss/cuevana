import NextLink from 'next/link';
import Image from "next/image";
import { Box, collapseClasses, Link, Typography } from "@mui/material";
import { FC } from "react";
import { FilmsResults } from "../../interfaces/filmsResults";

interface Props {
  film: FilmsResults;
}

export const HeaderImage: FC<Props> = ({ film }) => {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{
          mt:'-100px',
          width: "100%",
          height: "600px",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${film.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          zIndex: -1,
          '&::after':{
            content: '""',
            position: "absolute",
            top: '60vh',
            left: 0,
            width: "100%",
            height: "100px",
            background: "linear-gradient(180deg,rgba(20,26,50,0) 0%,#141a32 100%)",
          }
        }}
      >
      </Box>
    </Box>
  );
};
