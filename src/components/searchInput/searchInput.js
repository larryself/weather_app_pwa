import React from 'react';
import './searchInput.css'

const SearchInput = ({placeholder, value, onChange, className}) => {
    return (
        <input
            className={`search-input ${className ? className : ''}`}
            type={'text'}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default SearchInput;