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
  const [caption, setCaption] = useState('Shells you\'ve collected, both at home and here at school. hover for more information');
  // const seashells = [Seashell1SVG, Seashell2SVG, Seashell3SVG, Seashell4SVG, Seashell5SVG, Seashell6SVG, Seashell7SVG];
  // const captionMSG = ['seashell 1', 'seashell 2', 'seashell 3', 'seashell 4', 'seashell 5', 'seashell 6', 'seashell 7'];

  return (
    <>
      {/* <div className='seashells-focus'> */}
      <div className='seashells-grid'>
        <img src={SeashellCard} alt='Seashells' draggable='false' />
        <img src={Seashell5SVG} alt={'A picture of a Seashell'} draggable='false'
          className='tilt-1' onMouseEnter={() => setCaption('seashell 5')} />

        <div className='right-col'>
          <img src={Seashell3SVG} alt={'A picture of a Seashell'} draggable='false'
            onMouseEnter={() => setCaption('seashell 3')} />
          <img src={Seashell4SVG} alt={'A picture of a Seashell'} draggable='false'
            className='tilt-2' onMouseEnter={() => setCaption('seashell 4')} />
        </div>

        <div className='lower-left-box'>
          <div id='top-row' className='flex-row'>
            <img src={Seashell1SVG} alt={'A picture of a Seashell'} draggable='false'
              className='tilt-3' onMouseEnter={() => setCaption('seashell 1')} />
            <img src={Seashell6SVG} alt={'A picture of a Seashell'} draggable='false'
              onMouseEnter={() => setCaption('seashell 6')} />
          </div>
          <div id='bottom-row' className='flex-row'>
            <img src={Seashell2SVG} alt={'A picture of a Seashell'} draggable='false'
              onMouseEnter={() => setCaption('seashell 2')} />
            <img src={Seashell7SVG} alt={'A picture of a Seashell'} draggable='false'
              onMouseEnter={() => setCaption('seashell 7')} />
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