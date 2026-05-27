import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import DashLanding from '../features/admin-dashboard';
import BookLibrary from '../features/book-library';
import Calculator from '../features/calculator';
import Dashboard from '../features/dashboard/Dashboard';
import DrumKit from '../features/drum-kit';
import EtchASketch from '../features/etch-a-sketch';
import Landing from '../features/landing-page';
import OdinRecipes from '../features/odin-recipes';
import Restaurant from '../features/restaurant-page';
import RockPaperScissors from '../features/rock-paper-scissors';
import SignUpForm from '../features/signup/SignUpForm';
import TicTacToe from '../features/tic-tac-toe';
import TodoApp from '../features/todo';
import WeatherApp from '../features/weather';
import AppNavigationMenu from './AppNavigationMenu';

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

export default AppRoutes;
