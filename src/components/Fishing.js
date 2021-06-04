import React, {useEffect, useState, useRef} from 'react';
import '../styles/Fishing.scss';
//import BigWater from '../assets/fishwater.png';
//import BigWater from '../assets/fishwater2.png';
//import Back from '../assets/fishback.png';
//import Boat from '../assets/fishboat.png';
import Frog from '../assets/fishing/frogidle.gif';
import Frogbob from '../assets/fishing/frogcast.gif';
import Frogtug from '../assets/fishing/frogreel.gif';
import Frogcaught from '../assets/fishing/frogcatch.gif';
import Frogfail from '../assets/fishing/frogfail.gif';
import Frogreelin from '../assets/fishing/frogreelin.gif';
import Textleft from '../assets/fishing/textleftw.png';
import Textright from '../assets/fishing/textright.png';
import Textleftl from '../assets/fishing/textleftl.png';
import BoatWater from '../assets/fishing/boatwater.gif';

function Fishing() {

  var hc = 0;
  var alast = false;
  const [gameState, setGameState] = useState('Initial');
  const [froggy, setFroggy] = useState(Frog);
  const [frogFrame, setFrogFrame] = useState(1);
  const [lTextCount, setLTextCount] = useState(1);
  const [rTextCount, setRTextCount] = useState(1);
  const [lTextImg, setLTextImg] = useState(Textleft);
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
      setGameState('Reelin');
      break;
    case 'Reelin':
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
      setGameState('Reelose');
   }
  };

  let handleKeyPress = (e) => {
    if(gameState == 'Hook') {
      if(e.keyCode == 65 && !adRef.current){
        hc++;
	hookRef.current = hc;
	alast = !alast;
	adRef.current = alast;
      } else if(e.keyCode == 66 && adRef.current){
        hc++;
	hookRef.current = hc;
	alast = !alast;
	adRef.current = alast;
      }
    }
  };

  let handleClick = () => {
    if(gameState == 'Initial' || gameState == 'Cast'){
      updateState();
      console.log(lTextCount);
      console.log(rTextCount);
    }
  };

  useEffect(() => {
    var bobTimer = null;
    var hookTimer = null;
    var reelTimer = null;
    var lt1Timer = null;
    var rt1Timer = null;
    var lt2Timer = null;
    var rt2Timer = null;
    var lt3Timer = null;
    if(gameState == 'Initial') {
      setFrogFrame(1);
      setFroggy(Frog);
      rt1Timer = setTimeout(() => setRTextCount(2), 1000);
      lt1Timer = setTimeout(() => setLTextCount(2), 2500);
    //} else if(gameState == 'Cast') {
    } else if(gameState == 'Bob') {
      setFrogFrame(3);
      setRTextCount(3);
      lt2Timer = setTimeout(() => setLTextCount(3), 2000);
      rt2Timer = setTimeout(() => setRTextCount(4), 3500);
      lt3Timer = setTimeout(() => setLTextCount(4), 5000);
      setFroggy(Frogbob);
      bobTimer = setTimeout(() => updateState(), 10000);
    } else if(gameState == 'Hook') {
      setFrogFrame(4);
      setLTextCount(5);
      setFroggy(Frogtug);
      hookTimer = setTimeout(() => hookFunc(), 3500);
    } else if(gameState == 'Reelin') {
      setFrogFrame(3);
      setFroggy(Frogreelin);
      reelTimer = setTimeout(() => updateState(), 2000);
    } else if(gameState == 'Reelose') {
      setFrogFrame(3);
      setFroggy(Frogreelin);
      reelTimer = setTimeout(() => setGameState('Lose'), 2000);
    } else if(gameState == 'Fin') {
      setFrogFrame(2);
      setFroggy(Frogcaught);
      setLTextCount(6);
      setRTextCount(5);
      hc = 0;
      hookRef.current = hc;
    } else if(gameState == 'Lose') {
      setFrogFrame(1);
      setFroggy(Frogfail);
      setLTextImg(Textleftl);
      setLTextCount(7);
      hc = 0;
      hookRef.current = hc;
    }

    return () => {
      if(bobTimer != null) {
	clearTimeout(bobTimer);
      }
      if(hookTimer != null) {
        clearTimeout(hookTimer);
      }
      if(lt1Timer != null) {
        clearTimeout(lt1Timer);
      }
      if(rt1Timer != null) {
        clearTimeout(rt1Timer);
      }
      if(lt2Timer != null) {
        clearTimeout(lt2Timer);
      }
      if(rt2Timer != null) {
        clearTimeout(rt2Timer);
      }
      if(lt3Timer != null) {
        clearTimeout(lt3Timer);
      }
      if(reelTimer != null) {
        clearTimeout(reelTimer);
      }
    };
  }, [gameState]);

  return (
    <div id='cont'>
      <div id='game' onClick={handleClick} onKeyDown={handleKeyPress} tabIndex="0">
      <img src={BoatWater} id='back' />
        <img src={froggy} id={'frog' + frogFrame}/>
        <img src={lTextImg} id={'leftext' + lTextCount}/>
        <img src={Textright} id={'rightext' + rTextCount}/>
      </div>
    </div>
  );
}

export default Fishing;
