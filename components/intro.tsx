import { Stack, Box, SlideFade, Text, Heading, Link, Button } from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Intro() {
  return (
    <Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
      <SlideFade
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.7 } }}>

        <Box position="relative">
          <Text
            color="displayColor"
            fontSize="display2"
            fontWeight="medium"
            position="relative"
          >
            Tell you a secreat 
          </Text>
        </Box>
        <Heading
          fontSize="display"
          lineHeight={'95%'}
          color="complement"
          letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
          position="relative"
        >
          <Box color="displayColor" as="span">Aryan Kumar</Box>
          .
        </Heading>
      </SlideFade>

      <SlideFade
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.9 } }}
      >
        <Box w={['85vw', '40vw']}>
        <Text fontSize="display3" color="textSecondary">
          Fanwar is launching a missile
        </Text>
        </Box>
      </SlideFade>

      <SlideFade
        in={true}
        transition={{ enter: { duration: 0.4, delay: 1.0 } }}
      >
        <Stack isInline spacing={4}>
          <Link href="https://github.com/daniel7722" isExternal>
            <Button
              leftIcon={<FaGithub color="#5F99FF" />}
              position="static"
              size='md'
              color="white"
              bg="#151415"
            >
              Github
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/daniel-huang-0a58a2220/" isExternal>
            <Button
              leftIcon={<FaLinkedin color="#5F99FF" />}
              position="static"
              size='md'
              color="white"
              bg="#151415"
            >
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:daniel.huang20@imperial.ac.uk" isExternal>
            <Button
              leftIcon={<FaEnvelope fill="#5F99FF" />}
              transition="0.3s"
              position="static"
              size='md'
              color="white"
              bg="#151415"
            >
              Email
            </Button>
          </Link>
        </Stack>
      </SlideFade>
    </Stack>
  )
}