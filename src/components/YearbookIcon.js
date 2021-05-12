import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import YearbookSvg from '../assets/yearbook-icon.svg';
import '../styles/YearbookIcon.scss';

function YearbookIcon() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== '/yearbook' &&
        <Link to='/yearbook' className='yearbook-icon'>
          <img src={YearbookSvg} alt='' />
              yearbook/ about the team
              {pathname}
        </Link>}
    </>
  );
}
export default YearbookIcon;