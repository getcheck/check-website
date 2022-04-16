import { Center, Image, useBreakpointValue } from '@chakra-ui/react'
import Header from '../components/header'
import Hero from '../components/hero'
import Features from '../components/features'
import Cases from '../components/cases'
import ContactUs from '../components/contactUs'
import Footer from '../components/footer'
import FlyingObjects from '../components/flyingObjects'
import collect from '../assets/illustrations/12.svg'
import partner from '../assets/illustrations/97.svg'

export const Root = () => {
  const hasFlyingObjects = useBreakpointValue({ xl: true })

  return (
    <>
      {hasFlyingObjects && <FlyingObjects />}
      <Header />
      <Hero mt='5rem' />
      <Center>
        <Image src={collect} boxSize={['8rem', '12rem', '16rem']} />
      </Center>
      <Features id='features' />
      <Cases mt={{ base: '3rem', lg: '5rem' }} />
      <ContactUs mt={{ base: '3rem', lg: '5rem' }} id='contact' />
      <Center mt='1rem'>
        <Image src={partner} boxSize={['6rem', '9rem', '12rem']} />
      </Center>
      <Footer mt='2rem' />
    </>
  )
}

export default Root
