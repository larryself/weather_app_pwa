import React,{useRef,useEffect,useState} from 'react';
import ListSimilarCities from '../ListSimilarCities/listSimilarCities';
import InformationHint from '../../components/informationHint/informationHint';
import './searchBox.css';
import cityList from '../../lib/russiaCities.json';

const SearchBox = ({favorite}) => {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [cities, setCities] = useState([]);
  const inputRef = useRef(null);
  const filteredCities = (value) => {
    return cityList.filter((city) => city.name.slice(0, value.length).toLowerCase() === value.toLowerCase());
  };
  const focusedOnInput = (event) => {
    setInputValue(event.target.innerHTML);
    inputRef.current.focus();
    setIsOpen(true);
  };
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

  useEffect(() => {
    if (inputValue.length >= 3 && document.activeElement === inputRef.current) {
      setIsOpen(true);
      setCities(filteredCities(inputValue));
    }
  }, [inputValue]);
  return (
    <div className='search-box'>
      <div className='search-box__wrapper'>
        <input
          type='text'
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          placeholder='Укажите город'
          className='search-box__input'
          onFocus={(event)=>{ if(event.target.value.length >=3) setIsOpen(true) }}
          autoFocus={true}
          ref={inputRef}
        />
        <ListSimilarCities
          cities={cities}
          value={inputValue}
          className='search-box__autocomplete-list'
          isOpen={isOpen}
        />
      </div>
      {!favorite.length && <InformationHint onClick={focusedOnInput} />}
    </div>
  );
};

export default SearchBox;