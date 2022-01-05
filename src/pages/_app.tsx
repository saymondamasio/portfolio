import { ChakraProvider, Flex } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import 'swiper/css'
import 'swiper/css/bundle'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import '../styles/slider-swiper.scss'
import { theme } from '../styles/theme'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Flex minH="100vh" as="main" direction="column">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Flex>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
