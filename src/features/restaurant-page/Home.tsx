import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-copy'>
        <p className='home-kicker'>Modern comfort food</p>
        <h2 className='home-title'>Seasonal plates in a quiet dining room</h2>
        <p className='home-subtitle'>
          A small demo restaurant page built around simple content, readable
          layout, and a distinctive purple dining-room theme.
        </p>
        <div className='home-meta' aria-label='Restaurant highlights'>
          <span>Seasonal menu</span>
          <span>Fresh ingredients</span>
          <span>Evening service</span>
        </div>
      </div>

      <div className='home-img-container'>
        <img
          src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
          alt='Dish on white ceramic plate'
          className='home-img'
        />
      </div>
    </div>
  );
};

export default Home;
