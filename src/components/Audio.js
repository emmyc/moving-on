import React, {useState} from 'react';
import mute from '../icons/mute.svg';
import unmute from '../icons/unmute.svg';

function Audio() {
  //switching icon from unmute to mute
  const [toggle, setToggle]= useState(false);
  const toggler =() => {
    toggle ? setToggle(false):setToggle(true);
  };
  return (
    <div>
    <a href="#" onClick={toggler}>
    {toggle ? <span><img className='audioIcon' src={mute} alt='mute'/></span>:
     <span><img className='audioIcon' src={unmute} alt='unmute'/></span>}
    </a>
    </div>
  );
}
export default Audio;