import { createTheme } from "@mui/material"


export const defaultTheme = createTheme({
    components:{
        MuiLink:{
            defaultProps:{
                underline: "none",
                color: "white",
            }
        },
        MuiAppBar:{
            defaultProps:{
                elevation: 0,
                position: "fixed",
            },
            styleOverrides:{
                root:{
                    backgroundColor: "inherit",
                }
            }
        },
        MuiTextField:{
            defaultProps:{
                variant: "outlined",
                size: "small",
            },
            styleOverrides:{
                root:{
                    
                }
            }

            
        }
    }
    
})