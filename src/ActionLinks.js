import React from 'react';
import mute from './icons/mute.svg';
import unmute from './icons/unmute.svg';
import yearbookIcon from './icons/yearbookIcon.svg';

function ActionLinks({ onClick, toggle }) {
  function handleClick(e) {
    e.preventDefault();
  }
  //switching from unmute to mute
  return (
    <div>
      <a href='#' onClick={handleClick}>
        <img className='yearbookIcon' src={yearbookIcon} alt='yearbookIcon' />
      </a>

      {/*mute/unmute icon */}
      <a href='#' onClick={onClick}>
        {toggle ? (
          <span>
            <img className='audioIcon' src={unmute} alt='unmute' />
          </span>
        ) : (
          <span>
            <img className='audioIcon' src={mute} alt='mute' />
          </span>
        )}
      </a>
    </div>
  );
}

export default ActionLinks;
