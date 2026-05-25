import { useState } from 'react';
import { Link } from 'react-router-dom';

import './AppNavigationMenu.scss';

const AppNavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`apps-nav-menu${isOpen ? ' apps-nav-menu--open' : ''}`}
      aria-label='App navigation'
    >
      <div id='apps-nav-menu-panel' className='apps-nav-menu-panel'>
        <Link to='/' onClick={() => setIsOpen(false)}>
          Back to Apps
        </Link>
        <a
          href='https://github.com/itkrivoshei/react-typescript-web-apps'
          target='_blank'
          rel='noreferrer'
        >
          Repository
        </a>
      </div>
      <button
        type='button'
        className='apps-nav-menu-toggle'
        aria-expanded={isOpen}
        aria-controls='apps-nav-menu-panel'
        aria-label={isOpen ? 'Close app navigation' : 'Open app navigation'}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden='true'>›</span>
      </button>
    </nav>
  );
};

export default AppNavigationMenu;
