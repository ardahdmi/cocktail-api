import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Image } from '@chakra-ui/image';
import { Center } from '@chakra-ui/layout';
import { Box, Stack, Text } from '@chakra-ui/layout';
import { chakra, useColorModeValue } from '@chakra-ui/system';
import { CocktailForm } from './CocktailForm/CocktailForm';
import Link from 'next/link';

export default function MainPage() {
  return (
    <Box px={8} py={24} mx='auto'>
      <Box
        w={{ base: 'full', md: 11 / 12, xl: 9 / 12 }}
        mx='auto'
        textAlign={{ base: 'left', md: 'center' }}>
        <chakra.h1
          mb={6}
          fontSize={{ base: '4xl', md: '6xl' }}
          fontWeight='bold'
          lineHeight='none'
          letterSpacing={{ base: 'normal', md: 'tight' }}
          color={useColorModeValue('gray.900', 'gray.100')}>
          Find your{' '}
          <Text
            display={{ base: 'block', lg: 'inline' }}
            w='full'
            bgClip='text'
            bgGradient='linear(to-r, yellow.400,red.400)'
            fontWeight='extrabold'>
            Favorite cocktail
          </Text>{' '}
          right now.
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: 'lg', md: 'xl' }}
          color={useColorModeValue('gray.600', 'gray.300')}>
          Choosing the right cocktail can be problematic, especially if you're a
          gemini. Just answer a couple of questions and let us find your next
          favorite cocktail!
        </chakra.p>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          mb={{ base: 4, md: 8 }}
          spacing={5}
          justifyContent={{ sm: 'left', md: 'center' }}>
          <CocktailForm />
          <Link href='/cocktail/random'>
            <Button
              colorScheme='gray'
              alignItems='center'
              justifyContent='center'
              w={{ base: 'full', sm: 'auto' }}
              m={{ base: 2, sm: 0 }}
              size='lg'
              p={6}>
              I'm feeling lucky
              <Icon boxSize={4} ml={1} viewBox='0 0 20 20' fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z'
                  clipRule='evenodd'
                />
              </Icon>
            </Button>
          </Link>
        </Stack>
      </Box>
      <Box
        w={{ base: 'full', md: 10 / 12 }}
        mx='auto'
        mt={20}
        textAlign='center'>
        <Center>
          <Image
            w='1/2'
            rounded='lg'
            shadow='dark-lg'
            src='https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29ja3RhaWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
            alt='Hellonext feedback boards software screenshot'
          />
        </Center>
      </Box>
    </Box>
  );
}
