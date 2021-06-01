import React, { useEffect, useState } from 'react';
import '../styles/GameWrapper.scss';
import ITEM_STATES from '../constants.js';
import { GAME_ITEMS } from '../GameItems';
import Caption from './Caption';
import DraggableWrapper from './DraggableWrapper';

function GameWrapper() {
  const [caption, setCaption] = useState('what should i look at next?');
  // const [itemFocus, setItemFocus] = useState(null);
  const [focusID, setFocusID] = useState(undefined);
  // const [overlayColor, setOverlayColor] = useState('black');
  const [overlayBackground, setOverlayBackground] = useState();
  const [renderItems, setRenderItems] = useState([]);
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

  return (
    <div>
      {/* STATE_ZOOMED_IN */}
      {focusID !== undefined &&
        <div id='focus-content'>
          <span className='minimal-button top-right-pos x-btn' onClick={() => setFocusID(undefined)}>X</span>
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
            <div className='bound bound0' />
            <span id='discard'>discard</span>
            <div className='bound bound1' />
            <span id='keep'>keep</span>
          </>
        }
        <div className='draggables-container'>
          {GAME_ITEMS.map((item, id) =>
            <DraggableWrapper
              key={id}
              name={Math.random() * 1000}
              click={() => handleClick(id)}
              dropped={(dropLoc) => handleDrop(dropLoc, id)}>
              {item.explore}
            </DraggableWrapper>,
          ).filter((item, id) => renderItems[id] === DISPLAYING)}
        </div>
      </div>

      {/* CAPTION */}
      <Caption caption={caption} />
    </div>
  );
}

export default GameWrapper;
