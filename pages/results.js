import { useContext } from 'react';
import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import Link from 'next/link';
import { CocktailListCard } from '../components';
import { StateContext } from '../context/AppContext';

const FormResultPage = ({ data }) => {
  const state = useContext(StateContext);
  console.log(state);
  console.log(data);
  return (
    <>
      <Flex
        justifyContent='center'
        flexDirection={{ base: 'column', md: 'row' }}
        flexWrap='wrap'>
        {data.drinks.map((item) => {
          return (
            <CocktailListCard
              name={item.strDrink}
              img={item.strDrinkThumb}
              key={item.idDrink}
            />
          );
        })}
      </Flex>
      <Flex justifyContent='center'>
        <Link href='/'>
          <Button p={2} m={2} mb={4}>
            Back home
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export async function getStaticProps(ctx) {
  console.log(ctx);
  const res = await fetch(
    'http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka'
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default FormResultPage;
