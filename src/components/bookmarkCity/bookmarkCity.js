import React,{useState,useEffect} from 'react';
import { LOCAL_STORAGE_KEY } from '../../constants/constants';
import Icon from '../../components/icon/icon';
import './bookmarkCity.css';

const BookmarkCity = ({cityName}) => {
  const [bookmark, setBookmark] = useState(false);
  const handleBookmark = () => {
    const currentCitiesInBookmarks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    if (!bookmark) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...currentCitiesInBookmarks, cityName.toLowerCase()]));
      setBookmark(true);
    } else {
      const filteredCities = currentCitiesInBookmarks.filter((city) => city !== cityName.toLowerCase());
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filteredCities));
      setBookmark(false);
    }
  };
  useEffect(() => {
    const citiesInBookmarks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    if (citiesInBookmarks.indexOf(cityName.toLowerCase()) > -1) {
      setBookmark(true);
    }
  }, [cityName]);
  return (
      <button type='button' className='city__bookmark bookmark' onClick={handleBookmark}>
        <Icon width={24} height={24} className='bookmar__icon'
              name={bookmark ? 'bookmark_use' : 'bookmark'} />
      </button>
  );
};

export default BookmarkCity;