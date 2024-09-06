import { Flex, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import Logo from '../logo'
import SocialNetworks from '../socialNetworks'

export const Navbar = () => {
  const copyright = useBreakpointValue({
    sm: '© 2024',
    md: 'Copyright 2024 Nowcraft - All Rights Reserved',
  })

  return (
    <Flex h={['4rem', '5rem', '8rem']} align='center' justify='space-between'>
      <Link href="#">
        <Logo color='white' />
      </Link>
      <Text color='gray.200'>{copyright}</Text>
      <SocialNetworks colorScheme={'brandWhite'} />
    </Flex>
  )
}

export default Navbar
