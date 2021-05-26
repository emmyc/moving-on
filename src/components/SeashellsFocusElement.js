import React, { useState } from 'react';
import Caption from '../components/Caption';

import Seashell1SVG from '../assets/seashells/seashell1.svg';
import Seashell2SVG from '../assets/seashells/seashell2.svg';
import Seashell3SVG from '../assets/seashells/seashell3.svg';
import Seashell4SVG from '../assets/seashells/seashell4.svg';
import Seashell5SVG from '../assets/seashells/seashell5.svg';
import SeashellBoxSVG from '../assets/seashell-box.svg';

function SeashellsFocusElement() {
  const [caption, setCaption] = useState('Shells you\'ve collected, both at home and here at school. hover for more information');
  const seashells = [Seashell1SVG, Seashell2SVG, Seashell3SVG, Seashell4SVG, Seashell5SVG];
  const captionMSG = ['seashell 1', 'seashell 2', 'seashell 3', 'seashell 4', 'seashell5'];

  return (
    <>
    <div className='seashells-focus'>
      <img src={SeashellBoxSVG} alt='Seashells' draggable='false'/>
      <div className='seashells-grid'>
        {seashells.map((src, i) => <img src={src} alt={'A picture of ' + src} draggable='false' key={i}
          onMouseEnter={() => setCaption(captionMSG[i])} />)}
      </div>
      </div>
      {caption !== undefined &&
        <Caption caption={caption} />
      }
    </>
  );
}

export default SeashellsFocusElement;