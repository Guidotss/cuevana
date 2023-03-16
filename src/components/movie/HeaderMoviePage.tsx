import { FC } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { minTohours } from "@/utils";
import { CircularProgressWithLabel } from "@/components/ui";
import { Movie, SerieById } from "@/interfaces";

interface Props {
  movie?: Movie;
  serie?: SerieById;
}

export const HeaderMoviePage: FC<Props> = ({ movie, serie }) => {

  console.log(serie); 

  return (
    <Box display="flex">
      <Box
        sx={{
          position: "relative",
          zIndex: -1,
          height: "101vh",
          width: "100%",
          "&:after": {
            content: '""',
            position: "absolute",
            top: 250,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg,rgba(8,15,40,0) 0,#080f28)",
          },
        }}
      >
        {movie ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${
              movie?.backdrop_path === null
                ? movie?.poster_path
                : movie?.backdrop_path
            }`}
            alt={movie?.title!}
            fill
            loading="lazy"
            quality={100}
            style={{
              zIndex: -1,
              marginTop: "-6.5rem",
              objectFit: "cover",
              opacity: 0.5,
            }}
          />
        ) : (
          <Image
            src={`https://image.tmdb.org/t/p/original${
              serie?.backdrop_path === null
                ? serie?.poster_path
                : serie?.backdrop_path
            }`}
            alt={serie?.name!}
            fill
            loading="lazy"
            quality={100}
            style={{
              zIndex: -1,
              marginTop: "-6.5rem",
              objectFit: "cover",
              opacity: 0.5,
            }}
          />
        )}
        <Box
          display="flex"
          gap={4}
          sx={{
            ml: 20,
            mt: 10,
            width: "90%",
          }}
          zIndex={99}
        >
          <Box>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path || serie?.poster_path}`}
              alt={movie?.title! || serie?.name!}
              height={300}
              width={200}
              style={{
                borderRadius: 10,
              }}
            />
          </Box>
          <Box p={2}>
            <Typography
              variant="h4"
              component="h4"
              fontWeight="bold"
              color="white"
            >
              {movie?.title || serie?.name}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              color="#8da0bc"
              sx={{
                mt: 2,
              }}
            >
              {movie?.title || serie?.name}
            </Typography>
            <Box
              display="flex"
              sx={{
                mt: 2,
              }}
            >
              <CircularProgressWithLabel
                value={movie?.vote_average! * 10 || serie?.vote_average! * 10}
                sx={{
                  color: "#edb709",
                }}
              />
              <Box
                display="flex"
                sx={{
                  mt: 1,
                  ml: 1,
                }}
              >
                <Typography color="#8da0bc" variant="body1" component="p">
                  {minTohours(movie?.runtime)}
                </Typography>
                <Typography
                  color="#8da0bc"
                  fontSize={25}
                  fontWeight={200}
                  sx={{
                    ml: 1,
                    mt: -1,
                  }}
                >
                  |
                </Typography>
                <Typography
                  color="#8da0bc"
                  sx={{
                    ml: 1,
                  }}
                >
                  {serie?.first_air_date?.split("-")[0] || movie?.release_date?.split("-")[0]}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                mt: 2,
                width: "85%",
              }}
            >
              <Typography color="#8da0bc">{movie?.overview || serie?.overview}</Typography>
            </Box>
            <Box
              display="flex"
              sx={{
                mt: 3,
              }}
            >
              <Typography color="#8da0bc">Genero:</Typography>
              {
                movie
                  ? (
                    <Box display="flex" gap={1} sx={{ ml: 1 }} alignItems="center">
                      {movie?.genres.map((genre) => (
                        <Typography
                          key={genre.id}
                          color="white"
                          variant="body2"
                          component="p"
                          fontWeight={200}
                        >
                          {genre.name}
                        </Typography>
                      ))}
                    </Box>
                  )
                  :(
                    <Box display="flex" gap={1} sx={{ ml: 1 }} alignItems="center">
                    {serie?.genres.map((genre) => (
                      <Typography
                        key={genre.id}
                        color="white"
                        variant="body2"
                        component="p"
                        fontWeight={200}
                      >
                        {genre.name}
                      </Typography>
                    ))}
                  </Box>
                  )
              }
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
