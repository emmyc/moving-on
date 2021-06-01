import React, { useState } from 'react';

import Caption from './Caption';
import DraggableWrapper from './DraggableWrapper';

import NintendoSVG from '../assets/nintendo.svg';
import FullSwitchSVG from '../assets/full-switch.svg';
import Fishing from './Fishing';

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

  /*
  const centerStyle = {
    position: 'relative',
    transform: 'rotate(0)',
    top: 'initial',
    right: 'initial',
  };
*/

  /*
  const gridStyle = {
    position: 'absolute',
    top: '0px',
    right: '0px',
    display: 'grid',
    gridTemplateColumns: '1385px',
    gridTemplateRows: '634px',
    gridTemplateAreas: 'mid',
  };

  const gridCenterStyle = {
    gridArea: 'mid',
    alignSelf: 'center',
    justifySelf: 'center',
  };
*/
  const absCenterStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const switchCenterStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    marginLeft: '-5px',
  };

  const d1 = (<div></div>);
  const d2 = (<Fishing />);

  return (
    <>
      <img src={NintendoSVG} alt='Nintendo Game Card Image' style={{ display: onFirst ? 'inline-flex' : 'none' }} draggable='false' />
        <img className='nintendo-image' src={FullSwitchSVG} alt='Nintendo Switch Image' onClick={moveSwitchToCenter} draggable='false'
          style={onFirst ? cornerStyle : switchCenterStyle} />
        <div style={absCenterStyle}>
        {onFirst ? d1 : d2}
      </div>
    </>
  );
}

export default NintendoFocusElement;
