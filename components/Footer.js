import Icon from '@chakra-ui/icon';
import { Box, Text } from '@chakra-ui/layout';
import { FaHeart } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <Box
        w={{ base: '100%', xl: '1300px' }}
        m='0 auto'
        bg='orange.300'
        p={4}
        borderTopRadius={{ base: 0, xl: 8 }}
        color='white'
        textAlign='center'>
        <Text fontSize='xl' fontFamily='sans-serif' fontWeight='bold'>
          Tipsytail 2021. Made with <Icon as={FaHeart} color='red' />
        </Text>
      </Box>
    </>
  );
};

export default Footer;
