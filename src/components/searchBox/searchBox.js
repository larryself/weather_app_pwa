import React from 'react';
import ListSimilarCities from '../ListSimilarCities/listSimilarCities';
import './searchBox.css';

const SearchBox = React.forwardRef(({ inputValue, setInputValue, isOpen, cities, onFocus }, ref) => {
  return (
    <div className='search-box'>
      <div className='search-box__wrapper'>
        <input
          type='text'
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          placeholder='Укажите город'
          className='search-box__input'
          onFocus={onFocus}
          autoFocus={true}
          ref={ref}
        />
        <ListSimilarCities
          cities={cities}
          value={inputValue}
          className='search-box__autocomplete-list'
          isOpen={isOpen}
        />
      </div>
    </div>
  );
});

export default SearchBox;