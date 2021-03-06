import { Container, BoxProps, Box, Flex, Heading, Text, Button, Link } from '@chakra-ui/react'
import { TelegramIcon } from './icons'

export const ContactUs = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Container maxW='container.lg'>
        <Flex
          align={{ base: 'stretch', md: 'center' }}
          justify='space-between'
          direction={{ base: 'column', md: 'row' }}
          px={{ base: 6, md: 8 }}
          py={{ base: 5, md: 6 }}
          bg='gray.100'
          borderRadius='2xl'
        >
          <Box mb={{ base: 4, md: 0 }}>
            <Heading as='h2' size='lg' mb={1}>
              Let's build something great
            </Heading>
            <Text fontSize='lg' color='gray.600'>
              Interested in becoming a partner? Reach out to us on Telegram.
            </Text>
          </Box>
          <Link href='https://t.me/emvesper' target='_blank'>
            <Button
              leftIcon={<TelegramIcon color='white' />}
              size='lg'
              variant='solid'
              colorScheme='brand'
              w={['100%', 'auto']}
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
