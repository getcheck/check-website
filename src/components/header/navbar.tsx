import React from 'react'
import { Flex, Link } from '@chakra-ui/react'
import { Link as ReachLink } from '@reach/router'
import Logo from '../logo'
import SocialNetworks from '../socialNetworks'
import Nav from './nav'

export const Navbar = () => {
  return (
    <Flex h='5rem' align='center' justify='space-between'>
      <Link as={ReachLink} to='/'>
        <Logo />
      </Link>
      <Nav />
      <SocialNetworks />
    </Flex>
  )
}

export default Navbar
