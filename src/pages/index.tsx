import { FilmsLayout } from "@/components/layouts/FilmsLayout";
import { HomeDataCard } from "@/components/ui";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { FormFilms } from '../components/ui/FormFilms';




export default function Home() {
  return (
    <FilmsLayout title="Home - Guivana" pageDescription="Home - Guivana">
      <Box sx={{mt:10}}>
        <Box 
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
         
          <Image
            src="/letter.webp"
            alt="logo"
            width={70}
            height={70}
          />
          <Typography 
            variant="h1" 
            component="h1" 
            fontWeight={600} 
            sx={{color:'white',ml:1}} 
            fontSize={80}
          >
            Guivana
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            fontWeight={600}
            sx={{color:'#007aff',ml:1}}
          >
            3
          </Typography>
         
        </Box>
        <Box 
          display="flex" 
          alignItems="center"   
          flexDirection="column"               
        >
          <FormFilms/>
          <Button
            
            sx={{
              backgroundColor:'#007aff',
              borderRadius:10,
              mt:5,
              height:60,
              width:220,
              '&:hover':{
                backgroundColor:'#007aff',
              }
            }}
          >
            <Typography
              variant="h3"
              component="h3"
              fontWeight={600}
              fontSize={16}
              color="white"
            >
              Entrar en Guivana
            </Typography>
          </Button>
        </Box>
        <Box 
          display="flex"
          justifyContent="center"
          sx={{mt:7}}
        >
          <HomeDataCard/>
        </Box>
      </Box>
    </FilmsLayout>
  )
}
