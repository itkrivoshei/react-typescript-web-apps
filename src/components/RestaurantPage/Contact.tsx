import React from 'react';
import './Contact.scss';

const contactItems = [
  {
    label: 'Phone',
    value: '123-456-7890',
  },
  {
    label: 'Email',
    value: 'restaurant@food.com',
  },
  {
    label: 'Hours',
    value: 'Mon–Sun · 17:00–22:00',
  },
];

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-item'>
        <p className='contact-kicker'>Reservations</p>
        <h2 className='contact-header'>Contact</h2>
        <div className='contact-list'>
          {contactItems.map((item) => (
            <div key={item.label} className='contact-row'>
              <span>{item.label}</span>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
