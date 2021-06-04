import { React, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import '../src/styles/YearbookIcon.scss';
import AudioIcon from './components/AudioIcon';
import GameWrapper from './components/GameWrapper';
import IntroPage from './components/IntroPage';
import Narrative from './components/Narrative';
import Yearbook from './components/Yearbook';
import YearbookIcon from './assets/yearbook-icon.png';

function App() {

  const [yearbookVisible, setYearbookVisible] = useState(false);
  const toggleYearbookOverlay = () => setYearbookVisible(visible => !visible);

  return (
    <div className='App'>
      <Router>
        <AudioIcon />
        <div id='yearbook-icon' onClick={toggleYearbookOverlay}>
          <img src={YearbookIcon} alt='Yearbook Icon' />
        </div>
        {yearbookVisible ? <Yearbook toggleFunction={toggleYearbookOverlay} /> : null}
        <Switch>
          <Route path='/explore'>
            <GameWrapper />
          </Route>
          <Route path='/narrative'>
            <Narrative />
          </Route>

          <Route path='/'>
            <IntroPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
