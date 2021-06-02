import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import YearbookImg from '../assets/yearbook-icon.png';
import '../styles/YearbookIcon.scss';

function YearbookIcon() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== '/yearbook' && (
        <Link to='/yearbook' className='yearbook-icon'>
          <img src={YearbookImg} alt='Yearbook Icon' />
          yearbook
        </Link>
      )}
    </>
  );
}
export default YearbookIcon;
