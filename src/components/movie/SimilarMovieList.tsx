import { FC } from 'react';
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from 'next/router';
import { PlayCircleOutlineOutlined } from "@mui/icons-material";
import { Box,Link } from "@mui/material";
import { TrendingResults } from '@/interfaces';


interface Props {
    similarMovies: TrendingResults[]; 
}


export const SimilarMovieList:FC<Props> = ({ similarMovies }) => {
    const router = useRouter(); 
    
    const onNavigate = ( id:number ) => {
      router.push(`/peliculas/${id}`); 
    }

  return (
    <>
      {similarMovies.map((movie) => {
        if (!movie.poster_path) return null;

        return (
          <Box
            key={movie.id}
            sx={{
              "&:hover": {
                "& div > a": {
                  color: "#007aff",
                },
                "& > div > img": {
                  opacity: 0.5,
                },
                "& div > div": {
                  opacity: 1,
                },
                "& div > svg": {
                  display: "block",
                },
              },
            }}
            onClick={() => onNavigate(movie.id)}
          >
            <Box>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title!}
                height={300}
                width={200}
                style={{
                  borderRadius: 10,
                }}
              />
              <PlayCircleOutlineOutlined
                sx={{
                  color: "white",
                  fontSize: 90,
                  position: "absolute",
                  ml: 7,
                  mt: -25,
                  display: "none",
                }}
              />
            </Box>
            <Box display="flex" justifyContent="center" width={200}>
              <NextLink
                color="white"
                href={`/peliculas/${movie.id}`}
                passHref
                legacyBehavior
              >
                <Link>{movie.title}</Link>
              </NextLink>
            </Box>
          </Box>
        );
      })}
    </>
  );
};
