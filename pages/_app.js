import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (window.WOW) {
        new WOW().init();
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
