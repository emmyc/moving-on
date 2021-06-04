import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/IntroPage.scss';
import SuitcaseImg from '../assets/icons/suitcase_closed.png';

function IntroPage() {
  const TEXT_STATES = {
    NO_HOVER: 0,
    SCENIC: 1,
    PACKING: 2,
  };
  const [hoverState, setHoverState] = useState(TEXT_STATES.NO_HOVER);

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
            <Link className='narrative-option' to='/narrative' onMouseEnter={() => setHoverState(TEXT_STATES.SCENIC)} onMouseLeave={() => setHoverState(TEXT_STATES.NO_HOVER)}>
              on why we&apos;re moving
          </Link>
          </div>
          <div className='option'>
            <Link className='explore-option' to='/explore' onMouseEnter={() => setHoverState(TEXT_STATES.PACKING)} onMouseLeave={() => setHoverState(TEXT_STATES.NO_HOVER)}>
              {' '}
            on what we&apos;re packing
          </Link>
          </div>
        </div>
        <div id='option-subtext'>
          <p className='explore-desc desc' style={{display: hoverState === TEXT_STATES.PACKING ? 'block' : 'none'}}>
            take me straight to the gameplay babey; interact with the objects
            you have to pack
          </p>
          <p className='narrative-desc desc' style={{display: hoverState === TEXT_STATES.SCENIC ? 'block' : 'none'}}>
            take me through the scenic route; extra narrative content and
            background information on character
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
