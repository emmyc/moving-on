import React from 'react';
import './App.css';
import GameWrapper from './GameWrapper';

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
      <div className='bound0'/>
      <div className='bound1'/>
      <GameWrapper>
        <div>test</div>
        <div>test2</div>
        <p>
          Hello World!<br/>
          I am draggable!
        </p>
        <El size={6} />
      </GameWrapper>
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
