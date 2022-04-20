import { Container, BoxProps, Box } from '@chakra-ui/react'
import Navbar from './navbar'

export const Header = (props: BoxProps) => {
  return (
    <Box
      {...props}
      position='fixed'
      width='100%'
      bg='whiteAlpha.800'
      backdropFilter='blur(16px)'
      top='0'
      zIndex={200}
    >
      <Container maxW='container.lg'>
        <Navbar />
      </Container>
    </Box>
  )
}

export default Header
