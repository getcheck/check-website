import React from 'react'
import { Flex, Link, useBreakpointValue } from '@chakra-ui/react'
import { Link as ReachLink } from '@reach/router'
import Logo from '../logo'
import SocialNetworks from '../socialNetworks'
import Nav from './nav'

export const Navbar = () => {
  const hasNav = useBreakpointValue({ md: true })

  return (
    <Flex h={['3.5rem', '4rem']} align='center' justify='space-between'>
      <Link as={ReachLink} to='/'>
        <Logo />
      </Link>
      {hasNav && <Nav />}
      <SocialNetworks />
    </Flex>
  )
}

export default Navbar
