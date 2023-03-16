import { Grid } from '@mui/material';
import { FC } from 'react';
import { Series } from '@/interfaces';
import { SeriesCard } from './SeriesCard';

interface Props {
    series: Series[]
}

export const SeriesPageList:FC<Props> = ({ series }) => {
  return (
    <Grid 
        container
        gap={3}
    >
        {series.map(serie => (
            <SeriesCard key={serie.id} serie={serie} />
        ))}
    </Grid>
  )
}