import React, { useState, useEffect } from 'react';
import Caption from './Caption';

import '../styles/Plants.scss';

import AllPlantsBackgroundSVG from '../assets/plants/all-plants-background.png';

function Plants() {
  const [showingPreview, setShowingPreview] = useState(true);
  // const [caption, setCaption] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => setShowingPreview(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      { showingPreview ?
        <div className='plant-preview'>
          you look towards your window to look at your plants basking in the sunlight.
        </div>
        :
        <>
          <div className='plants-container'>
            <img className='max-image' src={AllPlantsBackgroundSVG} alt='Background Image of A window with Plants next to it'/>
          </div>
          <Caption caption={''} />
        </>
      }
    </>
  );
}
export default Plants;