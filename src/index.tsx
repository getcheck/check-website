import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import * as React from 'react'
import { createRoot } from 'react-dom/client'
import * as serviceWorker from './serviceWorker'
import { theme } from './styles/theme'
import Root from './views'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Root />
  </ChakraProvider>
)

const container = document.getElementById('root')
const root = createRoot(container as Element)
root.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()
