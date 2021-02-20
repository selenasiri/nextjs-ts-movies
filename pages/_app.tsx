import { AppProps } from 'next/app'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'


const  MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="container">
      <Component {...pageProps} />
    </div>
    

    )
}

export default MyApp

// https://www.youtube.com/watch?v=XQ5bhrr8kRg&t=2553s
// Speed Coding - Movie DB with React - From start to finish
