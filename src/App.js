import React, {useState} from 'react';
import './App.css';
import ActionLinks from './components/ActionLinks';
import Audio from './components/Audio';
import IntroPageWrapper from './components/IntroPage';
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
      <ActionLinks onClick={handleClick}/>
      <Audio onClick={toggler} toggle={toggle} />
      <header>
        <IntroPageWrapper />
      </header>
    </div>
  );
}
export default App;
