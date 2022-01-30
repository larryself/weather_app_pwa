import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/header/header';
import Wrapper from '../../components/wrapper/wrapper';
import SearchBox from '../../components/searchBox/searchBox';
import CityCards from '../../components/cityCards/cityCards';
import { getWeather } from '../../api/getWeather';
import Loader from '../../components/loader/loader';
import useLoadFavorite from '../../hooks/useLoadFavorite';

const Index = () => {
  const [citiesWeather, setCitiesWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const favorite = useLoadFavorite();
  const searchWeather = async (citiesInBookmark) => {
    try {
      const response = await axios.all(citiesInBookmark.map((city) => getWeather(city)));
      setCitiesWeather(response);
    } finally {
      setIsLoading(true);
    }
  };
  useEffect(() => {
    if (favorite.length > 0) {
      searchWeather(favorite)
    }
  }, [favorite]);

  return (
    <>
      <Header />
      <main className='page-main'>
        <Wrapper>
          <SearchBox favorite={favorite} />
          {favorite.length && !isLoading ? <Loader /> : null}
          {citiesWeather.length ? <CityCards citiesWeather={citiesWeather} /> : null}
        </Wrapper>
      </main>
    </>
  );
};

export default Index;