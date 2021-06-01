import React, { useState } from 'react';
import Caption from './components/Caption';
import NintendoFocusElement from './components/NintendoFocusElement';
import SeashellsFocusElement from './components/SeashellsFocusElement';
import PhotosFocusElement from './components/PhotosFocusElement';

import Box from './assets/boxIcon.png';
import FrogPreview from './assets/frog-preview.svg';
import FrogSVG from './assets/frog.svg';
import IndexCardSVG from './assets/index-card.svg';
import NintendoSVG from './assets/nintendo.svg';
import DraggableWrapper from './components/DraggableWrapper';
import SeashellPreview from './assets/seashell-preview.svg';
import CookiePreview from './assets/cookie-preview.svg';
import FieldbookPreview from './assets/fieldbook_icon.png';
import Fieldbook from './components/Fieldbook';
//import FoodJournal from './components/FoodJournal';
//import FoodIcon from './assets/fooddiary_icon.png';
import PhotosPreview from './assets/photos/photospreview.svg';
import Polaroid1SVG from './assets/photos/done1.svg';
import Polaroid1FocusSVG from './assets/photos/done1.jpg';
import Polaroid2SVG from './assets/photos/done2.svg';
import Polaroid2FocusSVG from './assets/photos/polaroid2.jpg';
//import Polaroid3SVG from './assets/photos/polaroid3.svg';
//import Polaroid3FocusSVG from './assets/photos/polaroid3.jpg';
import Polaroid1Video from './assets/photos/placeholdervideo.mp4';
import PostcardSVG from './assets/photos/postcard_back.svg';
import PostcardFocusElement from './components/PostcardFocusElement';

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
              <button className='left-center-pos underline-item' onClick={() => setShowFocusFocus(false)}>go back</button>
              <img src={props.focusFocusSVG} alt={'A picture of '+props.focusFocusSVG} draggable='false'
                // style={{ visibility: showFocusFocus ? 'visible' : 'hidden' }}
                />
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
      <div className='frog-focus'>
        <FocusElement focusSVG={IndexCardSVG} focusFocusSVG={IndexCardSVG}
          cssImageClass='background-notebook-image' cssColorClass='frog-green-overlay' focusCaption={FISHING_FRIEND_HR_TXT}/>
        <NintendoFocusElement focusSVG={NintendoSVG}
          cssImageClass='background-notebook-image' cssColorClass='frog-green-overlay' focusCaption={FISHING_FRIEND_HR_TXT}/>
        <FocusElement focusSVG={FrogSVG} focusFocusSVG={FrogSVG}
          cssImageClass='background-notebook-image' cssColorClass='frog-green-overlay' focusCaption={FISHING_FRIEND_HR_TXT}/>
      </div>,
    trashCaption: 'how the years have gone by...',
    keepCaption: 'i could never give this away!',
    focusCaption: 'a pile of stuff relating to Fishing Friend; a keychain of Sailor, the game cartridge, and a note. click on each item to interact',
    // overlayColor: 'rgba(31, 202, 48, 0.45)',
    background: <div className='background-notebook-image full-size'><div className='frog-green-overlay full-size' /></div>,
  },
  {
    explore: <img src={SeashellPreview} draggable='false' alt='SOMETHING' />,
    focus: <SeashellsFocusElement />,
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
  /*fieldbook*/
  {
    explore: <img src={FieldbookPreview} draggable='false' alt='SOMETHING' />,
    focus: <Fieldbook/>,
    trashCaption: 'It might be time to let this go. Tossing this might give me some more closure.',
    keepCaption: 'I can\'t believe she drew all these pictures for me. It was so sweet. I\'ll keep this for the memories. Maybe our paths will cross again someday.',
    focusCaption: 'Oh my goodness, I haven\'t opened this up since we broke up.',
    background: <div className='background-notebook-image full-size'><div className='fieldbook-blue1-overlay full-size' /></div>,
  },
  /*{
    explore: <img src={FoodIcon} draggable='false' alt='SOMETHING' />,
    focus: <FoodJournal/>,
    trashCaption: 'i\'m not hungry',
    keepCaption: 'munch munch',
    focusCaption: 'food is so good',
    background: <div className='background-notebook-image full-size'><div className='foodjournal-green-overlay full-size' /></div>,
  },*/
  {
    explore: <img src={PhotosPreview} draggable='false' alt='Stack of polaroids'></img>,
    focus: <div className='photos-focus'>
      <PhotosFocusElement imgStyle='polaroid1' videoSource={Polaroid1Video} focusSVG={Polaroid1SVG} focusFocusSVG={Polaroid1FocusSVG}
        cssImageClass='background-camera-image' cssColorClass='photos-orange-overlay'
        focusCaption='Senior sunrise &apos;20...you can hear the beach around you. Click to remember.' />
      <PhotosFocusElement imgStyle='polaroid2' focusSVG={Polaroid2SVG} focusFocusSVG={Polaroid2FocusSVG}
        cssImageClass='background-camera-image' cssColorClass='photos-orange-overlay'
        focusCaption='c/o 2020 May 21 grad!' />
      {/*<PhotosFocusElement imgStyle='polaroid3' focusSVG={Polaroid3SVG} focusFocusSVG={Polaroid3FocusSVG}
        cssImageClass='background-camera-image' cssColorClass='photos-orange-overlay'
        focusCaption='♪ sidewalks we crossed ♪' />*/}
      <PostcardFocusElement focusSVG={PostcardSVG}
        cssImageClass='background-camera-image' cssColorClass='photos-orange-overlay'
        focusCaption='need to make a caption blah blah. Click to flip the postcard.' />
    </div>,
    trashCaption: 'how the years have gone by...',
    keepCaption: 'i could never give this away!',
    focusCaption: 'a stack of polaroids from over the years...[double click to inspect]',
    background: <div className='background-notebook-image full-size'><div className='frog-green-overlay full-size' /></div>,
  },
];