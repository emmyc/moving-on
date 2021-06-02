import React, { useState } from 'react';

import Caption from './Caption';
import DraggableWrapper from './DraggableWrapper';

import NintendoSVG from '../assets/nintendo.svg';
import FullSwitchSVG from '../assets/full-switch.svg';

import '../styles/FocusElement.scss';


function NintendoFocusElement(props) {
  const [showFocusFocus, setShowFocusFocus] = useState(false);
  const [caption, setCaption] = useState();

  return (
    <>
      <div className='over-focus'>
        <DraggableWrapper click={() => { setShowFocusFocus(true); console.log('clicked focus element'); }}>
          <img src={props.focusSVG} draggable='false' alt='index card' />
        </DraggableWrapper>
      </div>
      {showFocusFocus &&
        <>
          <div className={'background ' + props.cssImageClass}>
            <div className={'frog-focus-focus ' + props.cssColorClass}>
              <button className='left-center-pos underline-item' onClick={() => setShowFocusFocus(false)}>go back</button>
              <NintendoGameIntro setCaption={setCaption}/>
            </div>
          </div>
          {caption !== undefined &&
            <Caption caption={caption} />
          }
        </>
      }
    </>
  );
}

function NintendoGameIntro(props) {
  const [onFirst, setOnFirst] = useState(true);
  const SWITCH_CAPTION = 'its been a while since youve played on your nintendo switch lite, but it’s still as sunny yellow as you remember it to be.';

  const moveSwitchToCenter = () => {
    if (onFirst) {
      setOnFirst(false);
      props.setCaption(SWITCH_CAPTION);
    }
  };
  const cornerStyle = {
    position: 'fixed',
    transform: 'rotate(-19.34)',
    top: '-121px',
    right: '-970px',
  };

  const centerStyle = {
    position: 'relative',
    transform: 'rotate(0)',
    top: 'initial',
    right: 'initial',
  };
  return (
    <>
      <img src={NintendoSVG} alt='Nintendo Game Card Image' style={{ display: onFirst ? 'inline-flex' : 'none' }} draggable='false' />
      <img className='nintendo-image' src={FullSwitchSVG} alt='Nintendo Switch Image' onClick={moveSwitchToCenter} draggable='false'
        style={onFirst ? cornerStyle : centerStyle} />
    </>
  );
}

export default NintendoFocusElement;