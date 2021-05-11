import { React, useState } from 'react';
import './App.css';
import ActionLinks from './ActionLinks.js';
import IntroPageWrapper from './components/IntroPage';

function App() {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className='App'>
      <header>
        <ActionLinks onClick={toggler} toggle={toggle} />
      </header>
      <IntroPageWrapper />
    </div>
  );
}

export default App;
