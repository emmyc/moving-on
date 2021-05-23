import React, { useState } from 'react';
import Caption from './components/Caption';
import Box from './assets/boxIcon.png';
import FrogPreview from './assets/frog-preview.svg';
import FrogSVG from './assets/frog.svg';
import IndexCardSVG from './assets/index-card.svg';
import NintendoSVG from './assets/nintendo.svg';
import DraggableWrapper from './components/DraggableWrapper';

import SeashellPreview from './assets/seashell-preview.svg';

import CookiePreview from './assets/cookie-preview.svg';


function FocusElement(props) {
  const [showFocusFocus, setShowFocusFocus] = useState(false);

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
              <button className='left-center-pos minimal-button' onClick={() => setShowFocusFocus(false)}>go back</button>
              <img src={props.focusFocusSVG} alt='index card' style={{ visibility: showFocusFocus ? 'visible' : 'hidden' }} />
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

const FISHING_FRIEND_HR_TXT = 'Fishing Friend.. you\'re pretty sure you have 1000+ hours on this baby';
export const GAME_ITEMS = [
  /*
    TEMPLATE:
    {
      explore: what to render on the explore page,
      focus: what to render upon clicking the item
      trashCaption: caption when item moved to discard
      keepCaption: caption when item moved to keep
      focusCaption: caption when item clicked 1st time
      overlayColor: color of the background overlat when item is clicked
    }

    TODO: possibly change captions to a single array?
  */
  {
    explore: <img src={FrogPreview} draggable='false' alt='A Frog Keychain, Nintendo, and Index Card' />,
    focus:
      <>
        <FocusElement focusSVG={IndexCardSVG} focusFocusSVG={IndexCardSVG}
          cssImageClass='background-notebook-image' cssColorClass='frog-green-overlay' focusCaption={FISHING_FRIEND_HR_TXT}/>
        <FocusElement focusSVG={NintendoSVG} focusFocusSVG={NintendoSVG}
          cssImageClass='background-notebook-image' cssColorClass='frog-green-overlay' focusCaption={FISHING_FRIEND_HR_TXT}/>
        <FocusElement focusSVG={FrogSVG} focusFocusSVG={FrogSVG}
          cssImageClass='background-notebook-image' cssColorClass='frog-green-overlay' focusCaption={FISHING_FRIEND_HR_TXT}/>
      </>,
    trashCaption: 'how the years have gone by...',
    keepCaption: 'i could never give this away!',
    focusCaption: 'a pile of stuff relating to Fishing Friend; a keychain of Sailor, the game cartridge, and a note. click on each item to interact',
    // overlayColor: 'rgba(31, 202, 48, 0.45)',
    background: <div className='background-notebook-image full-size'><div className='frog-green-overlay full-size' /></div>,
  },
  {
    explore: <img src={SeashellPreview} draggable='false' alt='SOMETHING' />,
    focus: <img src={Box} />,
    trashCaption: 'how the years have gone by...',
    keepCaption: 'i could never give this away!',
    focusCaption: 'owo whats this a cardboard box',
    background: <div className='background-notebook-image full-size'><div className='seashell-blue-overlay full-size' /></div>,
  },
  {
    explore: <img src={CookiePreview} draggable='false' alt='SOMETHING' />,
    focus: <img src={Box} />,
    trashCaption: 'how the years have gone by...',
    keepCaption: 'i could never give this away!',
    focusCaption: 'owo whats this a cardboard box',
    background: <div className='background-notebook-image full-size'><div className='fortune-pink-overlay full-size' /></div>,
  },
];