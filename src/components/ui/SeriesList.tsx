import { FC } from 'react'
import Image from 'next/image';
import { TrendingResults } from '@/interfaces/trendingResults';
import { Box, Grid } from '@mui/material';

interface Props {
  series: TrendingResults[];
}

export const SeriesList:FC<Props> = ({ series }) => {
    
  return (
    <Box display="flex" gap={2}>
      { series.map((serie) => (
          <Grid 
            container 
            key={serie.backdrop_path}
            xs={6}
          >
              <Grid 
                item 
                xs={2}
                sm={2}
                md={4}
                lg={3}
              >
                <Image
                    src={`https://image.tmdb.org/t/p/w500${serie.backdrop_path}`}
                    alt={serie.name!}
                    height={100}
                    width={200}
                    style={{
                      borderRadius: '6px',
                    }}
                />
              </Grid>
          </Grid>
      ))}
    </Box>
  )
}
