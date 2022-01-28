import React from 'react';
import Icon from '../icon/icon';
import './cityWeather.css';

const CityWeather = ({ weather }) => {
  const timeConverter = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours();
    const minutes = `0${date.getMinutes()}`;
    return `${hours}:${minutes.substr(-2)}`;
  };
  return (
    <div className='city-weather'>
      <h2 className='city-weather__title'>{weather.name}</h2>
      <p className='city-weather__description'>{weather.weather[0].description}</p>
      <div className='city-weather__temp-wrapper'>
        <p className='city-weather__temp'>{Math.round(weather.main.temp)}&deg;</p>
        <div className='city-weather__icon-wrapper'>
          <Icon className='city-weather__icon' name={weather.weather[0].main.toLowerCase()} />
        </div>
      </div>
      <div className='city-weather__pressure-wrapper'>
        <Icon className='city-weather__pressure-icon' width={24} height={24} name='barometer' />
        <p className='city-weather__pressure'>{Math.round(weather.main.pressure * 0.75)} мм.рт.ст</p>
      </div>
      <p className='city-weather__sunset'>Закат в {timeConverter(weather.sys.sunset)}</p>
    </div>
  );
};

export default CityWeather;