import { Image, ImageProps } from '@chakra-ui/react'
import logo from '../assets/logo.svg'
import logoWhite from '../assets/logo-white.svg'

export const Logo = (props: ImageProps) => {
  const { color } = props
  return (
    <Image {...props} h={[4, 6]} src={color === 'white' ? logoWhite : logo} alt='Check Protocol' />
  )
}

export default Logo
