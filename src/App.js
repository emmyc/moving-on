import React, {useState} from 'react';
import './App.css';
import Audio from './components/Audio';
import IntroPageWrapper from './components/IntroPage';
import YearBookIcon from './components/YearBookIcon';
function App() {
  //toggler for audio Icon
    const [toggle, setToggle]= useState(false);
  const toggler =() => {
    toggle ? setToggle(false):setToggle(true);
  };
  //yearbook icon
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div>
      <YearBookIcon onClick={handleClick}/>
      <Audio onClick={toggler} toggle={toggle} />
      <header>
        <IntroPageWrapper />
      </header>
    </div>
  );
}
export default App;
