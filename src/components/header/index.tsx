import { Container, BoxProps, Box } from '@chakra-ui/react'
import Navbar from './navbar'

export const Header = (props: BoxProps) => {
  return (
    <Box
      {...props}
      borderBottom='1px'
      borderColor='blackAlpha.200'
      position='fixed'
      width='100%'
      bg='white'
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
