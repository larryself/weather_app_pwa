import React from 'react';
import './searchInput.css'

const SearchInput = React.forwardRef(({placeholder, value, onChange, className,onFocus},ref) => {
    return (
        <input
            className={`search-input ${className ? className : ''}`}
            type={'text'}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            ref={ref}
        />
    );
});

export default SearchInput;