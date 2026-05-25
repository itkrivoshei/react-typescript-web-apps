import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { HashRouter as Router } from 'react-router-dom';

import './styles/main.scss';
import AppRoutes from './app/AppRoutes';
import theme from './app/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <AppRoutes />
      </Router>
    </ChakraProvider>
  );
}

export default App;
