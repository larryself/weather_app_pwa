import React, {useState, useEffect, useRef} from 'react';
import SearchInput from '../searchInput/searchInput';
import ListSimilarCities from '../ListSimilarCities/listSimilarCities';
import InformationHint from "../informationHint/informationHint";
import './searchBox.css'

const SearchBox = ({cities}) => {
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef(null)
    useEffect(() => {
        const onClick = e => {
            if (!e.target.closest('.search-box__wrapper')) {
                setIsOpen(false);
                inputRef.current.blur();
            }
        }
        if (isOpen) {
            document.addEventListener('click', onClick);
        }
        return () => document.removeEventListener('click', onClick);
    }, [isOpen]);

    return (
        <div className={'search-box'}>
            <div className={'search-box__wrapper'}>
                <SearchInput
                    onChange={(event) => setInputValue(event.target.value)}
                    value={inputValue}
                    placeholder={'Укажите город'}
                    className={'search-box__input'}
                    onFocus={() => setIsOpen(true)}
                    ref={inputRef}
                />
                {inputValue.length >= 3 && isOpen ? <ListSimilarCities
                    value={inputValue}
                    isOpen={isOpen}
                    className={'search-box__autocomplete-list'}
                /> : null}
            </div>
            {!cities.length && <InformationHint setInputValue={setInputValue} inputRef={inputRef}/>}
        </div>
    );
};

export default SearchBox;