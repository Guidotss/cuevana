import { GetServerSideProps,NextPage } from 'next';
import { filmsApi } from "@/api";
import { SerieById } from "@/interfaces";
import { Box } from '@mui/material';
import { FilmsLayout } from '../../components/layouts/FilmsLayout';
import { HeaderMoviePage } from '@/components/movie';


interface Props {
    serie:SerieById;
}



const SeriesPage:NextPage<Props> = ({ serie }) => {
    return (
        <FilmsLayout title={`Ver ${ serie.name } 2023 Online gratis - Guivana`} pageDescription={serie.overview}>
            <Box>
                <HeaderMoviePage serie={serie} />
            </Box>
        </FilmsLayout>
    )
}





export const getServerSideProps:GetServerSideProps = async(ctx) => {

    const { id } = ctx.params as {id:string}

    try{

        const { data } = await filmsApi.get<SerieById>(`tv/${id}?api_key=${process.env.API_KEY_TMDB}&language=es-ES`); 
        if(!data){
            return {
                notFound: true
            }
        }
            
        

        return {
            props:{
                serie: data
            }
        }

    }catch(err){
        console.log(err); 
        throw new Error(`Error al obtener la serie:${err}`);
    } 
}


export default SeriesPage   