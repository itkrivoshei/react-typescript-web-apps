import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter as Router } from 'react-router-dom';

import './styles/main.scss';
import AppRoutes from './app/AppRoutes';
import system from './app/theme';

function App() {
  return (
    <ChakraProvider value={system}>
      <Router>
        <AppRoutes />
      </Router>
    </ChakraProvider>
  );
}

export default App;
