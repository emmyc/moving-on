import React, {useState} from 'react';
import './App.css';
import IntroPageWrapper from './components/IntroPage';
import unmute from './icons/unmute.svg';
import mute from './icons/mute.svg';
import yearbookIcon from './icons/yearbookIcon.svg';



function App() {
  //takes to the yearbook when clicked
  function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
  }
  //switching from unmute to mute
  const [toggle, setToggle]= useState(false);
  const toggler =() => {
    toggle ? setToggle(false):setToggle(true);
  }
  return (
    //yearbook icon
    <div className="App">
    <a href="#" onClick={handleClick}>
        <img className='yearbookIcon' src={yearbookIcon} alt='yearbookIcon'/>
    </a>

    {/*mute/unmute icon */}
    <a href="#" onClick={toggler}>
    {toggle ? 
    <span><img className='audioIcon' src={unmute} alt='unmute'/></span>:
     <span><img className='audioIcon' src={mute} alt='mute'/></span>}
    </a>


      <header>
        <IntroPageWrapper />
      </header>
    </div>
  );
}

export default App;
