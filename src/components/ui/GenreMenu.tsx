import NextLink from 'next/link';
import { Box, Grid, Link, List, Typography } from "@mui/material";
import { FC } from "react"

interface Props {
    isOpen: boolean;
}

const genreList = ['Acción', 'Aventura', 'Animación', 'Ciencia Ficción', 'Crimen', 'Drama', 'Familia', 'Fantasía',  'Misterio', 'Romance', 'Suspenso', 'Terror'];

export const GenreMenu:FC<Props> = ({ isOpen }) => {
  return (
    
    <Box sx={{mt:'-35px'}}>
        {
            isOpen && (
                <Grid 
                    container
                    className="bounce-in"
                    sx={{
                      backgroundColor: "#1e2747",
                      position: "absolute",
                      mt: 4,
                      borderRadius: 1,
                      width: '350px',
                      boxShadow: 3,
                      zIndex: 1,
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "inherit",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    }}
                >
                    {
                        genreList.map((genre, index) => (
                            <Grid 
                                item 
                                xs={6} 
                                sm={6} 
                                md={6} 
                                key={index} 
                                sx={{
                                    mt:1,
                                    borderRadius: 2,
                                    padding:1,
                                    '&:hover':{
                                        backgroundColor: "#080f28",
                                    }

                                }}
                            >
                                <Box 
                                    sx={{
                                        '&:hover':{
                                            backgroundColor: "#080f28",
                                        }
                                    }}
                                >
                                    <NextLink href={`genero/${genre}`} passHref legacyBehavior>
                                        <Link
                                            sx={{
                                                "&:hover": {
                                                    color: "#007aff",
                                                },
                                            }}
                                        >
                                            <Typography>
                                                { genre }
                                            </Typography>
                                        </Link>
                                    </NextLink>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            )
        }
        
    </Box>
  )
}