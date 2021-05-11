import React from 'react';
import yearbookIcon from '../icons/yearbookIcon.svg';

function YearBookIcon() {
  //takes to the yearbook when clicked
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    //yearbook icon
    <div className="App">
    <a href="#" onClick={handleClick}>
        <img className='yearbookIcon' src={yearbookIcon} alt='yearbookIcon'/>
    </a>
    </div>
  );
}
export default YearBookIcon;