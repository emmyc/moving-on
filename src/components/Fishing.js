import React, {useEffect, useState, useRef} from 'react';
import '../styles/Fishing.scss';
import Water from '../assets/fishwater.png';
import BigWater from '../assets/fishwater2.png';
import Boat from '../assets/fishboat.png';
import Frog from '../assets/frogidle.gif';
import Frogbob from '../assets/frogcast.gif';
import Frogtug from '../assets/frogreel.gif';
import Frogcaught from '../assets/frogcatch.gif';
import Frogfail from '../assets/frogfail.gif';
import Textleft from '../assets/fishtl.png';
import Textright from '../assets/fishtr.png';

function Fishing() {

  var hc = 0;
  var alast = false;
  const [gameState, setGameState] = useState('Initial');
  const [froggy, setFroggy] = useState(Frog);
  const [textCount, setTextCount] = useState(1);
  const hookRef = useRef(hc);
  const adRef = useRef(alast);

  let updateState = () => {
    switch(gameState) {
    case 'Initial':
      setGameState('Bob');
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
      }
    } else {
      setGameState('Lose');
   }
  };

  let handleKeyPress = (e) => {
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

  let handleClick = () => {
    if(gameState == 'Initial' || gameState == 'Cast' || gameState == 'Fin' || gameState == 'Lose'){
      updateState();
    }
  };

  useEffect(() => {
    var bobTimer = null;
    var hookTimer = null;
    if(gameState == 'Initial') {
      setFroggy(Frog);
    //} else if(gameState == 'Cast') {

    } else if(gameState == 'Bob') {
      setFroggy(Frogbob);
      bobTimer = setTimeout(() => updateState(), 5000);
    } else if(gameState == 'Hook') {
      setFroggy(Frogtug);
      hookTimer = setTimeout(() => hookFunc(), 1500);
      setTextCount(2);
    } else if(gameState == 'Fin') {
      setFroggy(Frogcaught);
      hc = 0;
      hookRef.current = hc;
      setTextCount(3);
    } else if(gameState == 'Lose') {
      setFroggy(Frogfail);
      hc = 0;
      hookRef.current = hc;
      setTextCount(3);
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
      <div id='game' onClick={handleClick} onKeyDown={handleKeyPress} tabIndex="0">
      <img src={BigWater} id='bigwater'/>
        <img src={BigWater} id='bigwater2'/>
        <img src={Water} id='water'/>
        <img src={Water} id='water2'/>
            <img src={Boat} id='boat'/>
      <img src={froggy} id='frog'/>
        <img src={Textleft} id={'leftext' + textCount}/>
        <img src={Textright} id={'rightext' + textCount}/>
      </div>
    </div>
  );
}

export default Fishing;
