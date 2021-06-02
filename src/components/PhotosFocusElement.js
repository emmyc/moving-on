import React, { useState } from 'react';

import Caption from './Caption';
import DraggableWrapper from './DraggableWrapper';
import '../styles/FocusElement.scss';

function PhotosFocusElement(props) {
    const [showFocusFocus, setShowFocusFocus] = useState(false);
    const [showImage, setShowImage] = useState(true);

    const videoStyle = {
      width: '325px',
    };

    return (
      <>
        <div className='over-focus'>
          <DraggableWrapper click={() => { setShowFocusFocus(true); console.log('clicked focus element'); }}>
            <img className={props.imgStyle} src={props.focusSVG} draggable='false' alt='index card' />
          </DraggableWrapper>
        </div>
        {showFocusFocus && showImage &&
          <>
            <div className={'background ' + props.cssImageClass}>
              <div className={'frog-focus-focus ' + props.cssColorClass}>
                <button className='left-center-pos underline-item' onClick={() => setShowFocusFocus(false)}>go back</button>
                <img src={props.focusFocusSVG} alt={'A picture of '+props.focusFocusSVG} draggable='false'
                  // style={{ visibility: showFocusFocus ? 'visible' : 'hidden' }}
                  onClick={() => props.videoSource && setShowImage(false)}
                  />
              </div>
            </div>
            {props.focusCaption !== undefined &&
              <Caption caption={props.focusCaption} />
            }
          </>
        }
        {showFocusFocus && !showImage &&
        <>
          <div className={'background ' + props.cssImageClass}>
              <div className={'frog-focus-focus polaroid-video-background'}>
                <button className='left-center-pos underline-item white-text' onClick={() => setShowImage(true)}>go back</button>
                <video style={videoStyle} loop autoPlay muted>
                  <source src={props.videoSource} type='video/mp4'/>
                </video>
              </div>
            </div>
            {props.focusCaption !== undefined &&
              <Caption caption={props.focusCaption} />
            }
        </>
        }
      </>
    );
  }

export default PhotosFocusElement;