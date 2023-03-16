import { FC, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Box, Chip, Typography } from "@mui/material";
import { HoverInfoCard } from "@/components/ui";
import { TrendingResults } from "@/interfaces";

interface Props {
  movie: TrendingResults;
}

export const FilmsInfoCard: FC<Props> = ({ movie }) => {
  const [isMouseEnter, setIsMouseEnter] = useState(true);
  const [movieInfo, setMovieInfo] = useState({
    filmId: 0,
    genre_ids: [] as number[],
  });

  const router = useRouter();

  const navigateToFilm = () => {
    router.push(`/peliculas/${movie.id}`);
  };

  const handleMouseEnter = (movie: TrendingResults) => {
    setMovieInfo({
      filmId: movie.id,
      genre_ids: movie.genre_ids,
    });
  };

  return (
    <Box
      key={movie.id}
      sx={{
        "&:hover": {
          "& > div > div": {
            display: "flex",
            "& > span": {
              display: "none",
            },
          },
          "& > div > div > div ": {
            diplsay: "block",
          },
          "& > div > img": {
            opacity: 0.3,
          },
        },
        mb: 3,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onMouseEnter={() => handleMouseEnter(movie)}
        onClick={navigateToFilm}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title!}
          width={190}
          height={300}
          style={{
            borderRadius: 9,
          }}
        />
        <Chip
          label={`${movie.release_date}`.split("-")[0]}
          color="primary"
          sx={{
            position: "absolute",
            mt: 34,
            ml: -7,
            height: 20,
          }}
        />
        <Box display="none">
          <HoverInfoCard movieInfo={movieInfo} />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          width: 230,
        }}
      >
        <Typography color="white" variant="body2" fontWeight={300}>
          {movie.title}
        </Typography>
      </Box>
    </Box>
  );
};
