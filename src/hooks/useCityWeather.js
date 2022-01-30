import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getWeather } from '../api/getWeather';

const useCityWeather = (cityName) => {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigator = useNavigate();
  const searchWeather = async () => {
    try {
      const data = await getWeather(cityName);
      setWeather(data);
    } catch (e) {
      navigator('/404');
    } finally {
      setIsLoading(true)
    }
  };
  useEffect(() => {
    searchWeather();
  }, [cityName]);
  return [weather,isLoading];
};
export default useCityWeather;