import React, {useEffect, useState, useRef} from 'react';
import '../styles/Fishing.scss';
import Water from '../assets/fishwater.png';
import Boat from '../assets/fishboat.png';

function Fishing() {

  var hc = 0;
  var alast = false;
  const [gameState, setGameState] = useState('Initial');
  const hookRef = useRef(hc);
  const adRef = useRef(alast);

  let updateState = () => {
    console.log(gameState);
    switch(gameState) {
    case 'Initial':
      setGameState('Cast');
      break;
    case 'Cast':
      setGameState('Bob');
      break;
    case 'Bob':
      setGameState('Hook');
      break;
    case 'Hook':
      setGameState('Fin');
      break;
    default:
      setGameState('Initial');
    }
  };

  let hookFunc = () => {
    if(hookRef.current > 3) {
      if(gameState == 'Hook') {
	updateState();
	console.log('u win : >');
      }
    } else {
      setGameState('Initial');
      console.log('u lose : <');
    }
  };

  let handleKeyPress = (e) => {
    console.log(hookRef.current);
    if(gameState == 'Hook') {
      if(e.keyCode == 65 && !adRef.current){
        hc++;
	hookRef.current = hc;
	alast = !alast;
	adRef.current = alast;
      } else if(e.keyCode == 68 && adRef.current){
        hc++;
	hookRef.current = hc;
	alast = !alast;
	adRef.current = alast;
      }
    }
  };

  useEffect(() => {
    var bobTimer = null;
    var hookTimer = null;
    if(gameState == 'Bob') {
      bobTimer = setTimeout(() => updateState(), 5000);
    }
    if(gameState == 'Hook') {
      hookTimer = setTimeout(() => hookFunc(), 5000);
    }

    return () => {
      if(bobTimer != null) {
	clearTimeout(bobTimer);
      }
      if(hookTimer != null) {
        clearTimeout(hookTimer);
      }
    };
  }, [gameState]);

  return (
    <div id='cont'>
      <div id='game' onClick={updateState} onKeyDown={handleKeyPress} tabIndex="0">
      <img src={Boat} id='boat'/>
        <img src={Water} id='water'/>
      </div>
    </div>
  );
}

export default Fishing;
