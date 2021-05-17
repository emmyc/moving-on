import React from 'react';
import Box from './assets/boxIcon.png';

export const GAME_ITEMS = [
  /*
    TEMPLATE:
    {
      explore: what to render on the explore page,
      focus: what to render upon clicking the item
      trashCaption: caption when item moved to discard
      keepCaption: caption when item moved to keep
      focusCaption: caption when item clicked 1st time
    }

    TODO: possibly change captions to a single array?
  */
  {
    explore: <div>test1</div>,
    focus: <img src={Box} />,
    trashCaption: 'how the years have gone by...',
    keepCaption: 'i could never give this away!',
    focusCaption: 'owo whats this a cardboard box',
  },
  {
    explore: <div>test2</div>,
    focus: <img src={Box} />,
    trashCaption: 'how the years have gone by...',
    keepCaption: 'i could never give this away!',
    focusCaption: 'owo whats this a cardboard box',
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
  },
];