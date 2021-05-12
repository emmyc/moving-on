import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import IntroPageWrapper from './components/IntroPage';
import Yearbook from './components/Yearbook';
import YearbookIcon from './components/YearbookIcon';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/yearbook'>
            <Yearbook />
          </Route>
          <Route path='/'>
            <YearbookIcon />
            <IntroPageWrapper />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
