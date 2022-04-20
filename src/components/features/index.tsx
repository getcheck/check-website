import {
  Container,
  BoxProps,
  Box,
  Heading,
  SimpleGrid,
  Text,
  Center,
  Button,
  Link,
} from '@chakra-ui/react'
import Card from './card'
import il1 from '../../assets/illustrations/8.svg'
import il2 from '../../assets/illustrations/14.svg'
import il3 from '../../assets/illustrations/22.svg'
import il4 from '../../assets/illustrations/5.svg'
import il5 from '../../assets/illustrations/29.svg'
import il6 from '../../assets/illustrations/1.svg'

export const Features = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Container maxW='container.lg'>
        <Heading as='h2' size='xl' textAlign='center'>
          Check Protocol in a nutshell
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, lg: 7 }} mt={[4, 8]}>
          <Card src={il1}>
            <Heading as='h3' size='md' mb={2}>
              Self-sovereign identity
            </Heading>
            <Text fontSize='lg' color='gray.600'>
              Verifiable credentials
            </Text>
            <Text fontSize='lg' color='gray.600'>
              Permissionless
            </Text>
          </Card>

          <Card src={il2}>
            <Heading as='h3' size='md' mb={2}>
              Full power of decentralization
            </Heading>
            <Text fontSize='lg' color='gray.600'>
              Solana-based registry
            </Text>
            <Text fontSize='lg' color='gray.600'>
              Decentralized communication on Libp2p
            </Text>
          </Card>

          <Card src={il3}>
            <Heading as='h3' size='md' mb={2}>
              Authenticity oracle for DeFi/DAO
            </Heading>
            <Text fontSize='lg' color='gray.600'>
              Allows projects to verify and authorize their users without collecting/storing
              personal data
            </Text>
          </Card>

          <Card src={il4}>
            <Heading as='h3' size='md' mb={2}>
              A decentralized identifier (DID)
            </Heading>
            <Text fontSize='lg' color='gray.600'>
              A new type of identifier that enables verifiable, decentralized digital identity
            </Text>
          </Card>

          <Card src={il5}>
            <Heading as='h3' size='md' mb={2}>
              End-to-end principle & encryption
            </Heading>
            <Text fontSize='lg' color='gray.600'>
              Private data is not collected anywhere and cannot be decrypted
            </Text>
          </Card>

          <Card src={il6}>
            <Heading as='h3' size='md' mb={2}>
              Selective disclosure of personal data
            </Heading>
            <Text fontSize='lg' color='gray.600'>
              Revealing users' identities based on their preferences
            </Text>
          </Card>
        </SimpleGrid>
        <Center mt={[4, 7]}>
          <Link href='#contact' w={['100%', 'auto']}>
            <Button size='lg' variant='solid' colorScheme='brand' w='100%'>
              Learn More
            </Button>
          </Link>
        </Center>
      </Container>
    </Box>
  )
}

export default Features
