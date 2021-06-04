import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/IntroPage.scss';
import SuitcaseImg from '../assets/icons/suitcase_closed.png';

function IntroPage() {
  return (
    <div className='intro-page'>
      <div className='intro-pic'>
        <img src={SuitcaseImg} height='150' width='150' alt='suitcase'></img>
      </div>
      <div id='intro-text'>
        <div id='title'>
          <p>moving (on)</p>
        </div>

        <div className='options'>
          <div className='option'>
            <Link className='narrative-option' to='/narrative'>
              on why we&apos;re moving
          </Link>
          </div>
          <div className='option'>
            <Link className='explore-option' to='/explore'>
              {' '}
            on what we&apos;re packing
          </Link>
          </div>
        </div>
        <div id='option-subtext'>
          <p className='explore-desc desc'>
            take me straight to the gameplay babey; interact with the objects
            you have to pack
          </p>
          <p className='narrative-desc desc'>
            take me through the scenic route; extra narrative content and
            background information on character
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
