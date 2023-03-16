import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { PlayCircleOutlineOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { TrendingResults } from "@/interfaces";

interface Props {
  anothersMovies: TrendingResults[];
}

export const AnotherMovieList: FC<Props> = ({ anothersMovies }) => {
  const router = useRouter();

  const onNavigate = (id: number) => {
    router.push(`/peliculas/${id}`);
  };

  return (
    <Box>
      {anothersMovies.map((movie) => (
        <Box
          display="flex"
          key={movie.id}
          sx={{
            mt: 2,
            "&:hover": {
              "& div > a": {
                color: "#007aff",
              },
              "& > div > img": {
                opacity: 0.5,
              },
              "& > div > svg": {
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
              height={150}
              width={90}
              style={{
                borderRadius: 10,
              }}
            />
            <PlayCircleOutlineOutlined
              sx={{
                color: "white",
                position: "absolute",
                ml: 3.2,
                mt: -12,
                fontSize: 40,
                display: "none",
              }}
            />
          </Box>
          <Box sx={{ ml: 2, mt: 1 }}>
            <NextLink
              color="white"
              href={`/peliculas/${movie.id}`}
              passHref
              legacyBehavior
            >
              <Link>{movie.title}</Link>
            </NextLink>
            <Box display="flex" sx={{ mt: 1 }}>
              <Typography
                color="#edb709"
                variant="body1"
                component="p"
                fontWeight={200}
              >
                {movie.vote_average.toFixed(1)}/
              </Typography>
              <Typography
                color="#edb709"
                variant="body2"
                component="p"
                fontWeight={200}
                alignSelf="center"
              >
                10
              </Typography>
              <Typography color="#8da0bc" sx={{ ml: 1 }}>
                {movie.release_date}
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 1,
                width: "95%",
              }}
            >
              <Typography
                color="#8da0bc"
                variant="body1"
                component="p"
                fontWeight={200}
              >
                {movie.overview}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
