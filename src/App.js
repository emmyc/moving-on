import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import GameWrapper from './components/GameWrapper';
import IntroPage from './components/IntroPage';
import Narrative from './components/Narrative';
import Yearbook from './components/Yearbook';
import YearbookIcon from './components/YearbookIcon';

function App() {

  return (
    <div className="App">
      <Router>
        {/* TODO: remove placeholder audio button */}
        <div id='audio-button'/>
        <YearbookIcon />
        <Switch>

          <Route path='/yearbook'>
            <Yearbook />
          </Route>

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
