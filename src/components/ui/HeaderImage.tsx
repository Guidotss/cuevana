import { FC } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Box, capitalize, Chip, Link, Typography } from "@mui/material";
import { TrendingResults } from "@/interfaces/trendingResults";

interface Props {
  film: TrendingResults;
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
          "&::after": {
            background: "linear-gradient(180deg,rgba(8,15,40,0) 0,#080f28)",
            content: '""',
            position: "absolute",
            left: 0,
            bottom: 0,
            right: 0,
            height: "100%",
            pointerEvents: "none",
          },
        }}
      >
        <Image
          src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
          alt={film.title!}
          fill
          loading="eager"
          priority
          quality={100}
          style={{
            zIndex: -1,
            marginTop: "-6.5rem",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <Box
          sx={{
            display: "flex",
            "&:hover": {
              transform: "translateX(0.1rem) translateY(-0.1rem)",
              transition:'all 0.1s ease-in-out'
            },
          }}
        >
          <NextLink href={`/pelicula/${film.id}`} passHref legacyBehavior>
            <Link>
              <Typography
                variant="h2"
                color="white"
                fontWeight={700}
                fontSize="3rem"
                lineHeight="3.5rem"
                sx={{
                  mt: "-33rem",
                  ml: "2rem",
                  letterSpacing: "-0.1rem",
                }}
              >
                {film.title}
              </Typography>
            </Link>
          </NextLink>
          <Chip
            label={
              <Typography
                variant="body2"
                color="black"
                fontWeight={700}
                fontSize="13px"
              >
                Pelicula
              </Typography>
            }
            sx={{
              backgroundColor: "#edb709",
              mt: "-32rem",
              ml: "1rem",
            }}
          />
        </Box>
        <Box
          display="flex"
          sx={{
            mt: "-28rem",
            ml: "2rem",
          }}
        >
          <Typography
            variant="body2"
            color="#edb709"
            fontSize="1.225rem"
            fontWeight={300}
          >
            {film.vote_average.toFixed(1)}/
          </Typography>
          <Typography
            variant="body2"
            color="#edb709"
            fontSize="1.025rem"
            fontWeight={300}
            sx={{
              alignSelf: "flex-end",
            }}

          >
            10
          </Typography>
          <Typography
            variant="body2"
            color="#8da0bc"
            fontSize="1.025rem"
            fontWeight={300}
            sx={{
              alignSelf: "flex-end",
              ml:3
            }}
          >
            Estreno: { film.release_date }
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            mt:2,
            ml:3
          }}
        >
          <Typography
            variant="body1"
            color="#8da0bc"
            fontWeight={400}
          >
            { film.overview }
          </Typography>
        </Box>
        <NextLink
          href={`/pelicula/${film.id}`}
          passHref
          legacyBehavior
        >
          <Link
            type="button"
            sx={{
              mt: "2rem",
              ml: "2rem",
              backgroundColor: "#007aff",
              width: "10rem",
              textAlign: "center",
              borderRadius:5,
              height: "40px",
            }}
          >
            <Typography
              variant="body1"
              color="white"
              fontWeight={500}
              sx={{
                mt:1
              }}
            >
              Ver Película
            </Typography>
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};