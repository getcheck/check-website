import { Box, BoxProps, HStack, Link } from '@chakra-ui/react'

export const Nav = (props: BoxProps) => {
  return (
    <Box {...props}>
      <HStack align='center' fontSize='lg' spacing={6}>
        <Link href='#'>About</Link>
        <Link href='#features'>Features</Link>
        <Link href='#contact'>Developers</Link>
      </HStack>
    </Box>
  )
}

export default Nav
