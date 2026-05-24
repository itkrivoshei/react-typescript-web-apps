import React from 'react';
import './Menu.scss';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  tag: string;
};

const menuData: MenuItem[] = [
  {
    id: 1,
    name: 'Spaghetti Bolognese',
    description:
      'Classic Italian pasta dish with a rich and savory meat sauce.',
    price: '$12.99',
    tag: 'Pasta',
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description:
      'Crisp romaine lettuce tossed in a tangy Caesar dressing, topped with homemade croutons and shaved Parmesan cheese.',
    price: '$8.99',
    tag: 'Fresh',
  },
  {
    id: 3,
    name: 'Margherita Pizza',
    description:
      'Timeless pizza topped with fresh tomatoes, mozzarella cheese, and basil.',
    price: '$10.99',
    tag: 'Oven',
  },
];

const Menu = () => {
  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <p className='menu-kicker'>Selected dishes</p>
        <h2>Menu</h2>
      </div>

      <div className='menu-grid'>
        {menuData.map((item) => (
          <article key={item.id} className='menu-item'>
            <div className='menu-item-top'>
              <span className='menu-item-tag'>{item.tag}</span>
              <p className='menu-item-price'>{item.price}</p>
            </div>
            <h3 className='menu-item-name'>{item.name}</h3>
            <p className='menu-item-description'>{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Menu;
