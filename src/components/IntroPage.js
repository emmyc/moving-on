import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/IntroPage.scss';
import LandingBoxImg from '../assets/intro_box.png';
import SeashellIcon from '../assets/seashell_icon.png';

function IntroPage() {
  return (
    <div className='intro-page'>
      <div className='intro-pic'>
        <img src={LandingBoxImg} height='150' width='150' alt='suitcase'></img>
      </div>
      <div id='intro-text'>
        <div id='title'>
          <p>moving (on)</p>
        </div>

        <div className='options'>
          <div className=' option'>
            <img src={SeashellIcon} />
            <Link className='narrative-option' to='/narrative'>
              start scenic route
            </Link>
          </div>
          <div className='option'>
            <img src={SeashellIcon} />
            <Link className='explore-option' to='/explore'>
              {' '}
              start packing
          </Link>
          </div>
        </div>
        <div id='option-subtext'>
          <p className='explore-desc desc'>
            Skip the narrative. You can only take so much with you.
            What will you pack and what will you leave behind?
            </p>
          <p className='narrative-desc desc'>
            Take the long route.
            Find out who you are and delve into the backstory behind the move.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
