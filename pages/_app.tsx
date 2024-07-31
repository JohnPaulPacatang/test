import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import Layout from '@/components/layout'

import theme from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  )
}
