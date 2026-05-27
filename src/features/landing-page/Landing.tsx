import React from 'react';
import './Landing.scss';

const serviceCards = [
  {
    title: 'Planning',
    text: 'Clear scope, practical milestones, and simple project structure before implementation starts.',
  },
  {
    title: 'Delivery',
    text: 'Focused execution with clean handoff points and maintainable working outputs.',
  },
  {
    title: 'Support',
    text: 'Small follow-up improvements, issue review, and documentation where it matters.',
  },
];

const navigationItems = ['Home', 'Services', 'Process', 'Contact'];

const Landing = () => {
  return (
    <div className='landing-container'>
      <header className='bg-full-black site-header'>
        <nav className='normal-width header-tabs' aria-label='Landing sections'>
          <a className='logo-text' href='#top'>
            Northline
          </a>
          <ul>
            {navigationItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className='nav-link'>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id='top' className='main'>
        <section id='home' className='bg-full-black hero-section'>
          <div className='normal-width first-main'>
            <div className='text-block'>
              <p className='eyebrow'>Service landing page</p>
              <h1 className='header-white-text'>
                Simple digital services, clearly presented
              </h1>
              <p className='plain-text'>
                A compact landing page demo with a modern blue visual system,
                cleaner content hierarchy, and responsive sections.
              </p>
              <div className='hero-actions'>
                <a className='button' href='#services'>
                  View Services
                </a>
                <a className='secondary-link' href='#process'>
                  See Process
                </a>
              </div>
            </div>

            <div className='hero-card' aria-label='Project delivery summary'>
              <img
                src='https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?cs=srgb&dl=pexels-chokniti-khongchum-3938023.jpg&fm=jpg'
                alt='Workspace desk with digital equipment'
              />
              <div className='hero-card-footer'>
                <span>3 service areas</span>
                <span>Clean delivery flow</span>
              </div>
            </div>
          </div>
        </section>

        <section id='services' className='normal-width second-main'>
          <div className='section-heading'>
            <p className='eyebrow'>Services</p>
            <h2 className='header-black-text'>
              Focused support without extra noise
            </h2>
          </div>

          <div className='service-grid'>
            {serviceCards.map((card, index) => (
              <article className='service-card' key={card.title}>
                <span className='service-number'>0{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id='process' className='bg-full-gray'>
          <div className='normal-width gray-block'>
            <p className='quote-text'>
              Good service pages do not need heavy decoration. They need a clear
              promise, readable structure, and one obvious next step.
            </p>
            <p className='quote-text-ps'>
              <strong>Structure first, style second.</strong>
            </p>
          </div>
        </section>

        <section id='contact' className='normal-width'>
          <div className='blue-block'>
            <div>
              <p className='cta-label'>Ready to continue?</p>
              <p className='plain-text'>
                Open the source repository or contact the maintainer directly.
              </p>
            </div>
            <div className='cta-actions'>
              <a
                className='button-blue plain-text'
                href='https://github.com/itkrivoshei/react-typescript-web-apps'
                target='_blank'
                rel='noreferrer'
              >
                View Repository
              </a>
              <a
                className='button-blue plain-text'
                href='mailto:nikitakrivoshei@gmail.com'
              >
                Contact
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className='bg-full-black'>
        <div className='normal-width footer'>
          <p className='plain-text'>Copyright © Northline 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
