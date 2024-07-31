import React from 'react'
import Head from 'next/head'

import Header from '@/components/header'
import Footer from '@/components/footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        {/* <title>CEC Construction Corporation - Where quality, safety, and cost efficiency meet</title> */}
        <meta name="description" content="CEC Construction Corporation is dedicated in attaining customer satisfaction by providing quality services in general engineering works, rehabilitation of retrofitting, and construction of reinforced concrete and steel structures." />
        <meta property="og:title" content="CEC Construction Corporation - Where quality, safety, and cost efficiency meet" />
        <meta
          property="og:description"
          content="CEC Construction Corporation is dedicated in attaining customer satisfaction by providing quality services in general engineering works, rehabilitation of retrofitting, and construction of reinforced concrete and steel structures."
        />
        <meta name="google-site-verification" content="1a8x83lQcbtkOBpD4T0NfTN-ufk4P2eRbzwt1U1LVUI" />
        <meta
          property="og:image"
          content="https://www.cec.com.ph/static/images/logo-no-bg.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/static/images/favicon.ico" type="image/x-icon" />

        
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZS3JDMF40W"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-ZS3JDMF40W');
        </script>
          
     
      </Head>
      <main id="main">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
