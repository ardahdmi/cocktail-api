import { Button, IconButton } from '@chakra-ui/button';
import { CloseButton } from '@chakra-ui/close-button';
import { useDisclosure } from '@chakra-ui/hooks';
import Icon from '@chakra-ui/icon';
import { Box, Flex, HStack, VStack } from '@chakra-ui/layout';
import { chakra, useColorModeValue } from '@chakra-ui/system';
import VisuallyHidden from '@chakra-ui/visually-hidden';
import { ImGlass2 } from 'react-icons/im';
import Link from 'next/link';

export const Header = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();

  return (
    <>
      <chakra.header
        bg={bg}
        w='full'
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow='sm'>
        <Flex alignItems='center' justifyContent='space-between' mx='auto'>
          <Flex>
            <chakra.a
              href='/'
              title='Main Page'
              display='flex'
              alignItems='center'>
              <Icon as={ImGlass2} w={[5, 6, 7, 8]} h={[5, 6, 7, 8]} />
              <VisuallyHidden>TipsyTail</VisuallyHidden>
              <chakra.h1 fontSize='2xl' fontWeight='bold' ml={2}>
                Tipsytail
              </chakra.h1>
            </chakra.a>
          </Flex>
          <HStack display='flex' alignItems='center' spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color='brand.500'
              display={{ base: 'none', md: 'inline-flex' }}>
              <Button variant='ghost'>Features</Button>
              <Link href='/cocktail/random'>
                <Button variant='ghost'>Random Cocktail</Button>
              </Link>
              <Button variant='ghost'>About</Button>
            </HStack>
            <Button colorScheme='orange' size='md'>
              Get Started
            </Button>
            <Box display={{ base: 'inline-flex', md: 'none' }}>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label='Open menu'
                fontSize='20px'
                color={useColorModeValue('gray.800', 'inherit')}
                variant='ghost'
                icon={<Icon as={ImGlass2} />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos='absolute'
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection='column'
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded='sm'
                shadow='sm'>
                <CloseButton
                  aria-label='Close menu'
                  onClick={mobileNav.onClose}
                />

                <Button w='full' variant='ghost'>
                  Features
                </Button>
                <Link href='/cocktail/random'>
                  <Button w='full' variant='ghost'>
                    Random Cocktail
                  </Button>
                </Link>
                <Button w='full' variant='ghost'>
                  About
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
};
