import { Alert, AlertIcon, Box, Center, Image, Link } from '@chakra-ui/react'
import Header from '../components/header'
import Hero from '../components/hero'
import Features from '../components/features'
import Cases from '../components/cases'
import ContactUs from '../components/contactUs'
import Footer from '../components/footer'
import collect from '../assets/illustrations/12.svg'
import partner from '../assets/illustrations/97.svg'

export const Root = () => {
  return (
    <>
      <Header />
      <Box mt='80px'>
        <Alert
          as={Link}
          href='https://solana.com/news/riptide-hackathon-winners-solana'
          target='_blank'
          _focus={{ boxShadow: 'none' }}
          color='black'
          mb='-48px'
          status='info'
          colorScheme='brand'
          justifyContent='center'
          borderRadius={0}
          display={{ base: 'none', md: 'flex' }}
        >
          <AlertIcon />
          Check Protocol won a Company Prize in the Solana Riptide Hackathon! 🎉
        </Alert>
        <Hero />
      </Box>
      <Center>
        <Image src={collect} boxSize={['8rem', '12rem', '16rem']} />
      </Center>
      <Features id='features' />
      <Cases mt={{ base: '2rem', lg: '5rem' }} />
      <ContactUs mt={{ base: '3rem', lg: '5rem' }} id='contact' />
      <Center mt='1rem'>
        <Image src={partner} boxSize={['6rem', '9rem', '12rem']} />
      </Center>
      <Footer mt='2rem' />
    </>
  )
}

export default Root
