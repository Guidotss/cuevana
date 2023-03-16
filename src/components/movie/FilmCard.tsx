import { FC } from 'react'; 
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { PlayCircleOutlineOutlined } from '@mui/icons-material';
import { Box, Link, Typography } from '@mui/material';
import { TrendingResults } from '@/interfaces/';

interface Props {
    movie: TrendingResults; 
}


export const FilmCard:FC<Props> = ({ movie }) => {

  const router = useRouter(); 

  const navigateToMovie = () => {
    router.push(`/peliculas/${movie.id}`);
  }

  return (
    <Box
    sx={{
      mt: 2,
      ml: 3,
    }}
  >
      <Box 
        sx={{mb:3}}
        onClick={navigateToMovie}
      >
        <Box display="flex" gap={2}>
          <Box 
            display="flex"
            flexDirection="column"
            sx={{
              width:'100%',
              '&:hover': {
                '& > div > img':{
                  opacity: 0.5
                },
                '& > div > div > a':{
                  color:'#007aff'
                },
                '& > div > div > svg':{
                  display:'block'
                }
              }
            }}
          >
            <Box display="flex">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title!}
                width={100}
                height={150}
                style={{
                  borderRadius: 5,
                }}
              />
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                
              >
                <PlayCircleOutlineOutlined
                  fontSize="large"
                  sx={{
                    color:"white",
                    ml:4.4,
                    mt:6,
                    display:"none"
                  }}
                />
              </Box>
              <Box sx={{ml:2}}>
                <NextLink 
                  href={`/peliculas/${movie.id}`} 
                  passHref
                  legacyBehavior
                  color="white"
                >
                  <Link
                    sx={{
                      '&:hover': {
                        color:'#007aff'
                      }
                    }}
                  >
                    {movie.title} 
                  </Link>
                </NextLink>
                <Box display="flex" sx={{mt:1}}>
                  <Typography
                    color="#edb709"
                  >
                    {movie.vote_average.toFixed(1)}/
                  </Typography>
                  <Typography
                    color="#edb709"
                  >
                    10
                  </Typography>
                  <Box sx={{ml:2}}>
                    <Typography
                      color="#4f6b95"
                      variant="body2"
                      component="p"
                      sx={{
                        mt: 0.3,
                      }}
                    >
                      { `${movie.release_date}`.split('-')[0] }
                    </Typography>
                  </Box>
                </Box>                    
              </Box>
            </Box>
          </Box>               
        </Box>
      </Box>
  </Box>
  )
}