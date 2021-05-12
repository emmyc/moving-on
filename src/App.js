import React from 'react';
import './App.css';
// import DraggableWrapper from './components/DraggableWrapper';
import GameWrapper from './components/GameWrapper';
import IntroPageWrapper from './components/IntroPage';

const El = (props) => {
  return (
    <div>
      {Array(props.size).fill('hello world').map((phrase) =>
        <div key={phrase.id}>{phrase}</div>)}
    </div>
  );
};
function App() {

  return (
    <div className="App">
      <GameWrapper>
        <div>test</div>
        <div>test2</div>
        <p>
          Hello World!<br/>
          I am draggable!
        </p>
        <El size={6} />
      </GameWrapper>
      <div className='bound0'/>
      <span id='discard'>discard</span>

      <div className='bound1'/>
      <span id='keep'>keep</span>
      <header>
        <IntroPageWrapper />
      </header>
    </div>
  );
}

export default App;
