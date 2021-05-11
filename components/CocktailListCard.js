import { Image } from '@chakra-ui/image';
import { Box, Flex } from '@chakra-ui/layout';
import { chakra, useColorModeValue } from '@chakra-ui/system';

const CocktailListCard = ({ name, img }) => {
  console.log(img);
  return (
    <Flex bg={useColorModeValue('#F9FAFB', 'gray.600')} p={5}>
      <Box
        maxW='xs'
        mx='auto'
        bg={useColorModeValue('white', 'gray.800')}
        shadow='lg'
        rounded='lg'>
        <Box px={4} py={2}>
          <chakra.h1
            color={useColorModeValue('gray.800', 'white')}
            fontWeight='bold'
            fontSize='3xl'
            textTransform='uppercase'>
            {name}
          </chakra.h1>
        </Box>

        <Image h={48} w='full' fit='cover' mt={2} src={img} alt={name} />

        <Flex
          alignItems='center'
          justifyContent='space-between'
          px={4}
          py={2}
          bg='gray.900'
          roundedBottom='lg'>
          <chakra.h1 color='white' fontWeight='bold' fontSize='lg'>
            $129
          </chakra.h1>
          <chakra.button
            px={2}
            py={1}
            bg='white'
            fontSize='xs'
            color='gray.900'
            fontWeight='bold'
            rounded='lg'
            textTransform='uppercase'
            _hover={{
              bg: 'gray.200',
            }}
            _focus={{
              bg: 'gray.400',
            }}>
            Add to cart
          </chakra.button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CocktailListCard;
