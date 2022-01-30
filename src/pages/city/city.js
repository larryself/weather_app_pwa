import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import useCityWeather from '../../hooks/useCityWeather';
import { DESKTOP } from '../../constants/breakpoints';
import Loader from '../../components/loader/loader';
import Icon from '../../components/icon/icon';
import CityWeather from '../../components/cityWeather/cityWeather';
import Header from '../../components/header/header';
import BookmarkCity from '../../components/bookmarkCity/bookmarkCity';
import './city.css';

const City = () => {
  const [searchParams] = useSearchParams();
  const cityName = searchParams.get('name');
  const [weather, isLoading] = useCityWeather(cityName);
  const isDesktop = useMediaQuery(`(min-width: ${DESKTOP})`);
  return (
    <>
      {isDesktop && <Header />}
      <main>
        <section className='city'>
          <div className='city__nav-inner'>
            <Link to='/' className='city__link'>
              <Icon width={24} height={24} className='city__link-icon' name='back' />
              {isDesktop && 'Назад'}
            </Link>
            <BookmarkCity cityName={cityName} />
          </div>
          {!isLoading && <Loader />}
          {isLoading && <CityWeather weather={weather} />}
        </section>
      </main>
    </>
  );
};

export default City;