import { ComponentStyleConfig, extendTheme, theme as baseTheme } from '@chakra-ui/react'
import { Styles } from '@chakra-ui/theme-tools'

const styles: Styles = {
  global: (props) => ({
    'html, body': {
      color: 'black',
      overflowX: 'hidden',
    },
  }),
}

const fonts = {
  body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  heading:
    '"Circular", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  mono: 'Menlo, monospace',
}

const fontSizes = {
  '3xl': '1.6rem',
}

const fontWeights = {
  bold: 600,
}

const gray = {
  50: '#f9f9f9',
  100: '#f6f6f6',
  200: '#e9e9e9',
  300: '#d5d5d5',
  400: '#b0b0b0',
  500: '#838383',
  600: '#595959',
  700: '#3a3a3a',
  800: '#232323',
  900: '#1d1d1d',
}
const colors = {
  gray,
  brand: {
    50: gray['100'],
    100: gray['100'],
    200: gray['100'],
    300: gray['100'],
    400: gray['100'],
    500: baseTheme.colors.black,
    600: gray['800'],
    700: gray['800'],
    800: gray['800'],
    900: gray['800'],
  },
  brandWhite: {
    50: gray['800'],
    100: gray['800'],
    200: gray['800'],
    300: gray['800'],
    400: gray['800'],
    500: baseTheme.colors.white,
    600: gray['100'],
    700: gray['100'],
    800: gray['100'],
    900: gray['100'],
  },
}

const sizes = {
  container: {
    md: '860px',
    lg: '1120px',
  },
}

const components = {
  Heading: {
    baseStyle: {
      letterSpacing: '-0.01em',
    },
  },
  Link: {
    baseStyle: {
      color: 'gray.600',
      _hover: {
        color: 'black',
        textDecoration: 'none',
      },
    },
  } as ComponentStyleConfig,
  Button: {
    baseStyle: {
      fontWeight: 'regular',
      borderRadius: 'full',
    },
    sizes: {
      xs: {
        fontSize: 'sm',
        h: 7,
      },
      sm: {
        fontSize: 'md',
        h: 9,
      },
      md: {
        fontSize: 'lg',
        h: 12,
      },
      lg: {
        fontSize: 'xl',
        borderRadius: '2xl',
        px: 6,
        h: 14,
      },
    },
  } as ComponentStyleConfig,
  Alert: {
    baseStyle: {
      container: {
        borderRadius: 'lg',
      },
    },
  } as ComponentStyleConfig,
}

export const theme = extendTheme({
  styles,
  fonts,
  fontSizes,
  fontWeights,
  components,
  sizes,
  colors,
})
