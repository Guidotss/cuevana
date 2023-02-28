import { createTheme } from "@mui/material"


export const defaultTheme = createTheme({
    components: {
        MuiLink: {
            defaultProps: {
                underline: "none",
                color: "white",
            }
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                position: "static",
            },
            styleOverrides: {
                root: {
                    backgroundColor: "inherit",
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                variant: "outlined",
                size: "small",
            },
            styleOverrides: {
                root: {

                }
            }


        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    margin: '15px 165px'
                }
            }
        }
    }

})