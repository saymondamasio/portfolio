import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    green: {
      300: '#00DF5E',
    },
    gray: {
      50: '#F9F9F9',
      100: '#828282',
      700: '#333333',
      900: '#212121',
    },
    black: '#171717',
  },
  fonts: {
    body: 'DM Sans, sans-serif',
    heading: 'DM Sans, sans-serif',
  },
  styles: {
    global: {
      body: {
        color: 'gray.50',
        backgroundColor: 'black',
      },
    },
  },
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: 'green.300',
        },
      },
    },
  },
})
