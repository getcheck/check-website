import {
  Container,
  BoxProps,
  Box,
  Heading,
  Text,
  Button,
  Center,
  Image,
  Flex,
  Link,
  Stack,
} from '@chakra-ui/react'
import { GithubIcon } from './icons'
import solana from '../assets/solana.svg'

export const Hero = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Container
        maxW='container.md'
        pt={{ base: '3rem', md: '8rem' }}
        pb={['1rem', '2rem']}
        textAlign='center'
      >
        <Box px={['1rem', '2rem']}>
          <Heading as='h1' size='2xl' fontSize={['3xl', '4xl', '5xl']} lineHeight='normal'>
            Self-sovereign, anonymous, verifiable credentials in Web 3.0
          </Heading>
          <Text mt={5} fontSize={['xl', '2xl']} color='gray.500'>
            Check Protocol is a Solana-based blockchain protocol that allows users to issue
            self-sufficient, anonymous, verifiable credentials.
          </Text>
        </Box>
        <Center mt={8}>
          <Stack
            align='stretch'
            spacing={[3, 6]}
            direction={['column', 'row']}
            w={['100%', 'auto']}
          >
            <Link href='#features'>
              <Button size='lg' variant='solid' colorScheme='brand' w={['100%', 'auto']}>
                Learn More
              </Button>
            </Link>
            <Link href='https://github.com/getcheck/check' target='_blank'>
              <Button
                leftIcon={<GithubIcon />}
                size='lg'
                variant='outline'
                colorScheme='brand'
                w={['100%', 'auto']}
              >
                Explore on Github
              </Button>
            </Link>
          </Stack>
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
