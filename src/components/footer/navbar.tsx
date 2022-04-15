import React from 'react'
import { Flex, Link, Text } from '@chakra-ui/react'
import { Link as ReachLink } from '@reach/router'
import Logo from '../logo'
import SocialNetworks from '../socialNetworks'

export const Navbar = () => {
  return (
    <Flex h='8rem' align='center' justify='space-between'>
      <Link as={ReachLink} to='/'>
        <Logo color='white' />
      </Link>
      <Text color='gray.200'>Copyright 2022 Nowcraft - All Rights Reserved</Text>
      <SocialNetworks colorScheme={'brandWhite'} />
    </Flex>
  )
}

export default Navbar
