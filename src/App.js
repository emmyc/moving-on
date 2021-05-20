import React from 'react';
import './App.css';
import AudioIcon from './components/AudioIcon';
import IntroPageWrapper from './components/IntroPage';
import YearBookIcon from './components/YearBookIcon';
function App() {
  return (
    <div>
      <YearBookIcon/>
      <AudioIcon/>
      <header>
        <IntroPageWrapper/>
      </header>
    </div>
  );
}
export default App;
