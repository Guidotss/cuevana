import { FC } from 'react'
import Image from 'next/image';
import { Box, Chip, Grid, Typography } from '@mui/material';
import { PlayCircleOutlineOutlined } from '@mui/icons-material';
import { Series } from '@/interfaces';




interface Props {
  series: Series[];
  isPopularSeries?: boolean;
}

export const SeriesList:FC<Props> = ({ series,isPopularSeries }) => {

  return (
    <Grid 
      container 
      display="flex" 
      gap={2}
    >
      { series.map((serie) => (
          <Grid 
            key={serie.backdrop_path}
            sx={{
              '&:hover':{
                cursor: 'pointer',
                '&':{
                  opacity: 0.5
                },
                '& > div > div':{
                  opacity: 1,
                },
                '& > div > p':{
                  color:'#007aff'
                },
                '& > div > div > svg':{
                  display:'block'
                }
              }
                
            }}
          >
            <Box>
              <Image
                  src={`https://image.tmdb.org/t/p/w500${serie.backdrop_path}`}
                  alt={serie.name!}
                  height={120}
                  width={200}
                  style={{
                    borderRadius: '6px',
                  }}
              />
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <PlayCircleOutlineOutlined
                  sx={{
                    fontSize: 100,
                    position: 'absolute',
                    zIndex: 1,
                    color:"white",
                    mt:-8,
                    display:'none'
                  }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="flex-end"
                sx={{
                  position: 'absolute',
                  zIndex: 1,
                  mt:-4,
                }}
              >
                <Chip
                  color="success"
                  label={serie.vote_average.toFixed(1)}
                  sx={{
                    height: 20,
                  }}
                />
                <Chip
                  color="primary"
                  label={serie.first_air_date?.slice(0, 4)}
                  sx={{
                    height: 20,
                    ml: 12,
                  }}

                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="center">
              <Typography 
                color="white"
                variant="body2"
                component="p"
                fontWeight={100}
              >
                {serie.name}
              </Typography>
            </Box>
          </Grid>
      ))}
    </Grid>
  )
}
