import React from 'react';
import Box from './assets/boxIcon.png';
import FrogPreview from './assets/frog-preview.svg';
import FrogSVG from './assets/frog.svg';
import IndexCardSVG from './assets/index-card.svg';
import NintendoSVG from './assets/nintendo.svg';
import DraggableWrapper from './components/DraggableWrapper';

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
      <DraggableWrapper>
      <img src={IndexCardSVG} draggable='false' alt='index card'/>
      </DraggableWrapper>
      <DraggableWrapper>
      <img src={NintendoSVG} draggable='false' alt='nintendo switch'/>
      </DraggableWrapper>
      <DraggableWrapper>
      <img src={FrogSVG} draggable='false' alt='frog keychain'/>
      </DraggableWrapper>
    </>,
    trashCaption: 'how the years have gone by...',
    keepCaption: 'i could never give this away!',
    focusCaption: 'owo whats this a cardboard box',
    overlayColor: 'rgba(31, 202, 48, 0.45)',
  },
  {
    explore: <div>test2</div>,
    focus: <img src={Box} />,
    trashCaption: 'how the years have gone by...',
    keepCaption: 'i could never give this away!',
    focusCaption: 'owo whats this a cardboard box',
    overlayColor: 'rgba(118, 118, 118, 0.73)',
  },
  {
    explore:
    <p>
      Hello World!<br />
      I am draggable!
    </p>,
    focus: <img src={Box} />,
    trashCaption: 'how the years have gone by...',
    keepCaption: 'i could never give this away!',
    focusCaption: 'owo whats this a cardboard box',
    overlayColor: 'rgba(118, 118, 118, 0.73)',
  },
];