import React from 'react';
import CityCard from "./cityCard/cityCard";
import './cityCards.css';
import {Link} from "react-router-dom";

const CityCards = ({cities}) => {
    return (
        <ul className={'city-card__list'}>
            {cities.map(city => (
                <li key={city.name} className={'city-card__item'}>
                    <Link to={`/city?name=${city.name}`}>
                        <CityCard city={city}/>
                    </Link>
                </li>))
            }
        </ul>
    );
};

export default CityCards;