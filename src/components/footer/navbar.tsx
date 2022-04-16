import React from 'react'
import { Flex, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import { Link as ReachLink } from '@reach/router'
import Logo from '../logo'
import SocialNetworks from '../socialNetworks'

export const Navbar = () => {
  const copyright = useBreakpointValue({
    sm: '© 2022',
    md: 'Copyright 2022 Nowcraft - All Rights Reserved',
  })

  return (
    <Flex h={['4rem', '5rem', '8rem']} align='center' justify='space-between'>
      <Link as={ReachLink} to='/'>
        <Logo color='white' />
      </Link>
      <Text color='gray.200'>{copyright}</Text>
      <SocialNetworks colorScheme={'brandWhite'} />
    </Flex>
  )
}

export default Navbar
