import React, {useEffect, useState} from 'react';
import Header from "../../components/header/header";
import './city.css'
import {Link, useSearchParams, useNavigate} from "react-router-dom";
import {getWeather} from "../../api/getWeather";
import useMediaQuery from "../../hooks/useMediaQuery";
import {DESKTOP} from "../../constants/breakpoints";
import {LOCAL_STORAGE_KEY} from "../../constants/constants";
import Loader from "../../components/loader/loader";
import Icon from "../../components/icon/icon";
import CityWeather from "../../components/cityWeather/cityWeather";

const City = () => {
    const [weather, setWeather] = useState({});
    const [bookmark, setBookmark] = useState(false);
    const [searchParams] = useSearchParams();
    const isDesktop = useMediaQuery(`(min-width: ${DESKTOP})`);
    const cityName = searchParams.get('name');
    const navigator = useNavigate();
    const handleBookmark = (e) => {
        const currentCitiesInBookmarks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
        if (!bookmark) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...currentCitiesInBookmarks, cityName.toLowerCase()]));
            setBookmark(true);
        } else {
            const filteredCities = currentCitiesInBookmarks.filter((city) => city !== cityName.toLowerCase());
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filteredCities));
            setBookmark(false);
        }
    }
    const searchWeather = async () => {
        try {
            const data = await getWeather(cityName);
            setWeather(data)
        } catch (e) {
            navigator('/404')
        }
    }
    useEffect(() => {
        const citiesInBookmarks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
        if (citiesInBookmarks.indexOf(cityName.toLowerCase()) > -1) {
            setBookmark(true)
        }
    }, [cityName])
    useEffect(() => {
        searchWeather()
    }, [cityName])
    return (
        <React.Fragment>
            {isDesktop && <Header/>}
            <main>
                <section className={'city'}>
                    <div className={'city__nav-inner'}>
                        <Link to={'/'} className={'city__link'}>
                            <Icon width={24} height={24} className={'city__link-icon'} name={'back'}/>
                            {isDesktop && 'Назад'}
                        </Link>
                        <button className={'city__bookmark'} onClick={handleBookmark}>
                            <Icon width={24} height={24} className={'city__bookmark-icon'}
                                  name={bookmark ? 'bookmark_use' : 'bookmark'}/>
                        </button>
                    </div>
                    {!weather.main && <Loader/>}
                    {weather.main && <CityWeather weather={weather}/>}
                </section>
            </main>
        </React.Fragment>
    );
};

export default City;