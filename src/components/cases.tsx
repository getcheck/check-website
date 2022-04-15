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
  useMediaQuery,
} from '@chakra-ui/react'
import { CircleIcon } from './icons'
import d1 from '../assets/diagrams/1.svg'
import d2 from '../assets/diagrams/2.svg'

export const Cases = (props: BoxProps) => {
  const [isLargerThan880] = useMediaQuery('(min-width: 880px)')
  const [isLargerThan580] = useMediaQuery('(min-width: 580px)')
  const authList = [
    { active: true, text: 'Private pools - verify your liquidity providers' },
    { active: true, text: 'Verifiable authenticity of NFTs' },
    { active: true, text: 'KYC for any services (e.g. CEX/DEX)' },
    { active: false, text: 'Fundraising mechanics' },
  ]
  const integrationList = [
    {
      active: true,
      text: 'Healthcare organisations (AntiCOVID tracking, etc.)',
    },
    { active: true, text: 'VGovernment services' },
    { active: false, text: 'Single Sign On (SSO)' },
    { active: false, text: 'Fast authorized payments (Solana Pay, etc.)' },
  ]
  return (
    <Box {...props}>
      <Container maxW='container.lg' mt='5rem'>
        <Flex
          align={isLargerThan580 ? 'center' : 'start'}
          direction={isLargerThan880 ? 'row' : 'column'}
          justify='space-between'
        >
          <Image src={d1} />
          <Box>
            <Heading as='h3' size='lg' mb={4}>
              Authenticity oracle for DeFi/DAO projects
            </Heading>
            <List spacing={2} fontSize='lg'>
              {authList.map(({ text, active }) => (
                <ListItem as={Flex} align='flex-start'>
                  <ListIcon
                    as={CircleIcon}
                    boxSize={4}
                    mt='.4rem'
                    color={active ? '' : 'gray.200'}
                  />
                  <Text>{text}</Text>
                </ListItem>
              ))}
            </List>
            <Link href='#contact'>
              <Button variant='outline' colorScheme='brand' mt={5}>
                Get Started
              </Button>
            </Link>
          </Box>
        </Flex>

        <Flex
          mt={isLargerThan880 ? '5rem' : '2rem'}
          align={isLargerThan580 ? 'center' : 'start'}
          direction={isLargerThan880 ? 'row' : 'column'}
          justify='space-between'
        >
          <Box>
            <Heading as='h3' size='lg' mb={4}>
              Integration with Web 2.0
            </Heading>
            <List spacing={2} fontSize='lg'>
              {integrationList.map(({ text, active }) => (
                <ListItem as={Flex} align='flex-start'>
                  <ListIcon
                    as={CircleIcon}
                    boxSize={4}
                    mt='.4rem'
                    color={active ? '' : 'gray.200'}
                  />
                  <Text>{text}</Text>
                </ListItem>
              ))}
            </List>
            <Link href='#contact'>
              <Button variant='outline' colorScheme='brand' mt={5}>
                Get Started
              </Button>
            </Link>
          </Box>
          <Image src={d2} ml='4rem' mt={isLargerThan880 ? '' : '2rem'} />
        </Flex>
      </Container>
    </Box>
  )
}

export default Cases
