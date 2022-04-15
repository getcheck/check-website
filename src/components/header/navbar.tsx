import React from 'react'
import { Flex, Link, useMediaQuery } from '@chakra-ui/react'
import { Link as ReachLink } from '@reach/router'
import Logo from '../logo'
import SocialNetworks from '../socialNetworks'
import Nav from './nav'

export const Navbar = () => {
  const [isLargerThan880] = useMediaQuery('(min-width: 880px)')
  return (
    <Flex h='5rem' align='center' justify='space-between'>
      <Link as={ReachLink} to='/'>
        <Logo />
      </Link>
      {isLargerThan880 && <Nav />}
      <SocialNetworks />
    </Flex>
  )
}

export default Navbar
