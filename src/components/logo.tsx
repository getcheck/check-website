import React from 'react'
import { Flex, FlexProps, Image } from '@chakra-ui/react'
import logo from '../assets/logo.svg'

export const Logo = (props: FlexProps) => {
  return (
    <Flex {...props} align='center'>
      <Image h={6} src={logo} alt='Check Protocol' />
    </Flex>
  )
}

export default Logo
