import { Box, Typography } from "@mui/material";
import { FC } from "react"
import { useSeries } from '../../hooks/useSeries';


interface Props {
  serieId:number; 
}

const HoverSeriesInfo:FC<Props> = ({ serieId }) => {

  const { serie } = useSeries(serieId); 


  if(!serie) return null;
  
  console.log(serie); 

  return (
    <Box> 
      <Box
        display="flex"
        sx={{
          position: "absolute",          
          backgroundColor: "#080f28",
          width: "380px",
          height: "200px",
          borderRadius: "10px",
          mt:'-300px',
          ml:10,
          zIndex:99,
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            ml:2,
            mt:3
          }}
        >
          <Typography
            color="white"
            fontSize={15}
            fontWeight="bold"
            alignSelf="flex-start"
          >
            {serie.name}
          </Typography>
          <Box 
            display="flex"
            alignItems="center"
          >
            <Box>
              <Typography
                color="#4f6b95"
                alignSelf="flex-start"
              >
                { `${serie.first_air_date}`.slice(0,4) }
              </Typography>

            </Box>
            <Box
              display="flex"
              sx={{
                ml:1
              }}
            >
              <Typography
                alignSelf="flex-start"
                color="#edb709"
              >
                { serie.vote_average.toFixed(1) }/
              </Typography>
              <Typography
                color="#edb709"
                fontSize={15}
              >
                10
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                width: "200px",
              }}
            >
                <Typography
                  fontSize={13}
                  textAlign="left"
                  color="#8da0bc"
                >
                  { `${serie.overview}`.slice(0, 100) + '...' }
                </Typography>
            </Box>
          </Box>
          <Box 
            display="flex"
            sx={{
              mt:2
            }}
          >
            <Box>
              <Typography
                color="white"
                fontWeight={100}
              >
                Genero:
              </Typography>
            </Box>
            <Box>
              <Box display="flex">
                {serie.genres.map((genre,index) => (
                  <Box 
                    key={genre.id}
                    display="flex"
                    sx={{
                      ml:1,
                      mt:0.4
                    }}
                  >
                    <Typography
                      color="#8da0bc"
                      fontSize={13}
                    >
                      {genre.name},
                    </Typography> 
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}



export default HoverSeriesInfo