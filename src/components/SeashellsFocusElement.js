import React, { useState } from 'react';
import Caption from '../components/Caption';

import Seashell1SVG from '../assets/seashells/seashell1.svg';
import Seashell2SVG from '../assets/seashells/seashell2.svg';
import Seashell3SVG from '../assets/seashells/seashell3.svg';
import Seashell4SVG from '../assets/seashells/seashell4.svg';
import Seashell5SVG from '../assets/seashells/seashell5.svg';
import Seashell6SVG from '../assets/seashells/seashell6.svg';
import Seashell7SVG from '../assets/seashells/seashell7.svg';
// import SeashellBoxSVG from '../assets/seashell-box.svg';
import SeashellCard from '../assets/seashell-preview.svg';

function SeashellsFocusElement() {
  const [caption, setCaption] = useState('Shells you\'ve collected, both at home and here at school. (Hover for more information)');
  // const seashells = [Seashell1SVG, Seashell2SVG, Seashell3SVG, Seashell4SVG, Seashell5SVG, Seashell6SVG, Seashell7SVG];
  const captionMSG =
    ['I\'m not sure what this one is, but I love the ridges on it. I found this one the same day I found the sea urchin skeleton—what a day for shell collecting!',
      'My mom found this scallop shell for me in 3rd grade. I remember thinking it would be fun to try and use it as a spoon. ',
      'One of my favorites—this sea urchin skeleton is from when I went to the tide pools with my best friend in high school. The texture is super cool.',
      'A shark eye shell. I remember finding this on the beach after graduation; it was the first time I\'d found such a perfect one of these.',
      'My best friend found this for me when we went to the beach in 7th grade. I love the stripes and colors. ',
      'This one\'s a bit broken. I found it on my first trip to the beach here at school, when I went by myself.  ',
      'I found this on one of my later trips to the beach here at school—it\'s tiny, but I couldn\'t find anything bigger.'];

  return (
    <>
      {/* <div className='seashells-focus'> */}
      <div className='seashells-grid'>
        <img src={SeashellCard} alt='Seashells' draggable='false' />
        <img src={Seashell5SVG} alt={'A picture of a Seashell'} draggable='false'
          className='tilt-1' onMouseEnter={() => setCaption(captionMSG[4])} />

        <div className='right-col'>
          <img src={Seashell3SVG} alt={'A picture of a Seashell'} draggable='false'
            onMouseEnter={() => setCaption(captionMSG[2])} />
          <img src={Seashell4SVG} alt={'A picture of a Seashell'} draggable='false'
            className='tilt-2' onMouseEnter={() => setCaption(captionMSG[3])} />
        </div>

        <div className='lower-left-box'>
          <div id='top-row' className='flex-row'>
            <img src={Seashell1SVG} alt={'A picture of a Seashell'} draggable='false'
              className='tilt-3' onMouseEnter={() => setCaption(captionMSG[0])} />
            <img src={Seashell6SVG} alt={'A picture of a Seashell'} draggable='false'
              onMouseEnter={() => setCaption(captionMSG[5])} />
          </div>
          <div id='bottom-row' className='flex-row'>
            <img src={Seashell2SVG} alt={'A picture of a Seashell'} draggable='false'
              onMouseEnter={() => setCaption(captionMSG[1])} />
            <img src={Seashell7SVG} alt={'A picture of a Seashell'} draggable='false'
              onMouseEnter={() => setCaption(captionMSG[6])} />
          </div>
        </div>
        {/* {seashells.map((src, i) => <img src={src} alt={'A picture of ' + src} draggable='false' key={i}
            onMouseEnter={() => setCaption(captionMSG[i])} />)} */}
      </div>
      {/* </div> */}
      {caption !== undefined &&
        <Caption caption={caption} />
      }
    </>
  );
}

export default SeashellsFocusElement;