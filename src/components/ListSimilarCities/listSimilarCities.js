import React from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './listSimilarCities.css';

const ListSimilarCities = ({ value, className, isOpen, cities }) => {
  return (
    <div className={`similar-cities ${className || ''}`}>
      <ul className='similar-cities__list'>
        {isOpen &&
        <SimpleBar style={{ maxHeight: 300 }} autoHide={false}>
          {cities.map(city => (<li className='similar-cities__item' key={city.name}><Link
            className='similar-cities__item-link'
            tabIndex={0}
            to={`/city?name=${city.name}`}><span
            className='similar-cities__item-highlight'>{value}</span><span>{city.name.slice(value.length)}</span></Link>
          </li>))
          }
        </SimpleBar>
        }
      </ul>
    </div>
  );
};

export default ListSimilarCities;