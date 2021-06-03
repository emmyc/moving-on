import React, { useEffect, useState } from 'react';
import '../styles/GameWrapper.scss';
import ITEM_STATES from '../constants.js';
import { GAME_ITEMS } from '../GameItems';
import Caption from './Caption';
import DraggableWrapper from './DraggableWrapper';

import ClosedSuitcasePNG from '../assets/suitcase_closed.png';
import OpenSuitcasePNG from '../assets/suitcase_openEMPTY.png';
import ClosedBoxPNG from '../assets/discardbox_closed.png';
import OpenBoxPNG from '../assets/discardbox_open.png';

function GameWrapper() {
  const DEFAULT_CAPTION = 'Click each item to inspect. Drag items to the box (left) to discard, or to the suitcase (right) to keep.';
  const [caption, setCaption] = useState(DEFAULT_CAPTION);
  // const [itemFocus, setItemFocus] = useState(null);
  const [focusID, setFocusID] = useState(undefined);
  // const [overlayColor, setOverlayColor] = useState('black');
  const [overlayBackground, setOverlayBackground] = useState();
  const [renderItems, setRenderItems] = useState([]);
  const [hoverBound, setHoverBound] = useState(ITEM_STATES.DISPLAYING);
  const { DISPLAYING } = ITEM_STATES;

  useEffect(() => {
    const newItems = [];
    GAME_ITEMS && GAME_ITEMS.forEach(() => {
      newItems.push(DISPLAYING);
    });
    setRenderItems(newItems);
  }, []);

  const handleClick = (id) => {
    setCaption(GAME_ITEMS[id].focusCaption);
    // setItemFocus(GAME_ITEMS[id].focus);
    setOverlayBackground(GAME_ITEMS[id].background);
    setFocusID(id);
    // setOverlayColor(GAME_ITEMS[id].overlayColor);
  };

  const handleDrop = (dropLoc, id) => { //discard or keep based on dropLoc ( 1 == discard, 2 == keep)
    const newCaption = dropLoc === 1 ? GAME_ITEMS[id].trashCaption : GAME_ITEMS[id].keepCaption;
    setCaption(newCaption);
    const newRenders = [...renderItems];
    newRenders[id] = dropLoc;
    setRenderItems(newRenders);
    return true;
  };

  const setHover = (hoverBound) => {
    setHoverBound(hoverBound);
  };

  return (
    <div id='explore-container'>
      {focusID !== undefined &&
        <div id='focus-content'>
          <span className='minimal-button top-right-pos x-btn' onClick={() => { setFocusID(undefined); setCaption(DEFAULT_CAPTION);}}>X</span>
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

      <div id='item-display'>
        {focusID === undefined &&
          <>
            <div className='bound bound0'>
              <img id = 'box' src = {hoverBound === ITEM_STATES.DROPPED ? OpenBoxPNG : ClosedBoxPNG} alt='discard to box'/>
            </div>
            <div className='bound bound1'>
              <img id = 'suitcase' src = {hoverBound === ITEM_STATES.SAVED ? OpenSuitcasePNG : ClosedSuitcasePNG} alt='keep in suitcase'/>
            </div>
          </>
        }
        <div style={{ width: 'inherit', height: 'inherit' }}>
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
  );
}

export default GameWrapper;
