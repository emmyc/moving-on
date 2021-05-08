import React, {useState} from 'react';
import './styles/GameWrapper.scss';
import DraggableWrapper from './components/DraggableWrapper';

import ITEM_STATES from './constants.js';

function GameWrapper(props) {
  const items = props.children;
  const [caption, setCaption] = useState('text text');
  const [itemFocus, setItemFocus] = useState(false);

  const { NEW, SAVED, DROPPED } = ITEM_STATES;

  const handleClick = (val) => {
    val && setCaption(val);
    setItemFocus(true);
    console.log('click')
  }

  return (
    <div>
      <div id='overlay' onClick={()=>setItemFocus(false)}
        style={{ display: itemFocus ? '' : 'none'}}
      >

      </div>
      <div id='item-display'>
        <div id='discard'>
          discard
        </div>
        <div style={{width: 'inherit', height: 'inherit'}}>
          {items.map((item) => 
            <DraggableWrapper name={Math.random()*1000} click={() => handleClick(item.id)}>
              {item}
            </DraggableWrapper>
          )}
        </div>
        <div id='keep'>
          keep
        </div>
      </div>
      <div id='caption'>
          {caption}
      </div>
    </div>
  )
}

export default GameWrapper;