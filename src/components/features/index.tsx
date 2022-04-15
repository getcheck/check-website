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
  useMediaQuery,
} from '@chakra-ui/react'
import Card from './card'
import il1 from '../../assets/illustrations/8.svg'
import il2 from '../../assets/illustrations/14.svg'
import il3 from '../../assets/illustrations/22.svg'
import il4 from '../../assets/illustrations/5.svg'
import il5 from '../../assets/illustrations/29.svg'
import il6 from '../../assets/illustrations/1.svg'

export const Features = (props: BoxProps) => {
  const featuresCards = [
    {
      src: il1,
      title: 'Self-sovereign identity',
      subtitle: 'Verifiable credentials\n Permissionless',
    },
    {
      src: il2,
      title: 'Full power of decentralization',
      subtitle: 'Solana-based registry\n  Decentralized communication on Libp2p',
    },
    {
      src: il3,
      title: 'Authenticity oracle for DeFi/DAO',
      subtitle:
        'Allows projects to verify and authorize their users without collecting/storing\n personal data',
    },
    {
      src: il4,
      title: 'A decentralized identifier (DID)',
      subtitle: 'A new type of identifier that enables verifiable, decentralized digital identity',
    },
    {
      src: il5,
      title: 'End-to-end principle & encryption',
      subtitle: 'Private data is not collected anywhere and cannot be decrypted',
    },
    {
      src: il6,
      title: 'Selective disclosure of personal data',
      subtitle: " Revealing users' identities based on their preferences",
    },
  ]
  const [isLargerThan880] = useMediaQuery('(min-width: 880px)')
  return (
    <Box {...props}>
      <Container maxW='container.lg'>
        <Heading as='h2' size='xl' textAlign='center'>
          Check Protocol in a nutshell
        </Heading>
        <SimpleGrid columns={isLargerThan880 ? 2 : 1} spacing={7} mt={8}>
          {featuresCards.map(({ src, title, subtitle }) => (
            <Card src={src}>
              <Heading as='h3' size='md' mb={2}>
                {title}
              </Heading>
              <Text fontSize='lg' color='gray.500' whiteSpace='pre-line'>
                {subtitle}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
        <Center mt={7}>
          <Link href='#contact'>
            <Button size='lg' variant='solid' colorScheme='brand'>
              Learn More
            </Button>
          </Link>
        </Center>
      </Container>
    </Box>
  )
}

export default Features
