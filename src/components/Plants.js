import React, { useState, useEffect, useRef } from 'react';
import Caption from './Caption';

import '../styles/Plants.scss';

// import AllPlantsBackgroundSVG from '../assets/plants/all-plants-background.png';
import RoomBackgroundPNG from '../assets/plants/room [no animated plants].png';
import CalatheaGIF from '../assets/plants/calathea.gif';
import MonsteraGIF from '../assets/plants/monstera.gif';
import PothosGIF from '../assets/plants/pothos.gif';
import PropogationGIF from '../assets/plants/propogation.gif';

function Plants() {
  const roomBaseWidth = 3999;
  const plants = [
    {
      name: 'Calathea',
      src: CalatheaGIF,
      baseWidth: 1300,
      percLeftMargin: 0.27,
      percTopMargin: 0.5,
    },
    {
      name: 'Monstera',
      src: MonsteraGIF,
      baseWidth: 800,
      percLeftMargin: 0.6,
      percTopMargin: 0.37,
    },
    {
      name: 'Pothos',
      src: PothosGIF,
      baseWidth: 1000,
      percLeftMargin: 0.07,
      percTopMargin: 0.47,
    },
    {
      name: 'Progation',
      src: PropogationGIF,
      baseWidth: 800,
      percLeftMargin: 0.17,
      percTopMargin: 0.56,
    },
  ];

  const [showingPreview, setShowingPreview] = useState(true);
  const backgroundRef = useRef();
  const [windowWidth, setWindowWidth] = useState();
  const [roomWidth, setRoomWidth] = useState();
  const [roomHeight, setRoomHeight] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowingPreview(false), 500);
    window.addEventListener('resize', updateImageSizes);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updateImageSizes);
    };
  }, []);

  const updateImageSizes = () => {
    const roomDimensions = backgroundRef.current.getBoundingClientRect();
    setRoomHeight(roomDimensions.height);
    setRoomWidth(roomDimensions.width);
    setWindowWidth(window.innerWidth);
    setLoaded(true);
  };

  return (
    <>
      { showingPreview ?
        <div className='plant-preview'>
          you look towards your window to look at your plants basking in the sunlight.
        </div>
        :
        <>
          <div className='plants-container'>
            <img ref={backgroundRef} id='background' onLoad={updateImageSizes} className='max-image' src={RoomBackgroundPNG} alt='Background Image of A window with Plants next to it' />
            {loaded && plants.map((plantObj) => {
              return (
                <img className='max-image' src={plantObj.src} alt={plantObj.name + ' gif'} key={plantObj.name}
                  style={{
                    width: plantObj.baseWidth * roomWidth / roomBaseWidth + 'px',
                    marginLeft: (windowWidth - roomWidth) / 2 + plantObj.percLeftMargin * roomWidth+'px',
                    marginTop: plantObj.percTopMargin * roomHeight+'px',
                  }} />
              );
            })}
          </div>
          <Caption caption={''} />
        </>
      }
    </>
  );
}

// function PlantObj(props) {
//   const [showPopup, setShowPopup] =useState(false);
//   return (
//     <>
//     <img className='max-image' src={plantObj.src} alt={plantObj.name + ' gif'} key={plantObj.name}
//       onClick={() => setShowPopup(true)}
//       style={{
//         width: props.width+ 'px',
//         marginLeft: props.leftMargin+'px',
//         marginTop: props.topMargin+'px',
//       }} />

//     </>
//   );
// };
export default Plants;