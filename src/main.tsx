import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { theme } from './styles/theme'
import Root from './views'
import Fonts from './styles/fonts'
import { ChakraProvider } from '@chakra-ui/react'

export const App = () => (
  <ChakraProvider resetCSS theme={theme}>
    <Fonts />
    <Root />
  </ChakraProvider>
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

