import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import '../styles/GameWrapper.scss';
import ITEM_STATES from '../constants.js';
import { GAME_ITEMS } from '../GameItems';
import Caption from './Caption';
import DraggableWrapper from './DraggableWrapper';

import useKeyboardEvent from './useKeyboardEvent';
export const GameContext = React.createContext();
import ClosedSuitcasePNG from '../assets/suitcase_closed.png';
import OpenSuitcasePNG from '../assets/suitcase_openEMPTY.png';
import ClosedBoxPNG from '../assets/discardbox_closed.png';
import OpenBoxPNG from '../assets/discardbox_open.png';

import Preload from './Preload.js';

// gets all files that end in .jpg .svg or .png from given folder
const imgs = require.context('../assets/', true, /\.(svg|jpg|png)$/);
const paths = imgs.keys();
const requiredImages = paths.map(path => imgs(path).default);

function GameWrapper() {
  const DEFAULT_CAPTION = 'Click each item to inspect. Drag items to the box (left) to discard, or to the suitcase (right) to keep.';
  const [isPreloading, setIsPreloading] = useState(true);
  const [caption, setCaption] = useState(DEFAULT_CAPTION);
  const [focusID, setFocusID] = useState(undefined);
  const [overlayBackground, setOverlayBackground] = useState();
  const [renderItems, setRenderItems] = useState([]);
  const { DISPLAYING, DROPPED, SAVED } = ITEM_STATES;
  const [hoverBound, setHoverBound] = useState(DISPLAYING);
  const [plantStates, setPlantStates] =
    useState([DISPLAYING, DISPLAYING, DISPLAYING, DISPLAYING]);
  const history = useHistory();

  useEffect(() => {
    const newItems = [];
    GAME_ITEMS && GAME_ITEMS.forEach(() => {
      newItems.push(DISPLAYING);
    });
    setRenderItems(newItems);
  }, []);

  useEffect(() => {
    renderItems.length !== 0
      && !renderItems.includes(DISPLAYING)
      && history.push({pathname: '/conclusion', state: { items: renderItems, plants: plantStates}});
  }, [renderItems]);

  const handleClick = (id) => {
    setCaption(GAME_ITEMS[id].focusCaption);
    setOverlayBackground(GAME_ITEMS[id].background);
    setFocusID(id);
  };

  const handleDrop = (dropLoc, id) => { //discard or keep based on dropLoc ( 1 == discard, 2 == keep)
    const newCaption = dropLoc === DROPPED ? GAME_ITEMS[id].trashCaption : GAME_ITEMS[id].keepCaption;
    setCaption(newCaption);
    const newRenders = [...renderItems];
    newRenders[id] = dropLoc;
    setRenderItems(newRenders);
  };

  const escape = () => {
    setCaption(DEFAULT_CAPTION);
    setFocusID(undefined);
  };

  useKeyboardEvent('Escape', () => escape());

  const setHover = (hoverBound) => {
    setHoverBound(hoverBound);
  };

  return (
    isPreloading ? <Preload images={requiredImages} onPreloaded={() => setIsPreloading(false)} /> :
    <GameContext.Provider value={{ handleDrop, plantStates, setPlantStates }}>
      <div id='explore-container'>
        {/* STATE_ZOOMED_IN */}
        {focusID !== undefined &&
          <div id='focus-content'>
            <span className='minimal-button top-right-pos x-btn' onClick={escape}>X</span>
            {(GAME_ITEMS[focusID].showDiscardKeep === undefined || GAME_ITEMS[focusID].showDiscardKeep) &&
              <>
                <span className='left-center-pos underline-item' onClick={() => { handleDrop(1, focusID); setFocusID(undefined); }}>discard</span>
                <span className='right-center-pos underline-item' onClick={() => { handleDrop(2, focusID); setFocusID(undefined); }}>keep</span>
              </>
            }
            {GAME_ITEMS[focusID].focus}
          </div>
        }
        <div id='overlay' onClick={() => setFocusID(undefined)} style={{ display: focusID !== undefined ? '' : 'none' }}>
          {overlayBackground}
        </div>

        {/* STATE_EXPLORE */}
        <div id='item-display'>
          {focusID === undefined &&
            <>
              <div className='bound bound0'>
                <img id='box' src={hoverBound === DROPPED ? OpenBoxPNG : ClosedBoxPNG} alt='discard to box' />
              </div>
              <div className='bound bound1'>
                <img id='suitcase' src={hoverBound === SAVED ? OpenSuitcasePNG : ClosedSuitcasePNG} alt='keep in suitcase' />
              </div>
            </>
          }
          <div className='draggables-container'>
            {GAME_ITEMS.map((item, id) =>
              <DraggableWrapper
                key={id}
                name={Math.random() * 1000}
                click={() => handleClick(id)}
                setHover={setHover}
                dropped={(dropLoc) => handleDrop(dropLoc, id)}>
                {item.explore}
              </DraggableWrapper>,
            ).filter((item, id) => renderItems[id] === DISPLAYING)}
          </div>
        </div>

        <Caption caption={caption} />
      </div>
    </GameContext.Provider>
  );
}

export default GameWrapper;
