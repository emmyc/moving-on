import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/IntroPage.scss';
import SuitcaseImg from '../assets/icons/suitcase_closed.png';

function IntroPage() {
  return (
    <div className='intro-page'>
      <div className='title'>
        <p>moving (on)</p>
      </div>
      <div className='icon'>
        <img src={SuitcaseImg} height='150' width='150' alt='suitcase'></img>
      </div>
      <div className='options'>
        <div>
          <Link className='narrative-option' to='/narrative'>
            on why we&apos;re moving
          </Link>
          <p className='narrative-desc'>
            take me through the scenic route; extra narrative content and
            background information on character
          </p>
        </div>
        <div>
          <Link className='explore-option' to='/explore'>
            {' '}
            on what we&apos;re packing
          </Link>
          <p className='explore-desc'>
            take me straight to the gameplay babey; interact with the objects
            you have to pack
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
