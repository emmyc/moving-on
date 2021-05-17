import React from 'react';

import Box from './assets/boxIcon.png';

export const GAME_ITEMS = [
  {
    explore: <div>test</div>,
    focus: <img style={{zIndex: '99'}} src={Box} />,
    trashCaption: 'how the years have gone by...',
    keepCaption: 'i could never give this away!',
  },
  {
    explore: <div>test2</div>,
    focus: <img src={Box} />,
    trashCaption: 'how the years have gone by...',
    keepCaption: 'i could never give this away!',
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
  },
];