import { chakra, Collapse, useDisclosure } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import {
  Badge,
  Center,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { SmallAddIcon, StarIcon } from '@chakra-ui/icons';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Link from 'next/link';
import { Button } from '@chakra-ui/button';

function CollapseEx({ text }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button
        w='full'
        roundedTop='0'
        roundedBottom={isOpen ? '0' : 'md'}
        bg='gray.200'
        outline='none'
        border='none'
        onClick={onToggle}>
        How to prepare it ?
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p='40px'
          color='white'
          bg='red.300'
          rounded='md'
          roundedTop={0}
          shadow='md'>
          {text}
        </Box>
      </Collapse>
    </>
  );
}

const CocktailCard = ({ data, rating }) => {
  const {
    strDrink,
    strDrinkThumb,
    strInstructions,
    strAlcoholic,
  } = data.drinks[0];
  const ingredients = [
    data.drinks[0].strIngredient1,
    data.drinks[0].strIngredient2,
    data.drinks[0].strIngredient3,
    data.drinks[0].strIngredient4,
  ];

  console.log(data.drinks[0]);
  console.log(ingredients);

  return (
    <Flex
      bg={useColorModeValue('orange.200', 'orange.500')}
      p={50}
      w='full'
      alignItems='center'
      justifyContent='center'>
      <Flex
        direction='column'
        justifyContent='center'
        alignItems='center'
        w='2xl'
        mx='auto'>
        <Image
          background='gray.200'
          h={64}
          w={{ base: 'full', md: 'xl' }}
          rounded='full'
          shadow='dark-lg'
          boxSize={{ base: '250px', md: '350px', lg: '450px' }}
          bgPos='center'
          src={strDrinkThumb}
        />
        <Box
          w={{ base: 56, md: 80 }}
          bg={useColorModeValue('white', 'gray.800')}
          mt={-8}
          shadow='lg'
          rounded='lg'
          overflow='hidden'
          color={useColorModeValue('gray.800', 'white')}>
          <chakra.h3
            py={2}
            textAlign='center'
            fontWeight='bold'
            textTransform='uppercase'
            letterSpacing={1}>
            {strDrink}
          </chakra.h3>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            alignItems='center'
            justifyContent='space-between'
            py={2}
            px={3}
            bg={useColorModeValue('gray.200', 'gray.700')}
            textTransform='none'>
            <Box d='flex' alignItems='center'>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < rating ? 'orange.500' : 'gray.300'}
                  />
                ))}
            </Box>
            <Badge colorScheme='orange' mt={{ base: 3, md: 0 }}>
              {strAlcoholic}
            </Badge>
          </Flex>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            alignItems='center'
            justifyContent='space-between'
            py={4}
            px={3}
            bg={useColorModeValue('gray.200', 'gray.700')}
            textTransform='none'>
            <List spacing={3}>
              {ingredients.map((item) => {
                return (
                  item && (
                    <ListItem>
                      <Text fontSize='lg'>
                        <ListIcon as={SmallAddIcon} color='orange.400' />
                        {item}
                      </Text>
                    </ListItem>
                  )
                );
              })}
            </List>
          </Flex>
          <CollapseEx text={strInstructions} />
        </Box>
        <Link href='/'>
          <Button
            mt={8}
            shadow='lg'
            _hover={{
              bg: useColorModeValue('orange.400', 'gray.400'),
              color: useColorModeValue('white', 'black'),
              shadow: 'lg',
            }}
            _focus={{
              bg: useColorModeValue('orange.400', 'gray.400'),
              color: useColorModeValue('white', 'black'),
              shadow: 'lg',
            }}>
            Back Home
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

CocktailCard.getInitialProps = async (ctx) => {
  const res = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  );
  const json = await res.json();
  const rating = Math.floor(Math.random() * 5) + 1;
  return { data: json, rating };
};

export default CocktailCard;
