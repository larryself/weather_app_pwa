import { useState, useEffect } from 'react';
import { LOCAL_STORAGE_KEY } from '../constants/constants';

const useLoadFavorite = () => {
  const [favorite, setFavorite] = useState([]);
  const citiesInBookmark = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  useEffect(()=>{
    if (citiesInBookmark && citiesInBookmark.length > 0) {
      setFavorite(citiesInBookmark);
    }
  },[])
  return favorite;
};
export default useLoadFavorite;