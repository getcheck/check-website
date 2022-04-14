import {
  Container,
  BoxProps,
  Box,
  Heading,
  Text,
  HStack,
  Button,
  Center,
  Image,
  Flex,
  Link,
} from '@chakra-ui/react'
import { GithubIcon } from './icons'
import solana from '../assets/solana.svg'

export const Hero = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Container maxW='container.md' pt='8rem' pb='2rem' textAlign='center'>
        <Heading as='h1' size='2xl' lineHeight='normal'>
          Self-sovereign, anonymous, verifiable credentials in Web 3.0
        </Heading>
        <Text mt={5} fontSize='2xl' color='gray.500'>
          Check Protocol is a Solana-based blockchain protocol that allows users to issue
          self-sufficient, anonymous, verifiable credentials.
        </Text>
        <Center mt={8}>
          <HStack align='center' spacing={6}>
            <Link href='#features'>
              <Button size='lg' variant='solid' colorScheme='brand'>
                Learn More
              </Button>
            </Link>
            <Link href='https://github.com/getcheck/check' target='_blank'>
              <Button leftIcon={<GithubIcon />} size='lg' variant='outline' colorScheme='brand'>
                Explore on Github
              </Button>
            </Link>
          </HStack>
        </Center>
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
