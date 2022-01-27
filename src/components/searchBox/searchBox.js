import React, {useState, useEffect} from 'react';
import SearchInput from '../searchInput/searchInput';
import ListSimilarCities from '../ListSimilarCities/listSimilarCities';
import './searchBox.css'

const SearchBox = ({inputValue, setInputValue}) => {
    const [isOpen, setIsOpen] = useState(true)
    useEffect(() => {
        const onClick = e => {
            if (!e.target.closest('.search-box__wrapper')) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);
    return (
        <div className={'search-box'}>
            <div className={'search-box__wrapper'}>
                <SearchInput
                    onChange={(event) => setInputValue(event.target.value)}
                    value={inputValue}
                    placeholder={'Укажите город'}
                    className={'search-box__input'}
                    onFocus={() => {
                        return setIsOpen(true)
                    }}
                />
                {inputValue.length >= 3 & isOpen ?
                    <ListSimilarCities
                        value={inputValue}
                        className={'search-box__autocomplete-list'}
                    />
                    : null}
            </div>
        </div>
    );
};

export default SearchBox;