import { Flex, FlexProps, ImageProps, Image, Box } from '@chakra-ui/react'

export const Card = ({ children, src, ...rest }: FlexProps & ImageProps) => {
  return (
    <Flex {...rest} align='center' px={1} py={2} bg='gray.100' borderRadius='2xl'>
      <Image boxSize='6rem' src={src} />
      <Box flex={1} ml={1} mr={5} py={3}>
        {children}
      </Box>
    </Flex>
  )
}

export default Card
