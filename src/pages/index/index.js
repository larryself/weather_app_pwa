import React, {useEffect, useState} from 'react';
import axios from "axios";
import Header from "../../components/header/header";
import Wrapper from "../../components/wrapper/wrapper";
import SearchBox from "../../components/searchBox/searchBox";
import CityCards from "../../components/cityCards/cityCards";
import {getWeather} from "../../api/getWeather";
import {LOCAL_STORAGE_KEY} from "../../constants/constants";
import InformationHint from "../../components/informationHint/informationHint";
import Loader from "../../components/loader/loader";

const Index = () => {
    const [inputValue, setInputValue] = useState('');
    const [cities, SetCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const searchWeather = async (citiesInBookmark) => {
        const response = await axios.all(citiesInBookmark.map((city) => getWeather(city)));
        SetCities(response)
    }
    useEffect(() => {
        const citiesInBookmark = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (citiesInBookmark && citiesInBookmark.length > 0 ) {
            setIsLoading(true)
            searchWeather(citiesInBookmark)
        }
    }, [])
    return (
        <React.Fragment>
            <Header/>
            <main className={'page-main'}>
                <Wrapper>
                    <SearchBox inputValue={inputValue} setInputValue={setInputValue}/>
                    {cities.length ?
                        <CityCards cities={cities}/> : isLoading ?
                            <Loader/> : <InformationHint setInputValue={setInputValue}/>}
                </Wrapper>
            </main>
        </React.Fragment>
    );
};

export default Index;