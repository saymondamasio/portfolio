import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import 'swiper/css'
import 'swiper/css/bundle'
import '../styles/slider-swiper.scss'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
