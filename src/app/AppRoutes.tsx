import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import AppNavigationMenu from './AppNavigationMenu';
import Dashboard from '../features/dashboard/Dashboard';
import Calculator from '../features/calculator';
import WeatherApp from '../features/weather';
import TodoApp from '../features/todo';
import SignUpForm from '../features/signup/SignUpForm';
import TicTacToe from '../features/tic-tac-toe';
import EtchASketch from '../features/etch-a-sketch';
import Restaurant from '../features/restaurant-page';
import BookLibrary from '../features/book-library';
import DrumKit from '../features/drum-kit';
import RockPaperScissors from '../features/rock-paper-scissors';
import OdinRecipes from '../features/odin-recipes';
import Landing from '../features/landing-page';
import DashLanding from '../features/admin-dashboard';

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
