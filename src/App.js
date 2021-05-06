import React, { useRef, useState } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import DraggableWrapper from './components/DraggableWrapper';
import Yearbook from './components/Yearbook';

const El = (props) => {
  return (
    <div>
      {Array(props.size).fill("hello world").map((phrase) => <div>{phrase}</div>)}
    </div>
  );
}
function Demo() {
  return (
    <>
    
    <DraggableWrapper name='helloworld'>
          <p>
            Hello World!<br/>
            I am draggable!
          </p>
        </DraggableWrapper>
        <DraggableWrapper name="list">
          <El size={6} />
        </DraggableWrapper>
        <div className='bound0'/>
        <span id='discard'>discard</span>
        

        <div className='bound1'/>
        <span id='keep'>keep</span>
        </>
  );
};

function App() {

  return (
    <div className="App">
      <Router>
        <Link to='/yearbook'>Yearbook</Link>
        <Link to='/'>Explore</Link>
        <Route exact path='/yearbook'>
          <Yearbook />
        </Route>
        <Route exact path='/'>
          <Demo />
        </Route>
      </Router>
      {/* <header className="App-header"> */}


      {/* </header> */}
    </div>
  );
}

export default App;
