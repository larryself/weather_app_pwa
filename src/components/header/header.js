import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className={'page-header'}>
            <div className={'page-header__wrapper'}>
                <img src={'img/logo.png'} alt={'logo'} width={'30'} height={'30'}/>
                <h1 className={'page-header__title'}>WeatherCheck</h1>
            </div>
        </header>
    );
};

export default Header;