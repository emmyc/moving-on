import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import AudioIcon from './components/AudioIcon';
import GameWrapper from './components/GameWrapper';
import IntroPage from './components/IntroPage';
import Narrative from './components/Narrative';
import Yearbook from './components/Yearbook';
import YearbookIcon from './components/YearbookIcon';


function App() {
  return (
    <div className='App'>
      <Router>
        <AudioIcon />
        <YearbookIcon />
        <Switch>
          <Route path='/yearbook'>
            <Yearbook />
          </Route>

          <Route path='/explore'>
            <GameWrapper>
              <div>test</div>
              <div>test2</div>
              <p>
                Hello World!
                <br />I am draggable!
              </p>
            </GameWrapper>
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
