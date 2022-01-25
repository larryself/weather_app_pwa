import React, {useState} from 'react';
import SearchInput from "../searchInput/searchInput";
import ListSimilarCities from "../ListSimilarCities/listSimilarCities";
import './searchBox.css'

const SearchBox = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className={'search-box'}>
            <div className={'search-box__wrapper'}>
                <SearchInput
                    onChange={(event) => setInputValue(event.target.value)}
                    value={inputValue}
                    placeholder={"Укажите город"}
                    className={"search-box__input"}
                />
                <ListSimilarCities
                    value={inputValue}
                    className={'search-box__autocomplete-list'}
                />
            </div>
        </div>
    );
};

export default SearchBox;