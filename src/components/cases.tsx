import {
  Container,
  BoxProps,
  Box,
  Flex,
  Image,
  Heading,
  List,
  ListItem,
  ListIcon,
  Text,
  Button,
  Link,
  Stack,
} from '@chakra-ui/react'
import { CircleIcon } from './icons'
import d1 from '../assets/diagrams/1.svg'
import d2 from '../assets/diagrams/2.svg'

export const Cases = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Container maxW='container.lg'>
        <Stack align='center' spacing='2rem' direction={{ base: 'column', lg: 'row' }}>
          <Image src={d1} />
          <Box px={{ base: '1rem', md: '2rem' }} w={['100%', '80%']}>
            <Heading as='h3' size='lg' mb={4}>
              Authenticity oracle for DeFi/DAO projects
            </Heading>
            <List spacing={2} fontSize='lg'>
              <ListItem as={Flex} align='flex-start'>
                <ListIcon as={CircleIcon} boxSize={4} mt='.4rem' />
                <Text>Private pools - verify your liquidity providers</Text>
              </ListItem>
              <ListItem as={Flex} align='flex-start'>
                <ListIcon as={CircleIcon} boxSize={4} mt='.4rem' />
                <Text>Verifiable authenticity of NFTs</Text>
              </ListItem>
              <ListItem as={Flex} align='flex-start'>
                <ListIcon as={CircleIcon} boxSize={4} mt='.4rem' />
                <Text>KYC for any services (e.g. CEX/DEX)</Text>
              </ListItem>
              <ListItem as={Flex} align='flex-start' color='gray.500'>
                <ListIcon as={CircleIcon} boxSize={4} mt='.4rem' color='gray.200' />
                <Text>Fundraising mechanics</Text>
              </ListItem>
            </List>
            <Link href='#contact'>
              <Button variant='outline' colorScheme='brand' mt={5} w={['100%', 'auto']}>
                Get Started
              </Button>
            </Link>
          </Box>
        </Stack>

        <Stack
          align='center'
          mt={{ base: '2rem', lg: '5rem' }}
          spacing='2rem'
          direction={{ base: 'column-reverse', lg: 'row' }}
          order='revert'
        >
          <Box px={{ base: '1rem', md: '2rem' }} w={['100%', '80%']}>
            <Heading as='h3' size='lg' mb={4}>
              Integration with Web 2.0
            </Heading>
            <List spacing={2} fontSize='lg'>
              <ListItem as={Flex} align='flex-start'>
                <ListIcon as={CircleIcon} boxSize={4} mt='.4rem' />
                <Text>
                  Healthcare organisations (AntiCOVID tracking, Medical staff credential
                  verification)
                </Text>
              </ListItem>
              <ListItem as={Flex} align='flex-start'>
                <ListIcon as={CircleIcon} boxSize={4} mt='.4rem' />
                <Text>Government services</Text>
              </ListItem>
              <ListItem as={Flex} align='flex-start' color='gray.500'>
                <ListIcon as={CircleIcon} boxSize={4} mt='.4rem' color='gray.200' />
                <Text>Single Sign On (SSO)</Text>
              </ListItem>
              <ListItem as={Flex} align='flex-start' color='gray.500'>
                <ListIcon as={CircleIcon} boxSize={4} mt='.4rem' color='gray.200' />
                <Text>Fast authorized payments (Solana Pay, etc.)</Text>
              </ListItem>
            </List>
            <Link href='#contact'>
              <Button variant='outline' colorScheme='brand' mt={5} w={['100%', 'auto']}>
                Get Started
              </Button>
            </Link>
          </Box>
          <Image src={d2} />
        </Stack>
      </Container>
    </Box>
  )
}

export default Cases
