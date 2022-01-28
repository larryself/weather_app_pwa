import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Wrapper from '../../components/wrapper/wrapper';
import './error.css';
import Icon from '../../components/icon/icon';

const Error = () => (
  <>
    <Header />
    <main>
      <Wrapper>
        <section className='error'>
          <div className='error__inner'>
            <Icon className='error_icon' name='404' />
            <p className='error__title'>Что-то пошло не так</p>
            <Link className='error__link' to='/'>
              <Icon className='error__link-icon' name='back' width={24} height={24} />
              На главную
            </Link>
          </div>
        </section>
      </Wrapper>
    </main>
  </>);

export default Error;