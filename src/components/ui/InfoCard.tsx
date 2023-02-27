import { FC, useState } from "react";
import { Box, Card, CardActionArea, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { AddOutlined, CloseOutlined } from "@mui/icons-material";

interface Props {
    title:string; 
    description:string;
}

export const InfoCard:FC<Props> = ({ title, description }) => {

    const [ isCardOpen, setIsCardOpen ] = useState(false);

  return (  
    <Card
        sx={{width:900, backgroundColor:'#4f597f80', mt:5, ml:5, mr:5,mb:'-30px', borderRadius:'0px'}}
    >
        <CardActionArea
            onClick={() => setIsCardOpen(!isCardOpen)}
            disableTouchRipple
        >

            <CardHeader
                title={
                    <Box display="flex" justifyContent="space-between" onClick={() => setIsCardOpen(!isCardOpen)}>
                        <Typography
                            variant="h5"
                            component="h5"
                            color="#e5dfdf"
                        >
                            {title}
                        </Typography>
                        {
                            !isCardOpen  
                                ? (
                                    <AddOutlined
                                        sx={{color:'#e5dfdf'}}
                                    />
                                )
                                : (
                                    <CloseOutlined
                                        sx={{color:'#e5dfdf'}}
                                    />
                                )
                        }
                    </Box>
                }
            />
            {
                isCardOpen && (
                    <>
                        <CardContent
                            sx={{
                                backgroundColor:'#20253a',
                            }}
                        >
                            <Typography
                                variant="body1"
                                component="p"
                                color="#e5dfdf"
                            >
                                { description }
                            </Typography>
                        </CardContent>
                    </>


                )
            }
        </CardActionArea>

    </Card>
  )
}