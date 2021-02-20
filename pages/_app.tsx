
import { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

const  MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp

// https://www.youtube.com/watch?v=XQ5bhrr8kRg&t=2553s
// Speed Coding - Movie DB with React - From start to finish