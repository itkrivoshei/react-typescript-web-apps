import React, { useState } from 'react';
import Home from './Home';
import Contact from './Contact';
import Menu from './Menu';
import './Restaurant.scss';

type RestaurantTab = 'Home' | 'Menu' | 'Contact';

const tabs: RestaurantTab[] = ['Home', 'Menu', 'Contact'];

const Restaurant = () => {
  const [activeTab, setActiveTab] = useState<RestaurantTab>('Home');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Menu':
        return <Menu />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <main className='restaurant-container'>
      <section className='restaurant-shell' aria-label='Restaurant demo'>
        <div className='restaurant-hero'>
          <p className='restaurant-eyebrow'>Small dining page</p>
          <h1>Violet Table</h1>
          <p className='restaurant-description'>
            A compact restaurant interface with a warm visual style, simple
            navigation, and focused content sections.
          </p>
        </div>

        <nav className='tab-container' aria-label='Restaurant sections'>
          {tabs.map((tab) => (
            <button
              key={tab}
              type='button'
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              aria-current={activeTab === tab ? 'page' : undefined}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        <section className='content'>{renderTabContent()}</section>
      </section>
    </main>
  );
};

export default Restaurant;
