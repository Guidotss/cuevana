import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import NextLink from "next/link";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  Link,
  InputAdornment,
  Input,
  IconButton,
} from "@mui/material";
import { SearchOutlined, KeyboardArrowDownOutlined, Opacity } from "@mui/icons-material";
import { FilmsMenu } from "./FilmsMenu";
import { GenreMenu } from './GenreMenu';
import { SeriesMenu } from "./SeriesMenu";

export const Navbar = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({
    isMouseFilmsEnter: false,
    isMouseGenreEnter: false,
    isMouseSeriesEnter: false,
  });

  const router = useRouter();

  return (
    <AppBar> 
      <Toolbar>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image
            src="/letter.webp"
            alt="logo"
            width={60}
            height={60}
            style={{
              marginLeft: 10,
              marginTop: 6,
            }}
          />
          <NextLink href='/' passHref legacyBehavior>
            <Link sx={{display:"flex", alignItems:"center"}}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  ml: 1,
                  mt: 1,
                }}
                fontWeight={600}
              >
                Guivana
              </Typography>
              <Typography
                variant="h3"
                component="h3"
                fontWeight={600}
                sx={{
                  ml: 1,
                  mt: 1,
                  color: "#007aff",
                }}
              >
                3
              </Typography>
            </Link>
          </NextLink>
        </Box>

        <Box display="flex" gap={5} sx={{ ml: 5, mt: 2 }}>
          <NextLink href="/inicio" passHref legacyBehavior>
            <Link
              sx={{
                "&:hover": {
                  color: "#007aff",
                },
              }}
            >
              <Typography
                variant="h6"
                component="h6"
                fontWeight={400}
                fontSize={15}
              >
                Inicio
              </Typography>
            </Link>
          </NextLink>
          <Box 
            onMouseEnter={() => setIsMouseEnter({isMouseSeriesEnter:false,isMouseFilmsEnter:true, isMouseGenreEnter: false})}
            onMouseLeave={() => setIsMouseEnter({...isMouseEnter,isMouseFilmsEnter:false})}
        >
            <NextLink href="/peliculas" passHref legacyBehavior>
                <Link
                sx={{
                    "&:hover": {
                    color: "#007aff",
                    },
                }}
                >
                <Box display="flex">
                    <Typography
                    variant="h6"
                    component="h6"
                    fontWeight={400}
                    fontSize={15}
                    >
                    Peliculas
                    </Typography>
                    <IconButton>
                    <KeyboardArrowDownOutlined
                        fontSize="small"
                        sx={{
                        color: "blue",
                        mt: "-5px",
                        ml: "-8px",
                        mr: "-5px",
                        }}
                    />
                    </IconButton>
                </Box>
                </Link>
            </NextLink>
            <FilmsMenu isOpen={isMouseEnter.isMouseFilmsEnter} />
          </Box>
          <Box
            onMouseEnter={() => setIsMouseEnter({ isMouseSeriesEnter:false,isMouseFilmsEnter:false, isMouseGenreEnter: true })}
            onMouseLeave={() => setIsMouseEnter({ ...isMouseEnter, isMouseGenreEnter: false })}
          >
            <NextLink href={`${router.asPath}`} passHref legacyBehavior>
                <Link
                sx={{
                    "&:hover": {
                    color: "#007aff",
                    },
                }}
                >
                <Box display="flex">
                    <Typography
                    variant="h6"
                    component="h6"
                    fontWeight={400}
                    fontSize={15}
                    >
                    Generos
                    </Typography>
                    <IconButton>
                    <KeyboardArrowDownOutlined
                        fontSize="small"
                        sx={{
                        color: "blue",
                        mt: "-5px",
                        ml: "-8px",
                        }}
                    />
                    </IconButton>
                </Box>
                </Link>
            </NextLink>
            <GenreMenu isOpen={isMouseEnter.isMouseGenreEnter} />
          </Box>
          <Box  
            onMouseEnter={() => setIsMouseEnter({ isMouseSeriesEnter:true,isMouseFilmsEnter:false, isMouseGenreEnter: false })}
            onMouseLeave={() => setIsMouseEnter({ ...isMouseEnter, isMouseSeriesEnter: false })}
          >
            <NextLink href="/series" passHref legacyBehavior>
              <Link
                sx={{
                  "&:hover": {
                    color: "#007aff",
                  },
                }}
              >
                <Box display="flex">
                  <Typography
                    variant="h6"
                    component="h6"
                    fontWeight={400}
                    fontSize={15}
                  >
                    Series
                  </Typography>
                  <IconButton>
                    <KeyboardArrowDownOutlined
                      fontSize="small"
                      sx={{
                        color: "blue",
                        mt: "-5px",
                        ml: "-8px",
                      }}
                    />
                  </IconButton>
                </Box>
              </Link>
            </NextLink>
            <SeriesMenu isOpen={isMouseEnter.isMouseSeriesEnter} />
          </Box>
        </Box>
        <Box flex={1} />
        <Box>
          <Input
            type="text"
            placeholder="Buscador..."
            margin="none"
            disableUnderline
            sx={{
              color: "white",
              width: 180,
              height: 40,
              backgroundColor: "rgba(8,15,40,.5)",
              borderRadius: 5,
              mt: 1.5,
              border: "1px solid rgba(61,79,145,.5)",
              "& .MuiInputBase-input": {
                fontSize: 16,
                fontWeight: 200,
                paddingLeft: 3,
                "&::placeholder": {
                  color: "white",
                  fontSize: 16,
                  fontWeight: 100,
                },
              },
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <SearchOutlined
                    fontSize="medium"
                    sx={{
                      color: "#007aff",
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                    }}
                  />
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
