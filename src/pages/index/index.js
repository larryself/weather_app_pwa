import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Header from '../../components/header/header';
import Wrapper from '../../components/wrapper/wrapper';
import SearchBox from '../../components/searchBox/searchBox';
import CityCards from '../../components/cityCards/cityCards';
import { getWeather } from '../../api/getWeather';
import { LOCAL_STORAGE_KEY } from '../../constants/constants';
import Loader from '../../components/loader/loader';
import InformationHint from '../../components/informationHint/informationHint';
import cityList from '../../lib/russiaCities.json';

const Index = () => {
  const [inputValue, setInputValue] = useState('');
  const [citiesWeather, setCitiesWeather] = useState([]);
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const filteredCities = (value) => {
    return cityList.filter((city) => city.name.slice(0, value.length).toLowerCase() === value.toLowerCase());
  };
  const searchWeather = async (citiesInBookmark) => {
    const response = await axios.all(citiesInBookmark.map((city) => getWeather(city)));
    setCitiesWeather(response);
  };
  useEffect(() => {
    const citiesInBookmark = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (citiesInBookmark && citiesInBookmark.length > 0) {
      setIsLoading(true);
      searchWeather(citiesInBookmark);
    }
  }, []);
  useEffect(() => {
    if (inputValue.length >= 3 && document.activeElement === inputRef.current) {
      setIsOpen(true);
      setCities(filteredCities(inputValue));
    }
  }, [inputValue]);
  useEffect(() => {
    const onClick = e => {
      if (!e.target.closest('.search-box__wrapper')) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('click', onClick);
    }
    return () => document.removeEventListener('click', onClick);
  }, [isOpen]);

  return (
    <>
      <Header />
      <main className='page-main'>
        <Wrapper>
          <SearchBox inputValue={inputValue}
                     setInputValue={setInputValue}
                     ref={inputRef}
                     isOpen={isOpen}
                     onFocus={() => setIsOpen(true)}
                     cities={cities}
          />
          {citiesWeather.length ? <CityCards citiesWeather={citiesWeather} /> : isLoading ? <Loader /> :
            <InformationHint setInputValue={setInputValue} inputRef={inputRef} />}
        </Wrapper>
      </main>
    </>
  );
};

export default Index;