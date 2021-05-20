import React from 'react';
import './App.css';
import AudioIcon from './components/AudioIcon';
import IntroPageWrapper from './components/IntroPage';
function App() {
  return (
    <div>
      <AudioIcon />
      <header>
        <IntroPageWrapper />
      </header>
      <IntroPageWrapper />
    </div>
  );
}
export default App;
