import React, {useEffect, useState} from 'react';
import '../styles/GameWrapper.scss';
import ITEM_STATES from '../constants.js';
import { GAME_ITEMS } from '../GameItems';
import Caption from './Caption';
import DraggableWrapper from './DraggableWrapper';

function GameWrapper() {
  const [caption, setCaption] = useState('what should i look at next?');
  const [itemFocus, setItemFocus] = useState(null);
  const [overlayColor, setOverlayColor] = useState('black');
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
    setItemFocus(GAME_ITEMS[id].focus);
    setOverlayColor(GAME_ITEMS[id].overlayColor);
  };

  const handleDrop = (dropLoc, id) => {
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
      {itemFocus &&
        <div id='focus-content' onClick={() => {console.log('hi');}}>
          <span id='focus-discard' className='underline-item'>discard</span>
          <span id='focus-keep' className='underline-item'>keep</span>
          {itemFocus}
        </div>
      }
      <div id='overlay' onClick={()=>setItemFocus(null)} style={{ display: itemFocus ? '' : 'none', backgroundColor: overlayColor}} />

      {/* STATE_EXPLORE */}
      <div id='item-display'>
        <div className='bound bound0'/>
        <span id='discard'>discard</span>
        <div className='bound bound1'/>
        <span id='keep'>keep</span>
        <div style={{width: 'inherit', height: 'inherit'}}>
          {GAME_ITEMS.map((item, id) =>
            <DraggableWrapper
              key={Math.random()*1000}
              name={Math.random()*1000}
              click={() => handleClick(id)}
              dropped={(dropLoc) => handleDrop(dropLoc, id)}>
              {item.explore}
            </DraggableWrapper>,
          ).filter((item, id) => renderItems[id] === DISPLAYING)}
        </div>
      </div>

      {/* CAPTION */}
      <Caption caption={caption}/>
    </div>
  );
}

export default GameWrapper;