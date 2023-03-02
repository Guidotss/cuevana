import { useState, useEffect } from 'react';
import Image from "next/image";
import { Box, Chip, Grid, Typography } from "@mui/material"
import { PlayCircleOutlineOutlined } from '@mui/icons-material';
import { useMovies } from '@/hooks/useMovies';





export const FilmsSelector = () => {

    const [ isSelected, setIsSelected ] = useState({
        last: true,
        trendsMovies: false,
        upcoming: false
    });
    const [url, setUrl] = useState('movie/top_rated')    
    const { movies } = useMovies(url);

   

  return (
    <Box>
        <Box display="flex">
            <Box>
                <Typography
                    color="white"
                    variant="h4"
                    component="h4"
                    fontWeight={500}
                >
                    Películas Online
                </Typography>
            </Box>
            <Box
                display="flex"
                alignItems="center"
                sx={{
                    ml:5
                }}
                gap={2}
            >
                <Typography 
                    onClick={() => {
                        setIsSelected({last:true, trendsMovies:false, upcoming:false})
                        setUrl('movie/top_rated')
                    }}
                    variant="h5"
                    component="h5"
                    sx={{
                        borderBottom:`${ isSelected.last ? "2px solid #edb709" : "none" }`,
                        color:`${ isSelected.last ? "white" : "#4f6b95" }`,
                        fontWeight:`${ isSelected.last ? 500 : 200 }`,
                        '&:hover': {
                            cursor: "pointer",
                        }
                    }}
                >
                    Ultimas
                </Typography>
                <Typography
                    onClick={() => {
                        setIsSelected({last:false, trendsMovies:true, upcoming:false})
                        setUrl('trending/movie/day')
                    }}
                    variant="h5"
                    component="h5"
                    color="white"
                    fontWeight={500}
                    sx={{
                        borderBottom:`${ isSelected.trendsMovies ? "2px solid #edb709" : "none" }`,
                        color:`${ isSelected.trendsMovies ? "white" : "#4f6b95" }`,
                        fontWeight:`${ isSelected.trendsMovies ? 500 : 200 }`,
                        '&:hover': {
                            cursor: "pointer",
                        }
                    }}
                >
                    Tendencias
                </Typography>
                <Typography
                    onClick={() => {
                        setIsSelected({last:false, trendsMovies:false, upcoming:true})
                        setUrl('movie/upcoming')
                    }}
                    color="white"
                    variant="h5"
                    component="h5"
                    fontWeight={500}
                    sx={{
                        borderBottom:`${ isSelected.upcoming ? "2px solid #edb709" : "none" }`,
                        color:`${ isSelected.upcoming ? "white" : "#4f6b95" }`,
                        fontWeight:`${ isSelected.upcoming ? 500 : 200 }`,
                        '&:hover': {
                            cursor: "pointer",
                        }
                    }}
                >
                    Estrenos
                </Typography>
            </Box>
        </Box>
        <Grid container gap={5} sx={{mt:3}}>
            {movies.map((movie) => (
                <Grid 
                    item 
                    key={movie.id}
                    sx={{
                        '&:hover':{
                            '& > div':{
                                opacity: 0.5
                            },
                            '& > div > div':{
                                opacity: 1,
                            },
                            '& > div > div > div':{
                                opacity: 1,
                            },
                            '& > div > div > svg':{
                                display: "block",
                            }

                        }
                    }}
                >
                    <Box
                        sx={{
                            '&:hover':{
                                cursor: "pointer",
                            }
                        }}
                    >
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title!}
                            width={230}
                            height={300}
                            style={{
                                borderRadius: 4,
                            }}
                        />
                        <Chip
                            label={`${movie.release_date}`.split("-")[0]}
                            color="primary"
                            sx={{
                                position: "absolute",
                                mt:34,
                                ml:-7,
                                height: 20,
                            }}
                        />
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <PlayCircleOutlineOutlined
                                sx={{
                                    color:"white",
                                    position: "absolute",
                                    zIndex: 1,
                                    mt:-20,
                                    fontSize:90,
                                    display: "none",
                                }}
                            />
                        </Box>
                    </Box>
                    <Box
                        display= "flex"
                        justifyContent="center"
                        sx={{
                            width: 230,
                        }}
                    >
                        <Typography
                            color="white"
                            variant="body2"
                            fontWeight={300}
                        >
                            { movie.title }
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    </Box>
  )
}