import Head from "next/head";
import { FC } from "react"
import { Footer, Navbar } from "@/components/ui";
import styles from '@/styles/FilmsLayout.module.css';
import { Box } from "@mui/material";
import { useRouter } from 'next/router';

interface Props {
    children: React.ReactNode; 
    title:string; 
    pageDescription:string; 
    imageFullUrl?:string;
}

export const FilmsLayout:FC<Props> = ({ children,title,pageDescription,imageFullUrl }) => {

    const router = useRouter(); 

  return (
    <Box>
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ pageDescription }/>
            <meta name="og:title" content={ title } />
            <meta name="og:description" content={ pageDescription } />
            {
                imageFullUrl && <meta name="og:image" content={ imageFullUrl } />
            }
            <meta name="author" content="Guido Olguin" />
        </Head>

        <nav
            style={{
                background: "linear-gradient(180deg,#141a32 1%,rgba(20,26,50,0))",
                backgroundColor:`${(router.asPath === '/inicio' || router.asPath === '/' || router.asPath === `/peliculas/${router.query.id}`) || router.asPath === `/series/${router.query.id}` ? 'transparen' : '#141a32'}`, 
            }}
        >
            <Navbar/>
        </nav>

        <main>
            { children }
        </main>

        <footer className={styles.layout}>
            <Footer/>
        </footer>
    </Box>
  )
}
