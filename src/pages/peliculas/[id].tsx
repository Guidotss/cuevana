import { FC } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import NextLink from 'next/link'
import { filmsApi } from '@/api'
import { Box, Grid, Link, Typography} from '@mui/material';
import { PlayCircleOutlineOutlined } from '@mui/icons-material';
import {  Movie, TrendingResults, Video,AxiosAnotherMoviesResponse,AxiosMovieResponse,AxiosSimilarMoviesResponse,AxiosVideoResponse } from '@/interfaces'
import { FilmsLayout } from '@/components/layouts';
import { CircularProgressWithLabel, FilmsTrendingList } from '@/components/ui';
import { minTohours } from '@/utils';










interface Props {
    movie: Movie; 
    video:Video
    similarMovies: TrendingResults[];
    anothersMovies: TrendingResults[];
}



const FilmPage:FC<Props> = ({ movie,video,similarMovies,anothersMovies }) => {
    
    const router = useRouter();

    const onNavigate = ( id:number ) => {
        router.push(`/peliculas/${id}`)
    }

    return ( 
        <FilmsLayout 
            title={`Ver ${movie.title} 2023 online HD - Guivana 3`}
            pageDescription={movie.overview}
            imageFullUrl={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        >
            <Box
                display="flex"
            >
                <Box
                    sx={{
                        position: "relative",
                        zIndex: -1,
                        height: "101vh",
                        width: "100%",
                        '&:after': {
                            content: '""',
                            position: "absolute",
                            top: 250,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(180deg,rgba(8,15,40,0) 0,#080f28)",

                        }
                    }}
                >
                    <Image
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path === null ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.title!}
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
                    <Box 
                        display="flex"
                        gap={4}
                        sx={{
                            ml:20,
                            mt:10,
                            width: "90%",
                        }}
                        zIndex={99}
                    >
                        <Box>
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title!}
                                height={300}
                                width={200}
                                style={{
                                    borderRadius:10,
                                }}
                            />
                        </Box>
                        <Box
                            p={2}
                        >
                            <Typography 
                                variant="h4"
                                component="h4"
                                fontWeight="bold"
                                color="white"
                            >
                                {movie.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                component="p"
                                color="#8da0bc"
                                sx={{
                                    mt:2
                                }}
                            >
                                {movie.title}
                            </Typography>
                            <Box 
                                display="flex"
                                sx={{
                                    mt:2
                                }}
                            >
                                <CircularProgressWithLabel 
                                    value={movie.vote_average * 10} 
                                    sx={{
                                        color: "#edb709",
                                    }}
                                />
                                <Box
                                    display="flex"
                                    sx={{
                                        mt:1,
                                        ml:1
                                    }}
                                >
                                    <Typography
                                        color="#8da0bc"
                                        variant="body1"
                                        component="p"
                                    >
                                        { minTohours(movie.runtime) }
                                    </Typography>
                                    <Typography
                                        color="#8da0bc"
                                        fontSize={25}
                                        fontWeight={200}
                                        sx={{
                                            ml:1,
                                            mt:-1
                                        }}
                                    >
                                        |
                                    </Typography>
                                    <Typography
                                        color="#8da0bc"
                                        sx={{
                                            ml:1
                                        }}
                                    >
                                        {`${movie.release_date}`.split('-')[0]}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    mt:2,
                                    width: "85%",
                                }}
                            >   
                                <Typography
                                    color="#8da0bc"
                                >
                                    {movie.overview}
                                </Typography>
                            </Box>
                            <Box
                                display="flex"
                                sx={{
                                    mt:3,
                                }}
                            >
                                <Typography
                                    color="#8da0bc"
                                >
                                    Genero:
                                </Typography>
                                <Box
                                    display="flex"    
                                    gap={1}
                                    sx={{ml:1}}
                                    alignItems="center"
                                >
                                    {movie.genres.map((genre) => (
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
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
                {
                    video
                    ?(
                        <Box

                            display="flex"
                            justifyContent="center"
                            
                            sx={{
                                mt: -13,
                            }}
                        >
                            <Box
                                display="flex"
                                justifyContent="center"
                                sx={{
                                    position: "absolute",
                                    backgroundColor: "rgba(61,79,145,.5)",
                                    width: "1440px",
                                    height: "100px",
                                    opacity: 0.5,
                                    borderRadius:0.5
                                    
                                }}
                            />
                            
                            <Box
                                sx={{
                                    backgroundColor: "#080f28",
                                }}
                            >    
                                <iframe
                                    width="1440px"
                                    height="1080"
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    title={movie.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{
                                        border:'none',
                                        borderRadius: 4
                                    }}
                                    
                                />
                            </Box>
                        </Box>  
                    )
                    :(
                        <Box

                            display="flex"
                            justifyContent="center"
                            
                            sx={{
                                mt: -13,
                            }}
                        >
                            <Box
                                display="flex"
                                justifyContent="center"
                                sx={{
                                    position: "absolute",
                                    backgroundColor: "rgba(61,79,145,.5)",
                                    width: "1440px",
                                    height: "100px",
                                    opacity: 0.5,
                                    borderRadius:0.5
                                    
                                }}
                            />
                            
                            <Box
                                sx={{
                                    backgroundColor: "#080f28",
                                }}
                            >    
                                <iframe
                                    width="1440px"
                                    height="1080"
                                    src={"https://www.youtube.com/embed/MN1wPmnNJxo"}
                                    title={movie.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{
                                        border:'none',
                                        borderRadius: 4
                                    }}
                                    
                                />
                            </Box>
                        </Box>  
                    )
                }
            <Grid 
                container
                sx={{
                    p:3,
                    ml:25,
                    mt:10
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={8}
                >
                    <Box>
                        <Typography
                            color="white"
                            variant="h4"
                            component="h4"
                            fontWeight="bold"
                        >
                            Peliculas similares a { movie.title } 
                        </Typography>
                    </Box>
                    <Grid
                        container
                        display="flex"
                        gap={2}
                        sx={{
                            mt:5
                        }}
                    >
                        {
                            similarMovies.map((movie) =>{
                                if(!movie.poster_path) return null;

                                return(
                                    <Box 
                                        key={ movie.id }
                                        sx={{
                                            '&:hover':{
                                                '& div > a':{
                                                    color:"#007aff",
                                                },
                                                '& > div > img':{
                                                    opacity:0.5,
                                                },
                                                '& div > div':{
                                                    opacity:1,
                                                },
                                                '& div > svg':{
                                                    display:"block",
                                                }
                                            }
                                        }}
                                        onClick={() => onNavigate(movie.id)}
                                    >
                                        <Box>
                                            <Image
                                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                alt={movie.title!}
                                                height={300}
                                                width={200}
                                                style={{
                                                    borderRadius:10,
                                                }}
                                            />
                                            <PlayCircleOutlineOutlined
                                                sx={{
                                                    color:"white",
                                                    fontSize:90,
                                                    position:"absolute",
                                                    ml:7,
                                                    mt:-25,
                                                    display:"none",
                                                }}
                                            />
                                        </Box>
                                        <Box
                                            display="flex"
                                            justifyContent="center"
                                            width={200}
                                        >
                                            <NextLink
                                                color="white"
                                                href={`/peliculas/${movie.id}`}
                                                passHref
                                                legacyBehavior
                                            >
                                                <Link>
                                                    {movie.title}
                                                </Link>
                                            </NextLink>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </Grid>
                    <Box
                        sx={{
                            mt:15
                        }}
                    >
                        <Typography
                            color="white"
                            variant="h4"
                            component="h4"
                            fontWeight="bold"
                        >
                            Otras Peliculas
                        </Typography>
                    </Box>
                    <Box>
                        <Box>
                            {anothersMovies.map((movie) => (
                                <Box
                                    display="flex"
                                    key={movie.id} 
                                    sx={{
                                        mt:2,
                                        '&:hover':{
                                            '& div > a':{
                                                color:"#007aff",
                                            },
                                            '& > div > img':{
                                                opacity:0.5,
                                            },
                                            '& > div > svg':{
                                                display:"block",
                                            }

                                        }
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
                                                borderRadius:10,
                                            }}
                                        />
                                        <PlayCircleOutlineOutlined
                                            sx={{
                                                color:"white",
                                                position:"absolute",
                                                ml:3.2,
                                                mt:-12,
                                                fontSize:40,
                                                display:"none",
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ml:2, mt:1}}>
                                        <NextLink
                                            color="white"
                                            href={`/peliculas/${movie.id}`}
                                            passHref
                                            legacyBehavior
                                        >
                                            <Link>
                                                { movie.title }
                                            </Link>
                                        </NextLink>
                                        <Box
                                            display="flex"
                                            sx={{mt:1}}
                                        >
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
                                            <Typography
                                                color="#8da0bc"
                                                sx={{ml:1}}
                                            >
                                                {movie.release_date}
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                mt:1,
                                                width: '95%',
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
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={2}
                >
                    <Box>
                        <Typography
                            color="#8da0bc"
                            variant="h5"
                            component="h5"
                            fontWeight="bold"
                        >
                            Peliculas Destacadas
                        </Typography>
                    </Box>
                    <Box>
                        <FilmsTrendingList/>
                    </Box>
                </Grid>
            </Grid>
        </FilmsLayout>
    )
}










export const getServerSideProps: GetServerSideProps = async (ctx) => {
    
    const { id } = ctx.params as { id:string };

    try{
        const { data } = await filmsApi.get<AxiosMovieResponse>(`movie/${id}?api_key=${process.env.API_KEY_TMDB}&language=es-ES`); 

        if(!data) throw new Error('No se encontro la pelicula');

        const { data:video } = await filmsApi.get<AxiosVideoResponse>(`movie/${id}/videos?api_key=${process.env.API_KEY_TMDB}&language=es-ES`);
        if(video.results === null) throw new Error('No se encontro el video');
        
        const { data:similar } = await filmsApi.get<AxiosSimilarMoviesResponse>(`movie/${id}/similar?api_key=${process.env.API_KEY_TMDB}&language=es-ES&page=1`);

        const movie = JSON.parse(JSON.stringify(data)); 
        const similarMovies = JSON.parse(JSON.stringify(similar.results)).slice(0,5);
        
        const { data:anothers } = await filmsApi.get<AxiosAnotherMoviesResponse>(`movie/popular?api_key=${process.env.API_KEY_TMDB}&language=es-ES&page=1`);
        const anothersMovies = JSON.parse(JSON.stringify(anothers.results)).slice(0,5);

        const aa = await filmsApi.get(`movie/popular?api_key=${process.env.API_KEY_TMDB}&language=es-ES&page=1`);
        console.log(aa.data.results);
        
        
        
        

        return {
            props: {
                movie,
                video: video.results[0] || null,
                similarMovies:similarMovies || null,
                anothersMovies:anothersMovies || null
            }
        }

    }catch(err){
        console.log(err);
        throw new Error(`Error al obtener la pelicula: ${err}`)
    }
}

export default FilmPage; 