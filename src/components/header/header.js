import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header className='page-header'>
    <Link to='/' className='page-header__link'>
      <img src='img/logo.png' srcSet='img/logo@2.png 2x' alt='logo' width='30' height='30' />
      <h1 className='page-header__title'>WeatherCheck</h1>
    </Link>
  </header>
);

export default Header;