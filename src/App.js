import logo from './logo.svg';
import React, { useRef, useState } from 'react';
import './App.css';
import CustomDraggable from './components/CustomDraggable';
import DraggableWrapper from './components/DraggableWrapper';

function App() {
  const ref1 = useState(null);
  const ref2 = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <DraggableWrapper bounds={[ref1,ref2]}>
          <p>
            Hello World!<br/>
            I am draggable!
          </p>
        </DraggableWrapper>
        <div className='bound0' ref={ref1}/>

        <div className='bound1'ref={ref2}/>
        {/* <CustomDraggable>
          <p>
            Hello World!<br/>
            I am a custom draggable component!
          </p>
        </CustomDraggable> */}
        {/* <div className='dropzone'></div> */}
      </header>
    </div>
  );
}

export default App;
