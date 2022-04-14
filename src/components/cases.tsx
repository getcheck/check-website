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
} from '@chakra-ui/react'
import { CircleIcon } from './icons'
import d1 from '../assets/diagrams/1.svg'
import d2 from '../assets/diagrams/2.svg'

export const Cases = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Container maxW='container.lg'>
        <Flex align='center'>
          <Image src={d1} />
          <Box ml='4rem' pr='2rem'>
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
              <Button variant='outline' colorScheme='brand' mt={5}>
                Get Started
              </Button>
            </Link>
          </Box>
        </Flex>

        <Flex mt='5rem'>
          <Box pl='2rem'>
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
              <Button variant='outline' colorScheme='brand' mt={5}>
                Get Started
              </Button>
            </Link>
          </Box>
          <Image src={d2} ml='4rem' />
        </Flex>
      </Container>
    </Box>
  )
}

export default Cases
