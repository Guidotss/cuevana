import { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from "@mui/material";
import { defaultTheme } from "@/themes";
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
