import Image from "next/image"
import NextLink from "next/link";
import { AppBar, Box, Typography,Toolbar, Link,Input } from '@mui/material';



export const Navbar = () => {
  return (
      <AppBar>
        <Toolbar>
            <Box display="flex" alignItems="center">
                <Image 
                    src="/letter.webp" 
                    alt="logo" 
                    width={60} 
                    height={60} 
                    style={{
                        marginLeft:10, 
                        marginTop:6
                    }}
                />
                <Typography 
                    variant="h3" 
                    component="h3" 
                    sx={{
                        ml:1, 
                        mt:1
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
                        ml:1,
                        mt:1,
                        color:'#6498e6'
                    }}
                >
                    3
                </Typography>
            </Box>
            <Box flex={1}/>
            <NextLink href='/' passHref legacyBehavior>
                <Link>
                    <Typography 
                        variant="h6" 
                        component="h6" 
                        fontWeight={200}
                    >
                        Inicio
                    </Typography>
                </Link>
            </NextLink>
            <Box flex={1}/>
            <Input
                type="text"
                placeholder="Buscador..."
                
                sx={{
                    color:'white',
                    width: 200, 
                    height: 40, 
                    backgroundColor: '#1e2747', 
                    borderRadius: 5,
                    border: "1px solid rgba(61,79,145,.5)",
                    '& .Mui-focused':{
                        borderRadius:5,
                        border: "1px solid rgba(61,79,145,.5)",
                    }
                }}
                
            />
        </Toolbar>
        
    </AppBar>
  )
}

