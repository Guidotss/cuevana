import { useForm, SubmitHandler } from 'react-hook-form';
import { IconButton, Input, InputAdornment } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';



type Input = {
    title:string;
}

export const FormFilms = () => {

    const { register, handleSubmit, watch, formState:{ errors } } = useForm<Input>();    

    return (
        <form>
            <Input
                type="text"
                placeholder="Buscar peliculas y series..."
                disableUnderline
                sx={{
                    backgroundColor:'#1e2747',
                    width:600,
                    mt:2,
                    borderRadius:10,
                    height:60,
                    '& .MuiInputBase-input':{
                        color:'#8da0bc',
                        padding:3,
                        fontSize:18,
                        fontWeight:300,
                        '&::placeholder':{
                            color:'white',
                            fontSize:18,
                            padding:2
                        }
                    }

                }}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            sx={{
                                backgroundColor:'#0f1323',
                                mr:0.5,
                                '&:hover':{
                                    backgroundColor:'#0f1323',
                                }
                            }}
                        >
                            <SearchOutlined
                                fontSize='large'
                                sx={{
                                    color:'white',
                                }}
                            />
                        </IconButton>
                    </InputAdornment>
                }
            />    
        </form>
    )
}