import { useState } from 'react';
import { Box, Grid, Typography } from "@mui/material"
import { useMovies } from '@/hooks';
import { TrendingResults } from '@/interfaces';
import { FilmsInfoCard } from '@/components/movie';




export const FilmsSelector = () => {
    const [ isSelected, setIsSelected ] = useState({
        last: true,
        trendsMovies: false,
        upcoming: false
    });
    const [ url, setUrl ] = useState('movie/popular');
    const { movies } = useMovies(url,0);

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
                gap={2}
                display="flex"
                alignItems="center"
                sx={{
                    ml:5
                }}
            >
                <Typography 
                    onClick={() => {
                        setIsSelected({last:true, trendsMovies:false, upcoming:false})
                        setUrl('movie/popular')
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
        <Grid 
            container 
            sx={{
                mt:3,
            }}
        >
            {movies.map((movie:TrendingResults) => (
               <FilmsInfoCard key={movie.id} movie={movie} /> 
            ))}
        </Grid>
    </Box>
  )
}