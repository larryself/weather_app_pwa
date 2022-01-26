import React from 'react';
import './informationHint.css';
import Icon from "../icon/icon";

const InformationHint = ({setInputValue}) => {
    return (
        <div className={'hint'}>
            <div className={'hint__search'}>
                <Icon width={38} height={32} className={"hint__search-icon"} name={'arrow'}/>
                <p className={'hint__search-text'}>Начните вводить город,
                    например, <span className={'hint__search-text--white'} onClick={e=>setInputValue(e.target.innerHTML)}>Ижевск</span></p>
            </div>
            <div className={'hint__bookmark'}>
                <p>Используйте значок «закладки»,
                    чтобы закрепить город на главной</p>
                <Icon width={40} height={40} className={'hint__bookmark-icon'} name={'bookmark'}/>
            </div>
        </div>
    );
};

export default InformationHint;