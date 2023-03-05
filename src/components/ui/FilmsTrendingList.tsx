import NextLink from "next/link";
import Image from "next/image";
import { Box, Grid, Link, Typography } from "@mui/material";
import { useState } from "react";
import { useMovies } from "@/hooks";
import { TrendingResults } from "../../interfaces/trendingResults";
import { PlayCircleOutlineOutlined } from "@mui/icons-material";
import { FilmCard } from '../movie/FilmCard';

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
      {mostPopularMovies.map((movie: TrendingResults) => (
        <FilmCard key={movie.id} movie={movie} />
      ))}
    </Box>
  );
};
