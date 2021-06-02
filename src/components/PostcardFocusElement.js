import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import Caption from './Caption';
import DraggableWrapper from './DraggableWrapper';
import PostcardBack from '../assets/photos/postcard_back.jpg';
import PostcardFront from '../assets/photos/postcard_front.jpg';


function PostcardFocusElement(props) {
  const [showFocusFocus, setShowFocusFocus] = useState(false);
  const [showBack, setShowBack] = useState(true);

  /*const imageClick = () => {
      if (props.video !== undefined)
          props.video.play();
  };*/

  const postcardStyle = {
    width: '866px',
    height: '577px',
    boxShadow: '30px 30px 30px 3px rgba(0, 0, 0, 0.25)',
  };

  return (
    <>
      <div className='over-focus'>
        <DraggableWrapper className='postcard' click={() => { setShowFocusFocus(true); console.log('clicked focus element'); }}>
          <img src={props.focusSVG} draggable='false' alt='index card' />
        </DraggableWrapper>
      </div>
      {showFocusFocus &&
      <>
        <div className={'background ' + props.cssImageClass}>
            <div className={'frog-focus-focus ' + props.cssColorClass}>
              <button className='left-center-pos underline-item' onClick={() => setShowFocusFocus(false)}>go back</button>
              <ReactCardFlip isFlipped={!showBack} flipDirection='horizontal'>
                <div className='back'>
                  <img src={PostcardBack} alt={'A picture of postcard back'} draggable='false' style={postcardStyle}
                    // style={{ visibility: showFocusFocus ? 'visible' : 'hidden' }}
                    onClick={() => setShowBack(false)}
                    />
                </div>
                <div className='front'>
                  <img src={PostcardFront} alt={'A picture of postcard front'} draggable='false' style={postcardStyle}
                    // style={{ visibility: showFocusFocus ? 'visible' : 'hidden' }}
                    onClick={() => setShowBack(true)}
                    />
                </div>
              </ReactCardFlip>
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

/*function PhotosFocusElement() {
    const caption='a stack of polaroids from over the years...[double click on a photo to inspect]';

    return(
        <>
            <div className='photo-focus'>
                <img src={polaroid1}></img>
            </div>
            <Caption caption={caption}/>
        </>
    );

}*/

export default PostcardFocusElement;