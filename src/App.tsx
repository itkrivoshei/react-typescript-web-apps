import React, { useState } from 'react';
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

import './styles/main.scss';
import Dashboard from './components/Dashboard';
import Restaurant from './components/RestaurantPage/Restaurant';
import TodoApp from './components/TodoList/TodoApp';
import TicTacToe from './components/TicTacToe/TicTacToe';
import BookLibrary from './components/LibraryApp/BookLibrary';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Calculator from './components/Calculator/Calculator';
import EtchASketch from './components/EtchASketch/EtchASketch';
import DrumKit from './components/DrumKit/DrumKit';
import RockPaperScissors from './components/RockPaperScissors/RockPaperScissors';
import OdinRecipes from './components/Recipes/OdinRecipes';
import Landing from './components/LandingPage/Landing';
import DashLanding from './components/AdminDashboard/DashLanding';
import WeatherApp from './components/WeatherApp/WeatherApp';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: '#111827',
      },
    },
  },
});

const AppNavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='apps-nav-menu' aria-label='App navigation'>
      <button
        type='button'
        className='apps-nav-menu-toggle'
        aria-expanded={isOpen}
        aria-controls='apps-nav-menu-panel'
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden='true'>↙</span>
      </button>
      {isOpen && (
        <div id='apps-nav-menu-panel' className='apps-nav-menu-panel'>
          <Link to='/' onClick={() => setIsOpen(false)}>
            Apps
          </Link>
          <a
            href='https://github.com/itkrivoshei/react-typescript-web-apps'
            target='_blank'
            rel='noreferrer'
          >
            Repo
          </a>
        </div>
      )}
    </nav>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  const showAppsLink = location.pathname !== '/';

  return (
    <>
      {showAppsLink && <AppNavigationMenu />}
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Restaurant' element={<Restaurant />} />
        <Route path='/TodoApp' element={<TodoApp />} />
        <Route path='/TicTacToe' element={<TicTacToe />} />
        <Route path='/BookLibrary' element={<BookLibrary />} />
        <Route path='/SignUpForm' element={<SignUpForm />} />
        <Route path='/Calculator' element={<Calculator />} />
        <Route path='/EtchASketch' element={<EtchASketch />} />
        <Route path='/DrumKit' element={<DrumKit />} />
        <Route path='/Landing' element={<Landing />} />
        <Route path='/DashLanding' element={<DashLanding />} />
        <Route path='/RockPaperScissors' element={<RockPaperScissors />} />
        <Route path='/OdinRecipes' element={<OdinRecipes />} />
        <Route path='/WeatherApp' element={<WeatherApp />} />
      </Routes>
    </>
  );
};

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
