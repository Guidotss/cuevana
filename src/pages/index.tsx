import { FilmsLayout } from "@/components/layouts/FilmsLayout";
import { HomeDataCard, InfoCard } from "@/components/ui";
import { Box, Button, Link, Typography } from "@mui/material";
import Image from "next/image";
import { FormFilms } from '../components/ui/FormFilms';
import NextLink from 'next/link';




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
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center" 
          flexDirection="column"

        >
          <Typography 
            component="h4"
            fontSize={40}
            fontWeight={600}
            color="#8da0bc"
            sx={{mt:5}}
          >
            Preguntas frecuentes
          </Typography>
          <InfoCard
            title="¿Qué es Guivana?"
            description="Guivana es un sitio web de streaming que te permitirá ver películas y series online gratis desde cualquier dispositivo en la mejor calidad siempre que se encuentre disponible en nuestro portal. No alojamos ningun material audiovisual en nuestros servidores, utilizamos enlaces de terceros para compartirlo en portal."
          />
          <InfoCard
            title="¿Cuevana 3 está disponible?"
            description="Cuevana 3 es una versión alternativa, todas las películas de estrenos, series, documentales premiados entre otros títulos destacados agrupados en un mismo portal."
          />
          <InfoCard
            title="¿Tengo que pagar?"
            description="No, es totalmente gratuito, y aunque no alojamos ningún material, ya que no somos los propietarios, compartimos enlaces externos de otros servidores para que puedas disfrutar."
          />
          <InfoCard
            title="¿Cómo se llama Guivana ahora?"
            description="Guivana ahora se llama: Guivana.arg, es importante que recuerdes este nombre para acceder a través al sitio web correctamente."
          />
          <InfoCard
            title="Descarga y Disfruta de tus películas favoritas"
            description="Tienes la posibilidad de ver o descargar tus películas y series favoritas en varios idiomas como: Latino, castellano e inglés subtitulado al español."
          />
          <InfoCard
            title="Cuando quieras, donde quieras"
            description="Si tienes un dispositivo móvil, pc, tablet o tv, puedes disfrutar de todo el contenido sin problemas." 
          />
        </Box>
        <Box textAlign="center" sx={{mt:9}}>
            <NextLink href='https://es.wikipedia.org/wiki/Cuevana' passHref legacyBehavior>
              <Link
                sx={{
                  '&:hover':{
                    color:'#007aff'
                  }
                }}
              > 
               <Typography
                  variant="body1"
                  component="p"
               >
                  Más sobre nosotros
               </Typography>
              </Link>
            </NextLink>
        </Box>
        <Box sx={{padding:'0px 230px', mt:4}}>
          <Typography
            variant="h4"
            component="h4"
            fontWeight={600}
            color="white"
          >
            Tutoriales destacados
          </Typography>
        </Box>
      </Box>
    </FilmsLayout>
  )
}
