import { Container, BoxProps, Box } from '@chakra-ui/react'
import Navbar from './navbar'

export const Footer = (props: BoxProps) => {
  return (
    <Box {...props} bg='black'>
      <Container maxW='container.lg'>
        <Navbar />
      </Container>
    </Box>
  )
}

export default Footer
