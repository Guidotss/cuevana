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
          sx={{
            position: "relative",
            width: "100%",
            height: "600px",
            zIndex: -1,
            '&::after':{
              background:'linear-gradient(180deg,rgba(8,15,40,0) 0,#080f28)',
              content:"",
              position:'absolute',
              left:0,
              bottom:0,
              right:0,
              height:'100%',
              pointer-events:'none',

            }
          }}       
        >
          <Image
            src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
            alt={film.title}
            width={1909}
            height={600}
            quality={100}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              zIndex: -1,
              position: "relative",
              marginTop:'-6.5rem'
            }}
          />
      </Box>
    </Box>
            
  );
};
