import NextLink from "next/link";
import Image from "next/image";
import { Box, Grid, Link, Typography } from "@mui/material";
import { useState } from "react";
import { useMovies } from "@/hooks";
import { TrendingResults } from "../../interfaces/trendingResults";
import { PlayCircleOutlineOutlined } from "@mui/icons-material";

export const FilmsTrendingList = () => {
  const [url, setUrl] = useState("trending/movie/day");
  const [timeWindow, setTimeWindow] = useState({
    day: true,
    week: false,
  });

  const { movies } = useMovies(url, 0);
  const mostPopularMovies = movies
    .filter((movie) => movie.vote_average >= 7.2)
    .splice(0, 5);

  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Box
          display="flex"
          justifyContent="space-evenly"
          gap={4}
          sx={{
            mt: 2,
          }}
        >
          <Box
            onClick={() =>{setTimeWindow({ day: true, week: false }); setUrl("trending/movie/day")}}
            sx={{
              borderBottom: `${timeWindow.day ? "3px solid #edb709" : "none"}`,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <Typography
              color="white"
              width={100}
              display="flex"
              justifyContent="center"
              sx={{
                color: `${timeWindow.day ? "white" : "#4f6b95"}`,
              }}
            >
              Día
            </Typography>
          </Box>
          <Box
            onClick={() =>{setTimeWindow({ day: false, week: true }); setUrl("trending/movie/week")}}
            sx={{
              borderBottom: `${timeWindow.week ? "3px solid #edb709" : "none"}`,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <Typography
              color="white"
              width={100}
              display="flex"
              justifyContent="center"
              sx={{
                color: `${timeWindow.week ? "white" : "#4f6b95"}`,
              }}
            >
              Semana
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          mt: 2,
          ml: 3,
        }}
      >
        {mostPopularMovies.map((movie: TrendingResults) => (
          <Box key={movie.id} sx={{mb:3}}>
            <Box display="flex" gap={2}>
              <Box 
                display="flex"
                flexDirection="column"
                sx={{
                  width:'100%',
                  '&:hover': {
                    '& > div > img':{
                      opacity: 0.5
                    },
                    '& > div > div > a':{
                      color:'#007aff'
                    },
                    '& > div > div > svg':{
                      display:'block'
                    }
                  }
                }}
              >
                <Box display="flex">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title!}
                    width={100}
                    height={150}
                    style={{
                      borderRadius: 5,
                    }}
                  />
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    position="absolute"
                    
                  >
                    <PlayCircleOutlineOutlined
                      fontSize="large"
                      sx={{
                        color:"white",
                        ml:4.4,
                        mt:6,
                        display:"none"
                      }}
                    />
                  </Box>
                  <Box sx={{ml:2}}>
                    <NextLink 
                      href="/peliculas/name" 
                      passHref
                      legacyBehavior
                      color="white"
                    >
                      <Link
                        sx={{
                          '&:hover': {
                            color:'#007aff'
                          }
                        }}
                      >
                        {movie.title} 
                      </Link>
                    </NextLink>
                    <Box display="flex" sx={{mt:1}}>
                      <Typography
                        color="#edb709"
                      >
                        {movie.vote_average.toFixed(1)}/
                      </Typography>
                      <Typography
                        color="#edb709"
                      >
                        10
                      </Typography>
                      <Box sx={{ml:2}}>
                        <Typography
                          color="#4f6b95"
                          variant="body2"
                          component="p"
                          sx={{
                            mt: 0.3,
                          }}
                        >
                          { `${movie.release_date}`.split('-')[0] }
                        </Typography>
                      </Box>
                    </Box>                    
                  </Box>
                </Box>
              </Box>               
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
