import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    green: {
      300: '#00DF5E',
    },
    white: {
      200: '#F9F9F9',
    },
    gray: {
      100: '#828282',
      700: '#333333',
      900: '#212121',
    },
    black: {
      900: '#171717',
    },
  },
  fonts: {
    body: '"Roboto", sans-serif',
    heading: '"Roboto", sans-serif',
  },
  styles: {
    global: {
      body: {
        color: 'gray.100',
        backgroundColor: 'black.900',
      },
    },
  },
})
