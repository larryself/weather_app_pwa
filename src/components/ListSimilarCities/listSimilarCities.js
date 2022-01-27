import React from 'react';
import {Link} from "react-router-dom";
import SimpleBar from 'simplebar-react';
import cityList from "../../lib/russiaCities.json"
import './listSimilarCities.css';
import 'simplebar/dist/simplebar.min.css';

const ListSimilarCities = ({value, className}) => {
    const filteredCities = cityList.filter((city) => city.name.slice(0, value.length).toLowerCase() === value.toLowerCase())
    return (
        <div className={`similar-cities ${className ? className : ''}`}>
            <SimpleBar style={{maxHeight: 300}}  autoHide={false}>
                <ul className={"similar-cities__list"}>
                    {filteredCities.map(city => {
                        return (<li className={"similar-cities__item"} key={city.name}><Link
                            className={"similar-cities__item-link"}
                            tabIndex={0}
                            to={`/city?name=${city.name}`}><span
                            className={'similar-cities__item-highlight'}>{value}</span><span>{city.name.slice(value.length)}</span></Link>
                        </li>)
                    })
                    }
                </ul>
            </SimpleBar>
        </div>
    );
};

export default ListSimilarCities;