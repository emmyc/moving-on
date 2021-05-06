import React from 'react';
import './App.css';
import GameWrapper from './GameWrapper';

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
    </div>
  );
}

export default App;
