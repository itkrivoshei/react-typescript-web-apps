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
import Restaurant from '../components/RestaurantPage/Restaurant';
import BookLibrary from '../components/LibraryApp/BookLibrary';
import DrumKit from '../components/DrumKit/DrumKit';
import RockPaperScissors from '../components/RockPaperScissors/RockPaperScissors';
import OdinRecipes from '../components/Recipes/OdinRecipes';
import Landing from '../components/LandingPage/Landing';
import DashLanding from '../components/AdminDashboard/DashLanding';

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
