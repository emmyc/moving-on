import React, { useState } from 'react';
import mute from '../images/mute.svg';
import unmute from '../images/unmute.svg';

//this handles the audio icon, keeping the unmute image as a default and turning to the mute image when clicked
function AudioIcon() {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <div>
      <a href='#' onClick={toggler}>
        {toggle ? (
          <span>
            <img className='audioIcon' src={mute} alt='mute' />
          </span>
        ) : (
          <span>
            <img className='audioIcon' src={unmute} alt='unmute' />
          </span>
        )}
      </a>
    </div>
  );
}
export default AudioIcon;
