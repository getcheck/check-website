import { Container, BoxProps, Box, Image } from '@chakra-ui/react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import obj1 from '../assets/illustrations/11.svg'
import obj2 from '../assets/illustrations/20.svg'

export const FlyingObjects = (props: BoxProps) => {
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 3000], [1100, -100])
  const y2 = useTransform(scrollY, [0, 3000], [2200, -100])

  return (
    <Box {...props} height={0}>
      <Container maxW='container.lg' height={0} position='relative'>
        <Box
          as={motion.div}
          boxSize='20rem'
          style={{ y: y1, x: -10 }}
          position='absolute'
          left='-20rem'
        >
          <Image src={obj1} boxSize='20rem' />
        </Box>
        <Box
          as={motion.div}
          boxSize='20rem'
          style={{ y: y2, x: 0, rotateZ: -60 }}
          position='absolute'
          right='-20rem'
        >
          <Image src={obj2} boxSize='20rem' />
        </Box>
      </Container>
    </Box>
  )
}

export default FlyingObjects
