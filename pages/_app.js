import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProvider } from '../context/AppContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  );
}

export default MyApp;
