import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import maincookie from './assets/maincookie.svg';
import AudioIcon from './components/AudioIcon';
import FortuneCookies from './components/FortuneCookies';
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
          <Route path='/fortuneCookies'>
            <FortuneCookies />
          </Route>
          <Route path='/explore'>
            <GameWrapper>
            <Link to='/fortuneCookies'><img src={maincookie} style={{height: 200}}/></Link>
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
