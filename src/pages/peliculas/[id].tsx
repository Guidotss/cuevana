import { FC } from 'react'
import { GetServerSideProps} from 'next'
import Image from 'next/image'
import { filmsApi } from '@/api'
import { AxiosTrendingResponse, TrendingResults } from '@/interfaces'
import { Box, CircularProgress, CircularProgressProps, Typography } from '@mui/material';
import { FilmsLayout } from '@/components/layouts';


interface Props {
    movie: TrendingResults; 
}





function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
  ) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="#edb709"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }



const FilmPage:FC<Props> = ({ movie }) => {
    console.log(movie);

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
                        height: "600px",
                        width: "100%",
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
                        '&::before':{
                            background: "linear-gradient(180deg,rgba(8,15,40,0) 0,#080f28)",
                            content: '""',
                            position: "absolute",
                            left: 0,
                            bottom: 0,
                            right: 0,
                            height: "100%",
                            pointerEvents: "none",

                        }
                    }}
                >
                    <Image
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt={movie.title!}
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
                    <Box 
                        display="flex"
                        gap={4}
                        sx={{
                            ml:10,
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
                                    borderRadius:10
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
                            >
                                {movie.title}
                            </Typography>
                            <Box display="flex">
                                <CircularProgressWithLabel 
                                    value={movie.vote_average * 10} 
                                    sx={{
                                        color: "#edb709",
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </FilmsLayout>
    )
}










export const getServerSideProps: GetServerSideProps = async (ctx) => {
    
    const { id } = ctx.params as { id:string };

    try{
        const { data } = await filmsApi.get<AxiosTrendingResponse>(`movie/${id}?api_key=${process.env.API_KEY_TMDB}&language=es-ES`); 
        if(!data) throw new Error('No se encontro la pelicula');

        const movie = JSON.parse(JSON.stringify(data));

        return {
            props: {
                movie
            }
        }

    }catch(err){
        console.log(err);
        throw new Error(`Error al obtener la pelicula: ${err}`)
    }
}

export default FilmPage; 