import {
  Container,
  BoxProps,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Link,
  useMediaQuery,
} from '@chakra-ui/react'
import { TelegramIcon } from './icons'

export const ContactUs = (props: BoxProps) => {
  const [isLargerThan620] = useMediaQuery('(min-width: 620px)')
  return (
    <Box {...props}>
      <Container maxW='container.lg'>
        <Flex
          align='center'
          justify='space-between'
          px={8}
          py={6}
          bg='gray.100'
          borderRadius='2xl'
          direction={isLargerThan620 ? 'row' : 'column'}
        >
          <Box justifyContent='center' textAlign={isLargerThan620 ? 'start' : 'center'}>
            <Heading as='h2' size='lg' mb={1}>
              Let's build something great
            </Heading>
            <Text fontSize='lg' color='gray.500' whiteSpace={'pre-line'}>
              {'Interested in becoming a partner?\nReach out to us on Telegram.'}
            </Text>
          </Box>
          <Link href='https://t.me/emvesper' target='_blank' mt={isLargerThan620 ? '0' : '1rem'}>
            <Button
              leftIcon={<TelegramIcon color='white' />}
              size='lg'
              variant='solid'
              colorScheme='brand'
            >
              Contact Us
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}

export default ContactUs
