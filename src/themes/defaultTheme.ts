import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        underline: "none",
        color: "white",
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: "static",
      },
      styleOverrides: {
        root: {
          backgroundColor: "inherit",
          zIndex: 1,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          margin: "15px 30px ",
          display: "flex",
          justifyContent: "space-between",
        },
      },
    },
  },
});
