import Head from "next/head";
import { FC } from "react"
import { Footer, Navbar } from "@/components/ui";

interface Props {
    children: React.ReactNode; 
    title:string; 
    pageDescription:string; 
    imageFullUrl?:string;
}

export const FilmsLayout:FC<Props> = ({ children,title,pageDescription,imageFullUrl }) => {
  return (
    <>
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
                
            }}
        >
            <Navbar/>
        </nav>

        <main style={{
            margin:'80px auto',
            maxWidth:'1440px',
            padding:'0 30px'
        }}>
            { children }
        </main>

        <footer>
            <Footer/>
        </footer>
    </>
  )
}
