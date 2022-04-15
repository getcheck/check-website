import {
  Box,
  BoxProps,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import { GithubIcon } from './icons'
import solana from '../assets/solana.svg'

export const Hero = (props: BoxProps) => {
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')
  return (
    <Box {...props}>
      <Container
        maxW='container.md'
        pt={isLargerThan480 ? '8rem' : '4rem'}
        pb='2rem'
        textAlign='center'
      >
        <Heading as='h1' size='2xl' lineHeight='normal'>
          Self-sovereign, anonymous, verifiable credentials in Web 3.0
        </Heading>
        <Text mt={5} fontSize='2xl' color='gray.500'>
          Check Protocol is a Solana-based blockchain protocol that allows users to issue
          self-sufficient, anonymous, verifiable credentials.
        </Text>
        <Flex mt={8} justify='center' flexDirection={isLargerThan480 ? 'row' : 'column'}>
          <Link href='#features'>
            <Button size='lg' variant='solid' colorScheme='brand'>
              Learn More
            </Button>
          </Link>
          <Link
            href='https://github.com/getcheck/check'
            target='_blank'
            mt={isLargerThan480 ? '0' : '1rem'}
            ml={isLargerThan480 ? '20px' : '0'}
          >
            <Button leftIcon={<GithubIcon />} size='lg' variant='outline' colorScheme='brand'>
              Explore on Github
            </Button>
          </Link>
        </Flex>
        <Center mt={12}>
          <Flex align='center'>
            <Text>Powered by</Text>
            <Image src={solana} alt='Solana' h='1rem' ml={3} />
          </Flex>
        </Center>
      </Container>
    </Box>
  )
}

export default Hero
