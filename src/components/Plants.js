import React, { useState, useEffect, useRef } from 'react';
import Caption from './Caption';

import '../styles/Plants.scss';

import RoomBackgroundPNG from '../assets/plants/room [no animated plants].png';
import CalatheaGIF from '../assets/plants/calathea.gif';
import MonsteraGIF from '../assets/plants/monstera.gif';
import PothosGIF from '../assets/plants/pothos.gif';
import PropogationGIF from '../assets/plants/propogation.gif';

const DEFAULT_PLANT_CAPTION = 'Click on each plant to interact';

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
      name: 'Propogation',
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

  const [displayArr, setDisplayArr] = useState([1, 1, 1, 1]);
  const [caption, setCaption] = useState(DEFAULT_PLANT_CAPTION);

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
            {loaded && plants.map((plantObj, i) => {
              return (
                <PlantObj src={plantObj.src} alt={plantObj.name + ' gif'} key={plantObj.name} caption={plantObj.name}
                  width={plantObj.baseWidth * roomWidth / roomBaseWidth}
                  leftMargin={(windowWidth - roomWidth) / 2 + plantObj.percLeftMargin * roomWidth}
                  topMargin={plantObj.percTopMargin * roomHeight}
                  setCaption={setCaption} stopDisplay={() => {
                    const newDisplayArr = [...displayArr];
                    newDisplayArr[i] = 0;
                    setDisplayArr(newDisplayArr);
                  }}
                />
              );
            }).filter((plant, index) => displayArr[index])}
          </div>
          <Caption caption={caption} />
        </>
      }
    </>
  );
}

function PlantObj(props) {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(false);
    props.setCaption(DEFAULT_PLANT_CAPTION);
    props.stopDisplay();
  };

  return (
    <>
      <img className='max-image pointer-hover' src={props.src} alt={props.alt}
        onClick={() => {setShowPopup(true); props.setCaption(props.caption); }}
        style={{
          width: props.width + 'px',
          marginLeft: props.leftMargin + 'px',
          marginTop: props.topMargin + 'px',
        }} />
      {showPopup &&
        <>
          <div className='plant-popup'>
            <span className='left-center-pos underline-item' onClick={() => { console.log('discarded'); handleClick(); }}>give away</span>
            <span className='right-center-pos underline-item' onClick={() => { console.log('kept'); handleClick(); }}>keep</span>
            <img className='max-image' src={props.src} alt='Plant popup' />
          </div>
        </>
      }

    </>
  );
}

export default Plants;