import logo from './logo.svg';
import React, { useRef, useState } from 'react';
import './App.css';
import CustomDraggable from './components/CustomDraggable';
import DraggableWrapper from './components/DraggableWrapper';

const El = (props) => {
  return (
    <div>
      {Array(props.size).fill("hello world").map((phrase) => <div>{phrase}</div>)}
    </div>
  );
}
function App() {

  return (
    <div className="App">
      {/* <header className="App-header"> */}

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

      {/* </header> */}
    </div>
  );
}

export default App;
