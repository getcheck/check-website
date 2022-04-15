import React from 'react'
import { Flex, Link, Text, useMediaQuery } from '@chakra-ui/react'
import { Link as ReachLink } from '@reach/router'
import Logo from '../logo'
import SocialNetworks from '../socialNetworks'

export const Navbar = () => {
  const [isLargerThan740] = useMediaQuery('(min-width: 740px)')
  return (
    <Flex
      p={isLargerThan740 ? '0' : '2rem'}
      h={isLargerThan740 ? '8rem' : '10rem'}
      align='center'
      justify='space-between'
      flexDirection={isLargerThan740 ? 'row' : 'column'}
    >
      <Link as={ReachLink} to='/'>
        <Logo color='white' />
      </Link>
      <Text color='gray.200' whiteSpace='pre-line' textAlign='center'>
        {isLargerThan740 ? '© 2022 Nowcraft - All Rights Reserved' : '© 2022 Nowcraft'}
      </Text>

      <SocialNetworks colorScheme={'brandWhite'} />
    </Flex>
  )
}

export default Navbar
