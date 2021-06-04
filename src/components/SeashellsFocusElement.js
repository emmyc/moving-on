import React, { useState } from 'react';
import Caption from '../components/Caption';
import DraggableWrapper from '../components/DraggableWrapper';

import Seashell1SVG from '../assets/seashells/seashell1.svg';
import Seashell2SVG from '../assets/seashells/seashell2.svg';
import Seashell3SVG from '../assets/seashells/seashell3.svg';
import Seashell4SVG from '../assets/seashells/seashell4.svg';
import Seashell5SVG from '../assets/seashells/seashell5.svg';
import Seashell6SVG from '../assets/seashells/seashell6.svg';
import Seashell7SVG from '../assets/seashells/seashell7.svg';
import SeashellBoxClosedSVG from '../assets/seashell-box-closed.svg';
import SeashellBoxOpenSVG from '../assets/seashell-box-open.svg';

function SeashellsFocusElement() {
  const [caption, setCaption] = useState('Shells you\'ve collected, both at home and here at school. (Click the box, and hover over each shell)');
  const [closed, setClosed] = useState(true);
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
      <div className='seashells-grid'>
        {closed ? <img className='pointer' src={SeashellBoxClosedSVG} alt='Seashells' draggable='false' onClick={() => setClosed(false)} />
          :
          <>
            <img className='pointer' src={SeashellBoxOpenSVG} alt='Seashells' draggable='false' onClick={() => setClosed(true)} />
            <DraggableWrapper>
              <img src={Seashell5SVG} alt={'A picture of a Seashell'} draggable='false'
                className='tilt-1' onMouseEnter={() => setCaption(captionMSG[4])} />
            </DraggableWrapper>

            <div className='right-col'>
              <DraggableWrapper>
                <img src={Seashell3SVG} alt={'A picture of a Seashell'} draggable='false'
                  onMouseEnter={() => setCaption(captionMSG[2])} />
              </DraggableWrapper>
              <DraggableWrapper>
                <img src={Seashell4SVG} alt={'A picture of a Seashell'} draggable='false'
                  className='tilt-2' onMouseEnter={() => setCaption(captionMSG[3])} />
              </DraggableWrapper>
            </div>

            <div className='lower-left-box'>
              <div id='top-row' className='flex-row'>
                <DraggableWrapper>
                  <img src={Seashell1SVG} alt={'A picture of a Seashell'} draggable='false'
                    className='tilt-3' onMouseEnter={() => setCaption(captionMSG[0])} />
                </DraggableWrapper>
                <DraggableWrapper>
                  <img src={Seashell6SVG} alt={'A picture of a Seashell'} draggable='false'
                    onMouseEnter={() => setCaption(captionMSG[5])} />
                </DraggableWrapper>
              </div>
              <div id='bottom-row' className='flex-row'>
                <DraggableWrapper>
                  <img src={Seashell2SVG} alt={'A picture of a Seashell'} draggable='false'
                    onMouseEnter={() => setCaption(captionMSG[1])} />
                </DraggableWrapper>
                <DraggableWrapper>
                  <img src={Seashell7SVG} alt={'A picture of a Seashell'} draggable='false'
                    onMouseEnter={() => setCaption(captionMSG[6])} />
                </DraggableWrapper>
              </div>
            </div>
          </>
        }
      </div>
      {caption !== undefined &&
        <Caption caption={caption} />
      }
    </>
  );
}

export default SeashellsFocusElement;