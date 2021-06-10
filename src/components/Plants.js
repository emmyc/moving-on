import React, { useContext, useState, useEffect, useRef } from 'react';
import Caption from './Caption';
import { GameContext } from './GameWrapper';
import ITEM_STATES from '../constants';
import FadeIn from 'react-fade-in';

import '../styles/Plants.scss';

import RoomBackgroundPNG from '../assets/plants/room [no animated plants].png';
import CalatheaGIF from '../assets/plants/calathea.gif';
import MonsteraGIF from '../assets/plants/monstera.gif';
import PothosGIF from '../assets/plants/pothos.gif';
import PropogationGIF from '../assets/plants/propogation.gif';

const DEFAULT_PLANT_CAPTION = 'Click on each plant to interact';

function Plants() {
  const { handleDrop, plantStates, setPlantStates } = useContext(GameContext);
  const roomBaseWidth = 3999;
  const plants = [
    {
      name: 'Calathea',
      src: CalatheaGIF,
      caption: 'dusk settled on the ground, dying in the shadows of the room.',
      narrative:
        <>
          <p>you received this particular plant from [ ],
             whose relationship with you has also withered into nothingness.</p>
          <p>when they went through a bad breakup, you were there to extend a hand.
          at first, it was alright; they’d reply immediately to your texts,
              bring over ice cream for movie nights, plan whole outings to distract from the pain.</p>
          <p>but eventually, the texts became constant cries for help and pleas for validation.
          the movie nights became sobbing sessions that depleted your tissue supply.
              and the outings interfered with your busy life, much to their annoyance.</p>
          <p>you found yourself withdrawing, unable and unwilling to allow them to continue
             depleting your time and energy. and soon enough, dusk fell.</p>
        </>,
      keep: 'save your plant',
      discard: 'some things are too far gone; it’s time to say bye',
      baseWidth: 1300,
      percLeftMargin: 0.27,
      percTopMargin: 0.5,
    },
    {
      name: 'Monstera',
      src: MonsteraGIF,
      caption: 'in the glow of citylights sits moonrise, your elegant monstera albo plant.',
      narrative:
        <>
          <p>with its dual colored leaves, you’re reminded of your high school friend [ ],
           whose vibrant friendship has brought beauty and balance into your life.<br /><br />
          the contrasts and intricacies of your personalities just seem to
          effortlessly complement one another. and even as time passes wordlessly,
            whenever you need them, their lovely spirit enters to shine through the darkness. <br /><br />
          it’s been a while since your last catch-up session with them, but you’re not too worried.
           for whatever reason, you feel assured that everything will be ok.</p>
        </>,
      keep: 'hold onto this! it’s a good reminder your friend’s always got your back',
      discard: 'there’s no need to keep this with you',
      baseWidth: 800,
      percLeftMargin: 0.6,
      percTopMargin: 0.37,
    },
    {
      name: 'Pothos',
      src: PothosGIF,
      caption: 'your golden pothos is chilling on the shelf, confidently fanning its many green leaves.',
      narrative:
        <>
          <p>brilliant and easy-going, you think of [ ], the first friend you made at college. <br /><br />
          you can still remember that overwhelming nervousness of week 1. you had hurriedly
          rushed into your first lecture and found a random seat, when [] suddenly appeared.
          They beamed at you and warmly introduced themselves, and it became the bright start
          to a fun friendship. From the endless conversations to the spontaneous adventures,
          they always knew what to do or say to make your day. <br /><br />
          with everything going on, you haven’t been able to spend much time together lately.
          maybe you should hit them up before leaving?<br /><br />
          regardless, you’ll always be thankful for how their crazy ideas broaden your horizons,
          and how their positive nature was the sunrise of your college journey.</p>
        </>,
      keep: 'take with you for the memories',
      discard: 'say goodbye and let go. perhaps your friend will want it?',
      baseWidth: 1000,
      percLeftMargin: 0.07,
      percTopMargin: 0.47,
    },
    {
      name: 'Propogation',
      src: PropogationGIF,
      caption: 'little plant stalks swim inside your impromptu vases, waiting to grow',
      leftText: 'you propagated this plant the day you met that cute upperclassman. they had introduced themselves at your club’s first meeting and offered you a drink',
      rightText: 'your former lab partner always joked that you should use an erlenmeyer flask to grow your plants. you miss their chaotic energy and how you’d both scramble to complete reports before the due dates',
      keep: 'carefully pack this. There’s a chance they’ll sprout eventually',
      discard: 'part ways; they clearly weren’t growing much',
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

  const [caption, setCaption] = useState(DEFAULT_PLANT_CAPTION);

  useEffect(() => {
    const timeout = setTimeout(() => setShowingPreview(false), 5000);
    window.addEventListener('resize', updateImageSizes);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updateImageSizes);
    };
  }, []);

  useEffect(() => {
    let numDisplaying = 0;
    let numSaved = 0;
    for (let i = 0; i < plantStates.length; i++) {
      if (plantStates[i] === ITEM_STATES.DISPLAYING)
        numDisplaying++;
      else if (plantStates[i] === ITEM_STATES.SAVED)
        numSaved++;
    }

    if (numDisplaying === 0) {
      const state = numSaved === 0 ? ITEM_STATES.DROPPED : ITEM_STATES.SAVED;
      handleDrop(state, 7); // this is a bad coding practice, but please keep this number the same as the index in the Plants element in the GAME_ITEMS array
    }
  }, [plantStates]);

  const stopDisplay = (state, i) => {
    const newPlantStates = [...plantStates];
    newPlantStates[i] = state;
    setPlantStates(newPlantStates);
  };

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
          <FadeIn transitionDuration='1500' delay='800'>
            As you read your plant journal, you look toward your
            window at all of your plants, glowing in soft moonlight.
          </FadeIn>
        </div>
        :
        <>
          <div className='plants-container'>
            <img ref={backgroundRef} id='background' onLoad={updateImageSizes} className='max-image' src={RoomBackgroundPNG} alt='Background Image of A window with Plants next to it' />
            {loaded && plants.map((plantObj, i) => {
              return (
                <PlantObj src={plantObj.src} alt={plantObj.name + ' gif'} key={plantObj.name} caption={plantObj.caption}
                  width={plantObj.baseWidth * roomWidth / roomBaseWidth}
                  leftMargin={(windowWidth - roomWidth) / 2 + plantObj.percLeftMargin * roomWidth}
                  topMargin={plantObj.percTopMargin * roomHeight}
                  narrative={plantObj.narrative} leftText={plantObj.leftText} rightText={plantObj.rightText}
                  keepCaption={plantObj.keep} discardCaption={plantObj.discard}
                  setCaption={setCaption} stopDisplay={(state) => stopDisplay(state, i)}
                />
              );
            }).filter((plant, index) => plantStates[index] === ITEM_STATES.DISPLAYING)}
          </div>
          <Caption caption={caption} />
        </>
      }
    </>
  );
}

