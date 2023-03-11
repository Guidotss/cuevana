import { FC, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Series } from "@/interfaces";
import { Box, Grid, Link, Typography } from "@mui/material";
import { PlayCircleOutlineOutlined } from "@mui/icons-material";



interface Props {
  trendingDay: Series[];
  trendingWeek: Series[];
}
type TimeWindow = "day" | "week";



export const SeriesTrendingList: FC<Props> = ({ trendingDay, trendingWeek }) => {
  const [timeWindow, setTimeWindow] = useState<TimeWindow>("day");

  return (
    <Grid container display="flex" justifyContent="splace-evenly" gap={8}>
      <Grid
        item
        xs={2}
        md={2}
        textAlign="center"
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={() => setTimeWindow("day")}
      >
        <Typography
          variant="body1"
          component="p"
          color="white"
          fontWeight={200}
          sx={{
            borderBottom: `${
              timeWindow === "day" ? "2px solid #edb709" : "none"
            }`,
            width: "100px",
          }}
        >
          Día
        </Typography>
      </Grid>
      <Grid
        item
        xs={2}
        md={2}
        textAlign="center"
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={() => setTimeWindow("week")}
      >
        <Typography
          variant="body1"
          component="p"
          color="white"
          fontWeight={200}
          sx={{
            borderBottom: `${
              timeWindow === "week" ? "2px solid #edb709" : "none"
            }`,
            width: "100px",
          }}
        >
          Semana
        </Typography>
      </Grid>
      <Box
        sx={{
            mt:-4
        }}
      >
        {timeWindow === "day"
          ? trendingDay.slice(0, 5).map((serie) => (
              <Box
                key={serie.id}
                display="flex"
                sx={{
                  mb: 2,
                  "&:hover": {
                    "& > div > img": {
                      opacity: 0.5,
                    },
                    "& > div > svg": {
                      display: "block",
                    },
                    '& > div > a': {
                        color: "#007aff",
                    }
                  },
                }}
              >
                <Box display="flex" justifyContent="center">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                    alt={serie.name}
                    width={80}
                    height={120}
                    style={{
                      borderRadius: 3,
                    }}
                  />
                  <PlayCircleOutlineOutlined
                    sx={{
                      color: "white",
                      alignSelf: "center",
                      position: "absolute",
                      fontSize: 50,
                      display: "none",
                    }}
                  />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  textAlign="start"
                  sx={{
                    ml: 2,
                    width: "50%",
                  }}
                >
                <NextLink
                    href={`/series/${serie.id}`}
                    passHref
                    legacyBehavior                
                  >
                    <Link
                        sx={{
                            mt:1,
                            mb:1,
                            "&:hover": {
                                color: "#007aff",
                            },
                        }}
                    >
                        {serie.name}
                    </Link>

                  </NextLink>
                  <Box display="flex">
                    <Typography
                      variant="body1"
                      component="p"
                      color="#edb709"
                      fontWeight={200}
                    >
                      {serie.vote_average.toFixed(1)}/
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="#edb709"
                      fontWeight={200}
                      alignSelf="center"
                    >
                      10
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="#8da0bc"
                      alignSelf="center"
                      sx={{
                        ml: 1,
                      }}
                    >
                      {serie.first_air_date.split("-")[0]}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))
          : trendingWeek.slice(0, 5).map((serie) => (
              <Box
                key={serie.id}
                display="flex"
                sx={{
                  mb: 2,
                  "&:hover": {
                    "& > div > img": {
                      opacity: 0.5,
                    },
                    "& > div > svg": {
                      display: "block",
                    },
                    '& > div > a': {
                        color: "#007aff"
                    }
                  },
                }}
              >
                <Box display="flex" justifyContent="center">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                    alt={serie.name}
                    width={80}
                    height={120}
                    style={{
                      borderRadius: 3,
                    }}
                  />
                  <PlayCircleOutlineOutlined
                    sx={{
                      color: "white",
                      alignSelf: "center",
                      position: "absolute",
                      fontSize: 50,
                      display: "none",
                    }}
                  />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  textAlign="start"
                  sx={{
                    ml: 2,
                    width: "50%",
                  }}
                >
                  <NextLink
                    href={`/series/${serie.id}`}
                    passHref
                    legacyBehavior
                  >
                    <Link
                        sx={{
                            mt:1,
                            mb:1,
                            "&:hover": {
                                color: "#007aff",
                            },
                        }}
                    >
                        {serie.name}
                    </Link>
                  </NextLink>
                  <Box display="flex">
                    <Typography
                      variant="body1"
                      component="p"
                      color="#edb709"
                      fontWeight={200}
                    >
                      {serie.vote_average.toFixed(1)}/
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="#edb709"
                      fontWeight={200}
                      alignSelf="center"
                    >
                      10
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="#8da0bc"
                      alignSelf="center"
                      sx={{
                        ml: 1,
                      }}
                    >
                      {serie.first_air_date.split("-")[0]}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
      </Box>
    </Grid>
  );
};
