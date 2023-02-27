import NextLink from "next/link";
import Image from "next/image";
import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material"
import { FacebookOutlined } from "@mui/icons-material";

export const Footer = () => {
  return (
    <AppBar
        sx={{
            background:'linear-gradient(180deg,rgba(20,26,50,0) 0,rgba(20,26,50,.01) 1%,#141a32)',
            height:'200px',
        }}
    >
        <Toolbar>
            <Box display="flex" alignItems="center">
                <Image
                    src='/letter.webp'
                    alt='logo'
                    width={60}
                    height={60}
                />
                <NextLink href="/" passHref legacyBehavior>
                    <Link>        
                        <Typography
                            variant="h4"
                            component="h4"
                            sx={{
                                ml:1,
                                mt:1
                            }}
                            fontWeight={600}

                        >
                            Guivana
                        </Typography>
                    </Link>
                </NextLink>
            </Box>
            <Box display="flex" sx={{ml:3,mt:2}}>
                <NextLink href='https://blog.cuevana.ch/cgi-sys/defaultwebpage.cgi' passHref legacyBehavior>
                    <Link
                        sx={{
                            mr:4,
                            '&:hover':{
                                color:'#007aff'
                            }
                        }}
                    >
                        <Typography
                            variant="body1"
                            component="p"
                            fontWeight={400}
                        >
                            Blog
                        </Typography>
                    </Link>
                </NextLink>
                <NextLink href='/terminos-y-condiciones' passHref legacyBehavior>
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
                                fontWeight={400}
                            >
                                Terminos y condiciones
                            </Typography>
                        </Link>
                </NextLink>
            </Box>
            <Box flex={1} />
            <Box display="flex">
                <NextLink href="https://www.facebook.com/guidonrc.olguin" passHref legacyBehavior>
                    <Link>        
                        <FacebookOutlined
                            fontSize="large"
                        />
                    </Link>
                </NextLink>
                <NextLink href="https://twitter.com/guidolguin" passHref legacyBehavior>
                    <Link sx={{ml:4}}>
                        <Image
                            src='/twitter.webp'
                            alt='twitter'
                            width={40}
                            height={40}
                        />
                    </Link>
                </NextLink>
            </Box>
        </Toolbar>
            <Typography
                variant="body1"
                component="p"
                fontSize={11}
                sx={{
                    color:"#4f6b95",
                    textAlign:"center",
                }}
            >
                © 2007 Guivana 3 Peliculas Online, Todos los derechos reservados.
            </Typography>
    </AppBar>
  )
}