function PlantObj(props) {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (state) => {
    setShowPopup(false);
    switch (state) {
      case (ITEM_STATES.SAVED):
        props.setCaption(props.keepCaption);
        break;
      case ITEM_STATES.DROPPED:
        props.setCaption(props.discardCaption);
        break;
      default:
        props.setCaption(DEFAULT_PLANT_CAPTION);
    }
    props.stopDisplay(state);
  };

  return (
    <>
      <img className='max-image pointer-hover' src={props.src} alt={props.alt}
        onClick={() => { setShowPopup(true); props.setCaption(props.caption); }}
        style={{
          width: props.width + 'px',
          marginLeft: props.leftMargin + 'px',
          marginTop: props.topMargin + 'px',
        }} />
      {showPopup &&
        <>
          <div className='plant-popup'>
            <span className='left-center-pos underline-item' onClick={() => handleClick(ITEM_STATES.DROPPED)} >give away</span>
            <span className='right-center-pos underline-item' onClick={() => handleClick(ITEM_STATES.SAVED)} >keep</span>
            {props.narrative !== undefined ?
              <div className='flex-row'>
                <div className='plant-card'>
                  {props.narrative}
                </div>
                <img className='max-image plant-popup-img' src={props.src} alt='Plant popup' />
              </div>
              :
              <div className='center-flex'>
                <p>{props.leftText}</p>
                <img id='propogation-img' className='max-image' src={props.src} alt='Plant Popup' />
                <p>{props.rightText}</p>
              </div>
            }
          </div>
        </>
      }

    </>
  );
}

export default Plants;