import React from 'react';
import './cityCard.css';
import Icon from '../../icon/icon';

const CityCard = ({ city }) => (
  <div className='city-card'>
    <h2 className='city-card__name'>{city.name}</h2>
    <p className='city-card__temp'>{Math.round(city.main.temp)}&deg;</p>
    <Icon className='city-card__icon' name={city.weather[0].main.toLowerCase()} />
  </div>
);

export default CityCard;