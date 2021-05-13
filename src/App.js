import React from 'react';
<<<<<<< HEAD
import './styles/main.scss';
import IntroPageWrapper from './components/IntroPage';
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import GameWrapper from './components/GameWrapper';
import IntroPage from './components/IntroPage';
import Yearbook from './components/Yearbook';
import Narrative from './components/Narrative';
import YearbookIcon from './components/YearbookIcon';
>>>>>>> aebb9f70281713da910f856c6a3fef144cf960f6

function App() {

  return (
<<<<<<< HEAD
    <div className='App'>
      <header>
        <IntroPageWrapper />
      </header>
=======
    <div className="App">
      <Router>
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
                Hello World!<br />
                I am draggable!
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
>>>>>>> aebb9f70281713da910f856c6a3fef144cf960f6
    </div>
  );
}

export default App;
