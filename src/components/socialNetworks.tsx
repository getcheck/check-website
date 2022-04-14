import React from 'react'
import { HStack, BoxProps, IconButton, Link, Box } from '@chakra-ui/react'
import { DiscordIcon, GithubIcon, TelegramIcon, TwitterIcon } from './icons'

export const SocialNetworks = (props: BoxProps) => {
  return (
    <Box {...props}>
      <HStack align='center' spacing={1}>
        <Link href='https://github.com/getcheck/check' target='_blank'>
          <IconButton
            borderRadius='full'
            aria-label='Github'
            variant='ghost'
            colorScheme='brand'
            boxSize='2.5rem'
            icon={<GithubIcon w={6} h={6} />}
          />
        </Link>
        <Link href='https://discord.gg/gZsK9J78bG' target='_blank'>
          <IconButton
            borderRadius='full'
            aria-label='Discord'
            variant='ghost'
            colorScheme='brand'
            boxSize='2.5rem'
            icon={<DiscordIcon w={6} h={6} />}
          />
        </Link>
        <Link href='https://t.me/check_protocol' target='_blank'>
          <IconButton
            borderRadius='full'
            aria-label='Telegram'
            variant='ghost'
            colorScheme='brand'
            boxSize='2.5rem'
            icon={<TelegramIcon w={6} h={6} />}
          />
        </Link>
        <Link href='https://twitter.com/check_protocol' target='_blank'>
          <IconButton
            borderRadius='full'
            aria-label='Twitter'
            variant='ghost'
            colorScheme='brand'
            boxSize='2.5rem'
            icon={<TwitterIcon w={6} h={6} />}
          />
        </Link>
      </HStack>
    </Box>
  )
}

export default SocialNetworks
