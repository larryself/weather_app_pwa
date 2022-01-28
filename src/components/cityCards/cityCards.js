import React from 'react';
import { Link } from 'react-router-dom';
import CityCard from './cityCard/cityCard';
import './cityCards.css';

const CityCards = ({ citiesWeather }) => (
  <ul className='city-card__list'>
    {citiesWeather.map(city => (
      <li key={city.name} className='city-card__item'>
        <Link to={`/city?name=${city.name}`} className='city-card__item-link'>
          <CityCard city={city} />
        </Link>
      </li>))
    }
  </ul>
);

export default CityCards;