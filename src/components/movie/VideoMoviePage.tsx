import { Box } from "@mui/material";
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
        <Box
          display="flex"
          sx={{
            mt: -13,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              backgroundColor: "rgba(61,79,145,.5)",
              width: "1440px",
              height: "100px",
              opacity: 0.5,
              borderRadius: 0.5,
            }}
          />

          <Box
            width={1440}
            display="flex"
            justifyContent="center"
            sx={{
              backgroundColor: "#080f28",
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
          </Box>
        </Box>
      ) : (
        <Box
          display="flex"
          sx={{
            mt: -13,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              backgroundColor: "rgba(61,79,145,.5)",
              width: "1440px",
              height: "100px",
              opacity: 0.5,
              borderRadius: 0.5,
            }}
          />

          <Box
            width={1440}
            display="flex"
            justifyContent="center"
            sx={{
              backgroundColor: "#080f28",
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
          </Box>
        </Box>
      )}
    </>
  );
};