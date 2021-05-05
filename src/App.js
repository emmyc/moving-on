import logo from './logo.svg';
import React, { useRef, useState } from 'react';
import './App.css';
import CustomDraggable from './components/CustomDraggable';
import DraggableWrapper from './components/DraggableWrapper';

const El = (props) => {
  return (
    <div>
      <ol>
        {Array(props.size).fill("hello world").map((phrase) => <li>{phrase}</li>)}
      </ol>
    </div>
  );
}
function App() {

  return (
    <div className="App">
      <header className="App-header">

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

        <div className='bound1'/>
      </header>
    </div>
  );
}

export default App;
