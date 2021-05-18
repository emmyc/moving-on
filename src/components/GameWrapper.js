import React, {useEffect, useState} from 'react';
import '../styles/GameWrapper.scss';
import ITEM_STATES from '../constants.js';
import Caption from './Caption';
import DraggableWrapper from './DraggableWrapper';

function GameWrapper(props) {
  const items = props.children;
  const [caption, setCaption] = useState('text text');
  const [itemFocus, setItemFocus] = useState(null);
  const [renderItems, setRenderItems] = useState([]);
  const { DISPLAYING } = ITEM_STATES;

  useEffect(() => {
    const newItems = [];
    items && items.forEach(() => {
      newItems.push(DISPLAYING);
    });
    setRenderItems(newItems);
  }, []);

  const handleClick = (val) => {
    val && val;
    setItemFocus(true);
  };

  const handleDrop = (dropLoc, id) => {
    setCaption(dropLoc);
    const newRenders = [...renderItems];
    newRenders[id] = dropLoc;
    setRenderItems(newRenders);
    return true;
  };

  return (
    <div>
      <div id='overlay' onClick={()=>setItemFocus(null)}
        style={{ display: itemFocus ? '' : 'none'}}
      >
        {itemFocus}
      </div>
      <div id='audio-button'/>
      {/* <div id='yearbook-button'/> */}
      <div className='bound bound0'/>
      <span id='discard'>discard</span>
      <div className='bound bound1'/>
      <span id='keep'>keep</span>
      <div id='item-display'>
        <div id='discard'>
          discard
        </div>
        <div style={{width: 'inherit', height: 'inherit'}}>
          {items.map((item, id) =>
            <DraggableWrapper
              key={Math.random()*1000}
              name={Math.random()*1000}
              click={() => handleClick(item.id)}
              dropped={(dropLoc) => handleDrop(dropLoc, id)}>
              {item}
            </DraggableWrapper>,
          ).filter((item, id) => renderItems[id] === DISPLAYING)}
        </div>
        <div id='keep'>
          keep
        </div>
      </div>
      <Caption caption={caption}/>
    </div>
  );
}

export default GameWrapper;