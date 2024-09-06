import { useEffect, useState } from 'react'
import { Flex, Link, useBreakpointValue } from '@chakra-ui/react'
import Logo from '../logo'
import SocialNetworks from '../socialNetworks'
import Nav from './nav'
import { useScroll } from 'framer-motion'

export const Navbar = () => {
  const hasNav = useBreakpointValue({ md: true })
  const { scrollY } = useScroll()
  const [isShrunk, setShrunk] = useState(false)

  useEffect(() => {
    scrollY.on('change', (y) => {
      setShrunk((isShrunk) => {
        if (!isShrunk && y > 80) {
          return true
        }

        if (isShrunk && y < 50) {
          return false
        }

        return isShrunk
      })
    })

    return () => scrollY.clearListeners()
  }, [])

  return (
    <Flex
      h={['3.5rem', '4rem', isShrunk ? '4rem' : '5rem']}
      align='center'
      justify='space-between'
      transition='height 0.2s ease'
    >
      <Link href="#">
        <Logo />
      </Link>
      {hasNav && <Nav />}
      <SocialNetworks />
    </Flex>
  )
}

export default Navbar
