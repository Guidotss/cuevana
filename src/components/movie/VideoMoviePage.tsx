import { Box, Grid } from "@mui/material";
import { FC } from "react";
import { Video } from '../../interfaces/video';


interface Props {
    video:Video; 
    videoTitle:string; 
}

export const VideoMoviePage:FC<Props> = ({ video, videoTitle }) => {
  return (
    <>
      {video ? (
        <Grid container
          display="flex"
          sx={{
            mt: -13,
          }}
        >

          <Grid 
            item 
            xs={12} 
            md={12}
            width="1440px"
            display="flex"
            justifyContent="center"
            sx={{
              backgroundColor: "#080f28",
              mt:5
            }}
          >
            <iframe
              width="90%"
              height="600vh"
              src={`https://www.youtube.com/embed/${video.key}`}
              title={videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                border: "none",
                borderRadius: 4,
              }}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid container
          display="flex"
          sx={{
            mt: -13,
          }}
        >
          

          <Grid
            item 
            xs={12} 
            md={12}
            display="flex"
            justifyContent="center"
            sx={{
              backgroundColor: "#080f28",
              mt:5
            }}
          >
            <iframe
              width="90%"
              height="600vh"
              src={"https://www.youtube.com/embed/MN1wPmnNJxo"}
              title={videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                border: "none",
                borderRadius: 4,
              }}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};
