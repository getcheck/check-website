import React from 'react'
import { Flex, Link, Text } from '@chakra-ui/react'
import { Link as ReachLink } from '@reach/router'
import Logo from '../logo'
import SocialNetworks from '../socialNetworks'

export const Navbar = () => {
  return (
    <Flex h='8rem' align='center' justify='space-between'>
      <Link as={ReachLink} to='/'>
        <Logo />
      </Link>
      <Text color='gray.500'>Copyright 2022 Nowcraft - All Rights Reserved</Text>
      <SocialNetworks />
    </Flex>
  )
}

export default Navbar
