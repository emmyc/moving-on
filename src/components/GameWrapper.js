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

  const { NEW } = ITEM_STATES;
  useEffect(() => {
    const newItems = [];
    items && items.forEach(() => {
      newItems.push(NEW);
    });
    setRenderItems(newItems);
  }, []);

  const handleClick = (val) => {
    // val && setCaption(val);
    val && val;
    setItemFocus(true);
    // console.log('click')
  };

  // const handleDrop = (dropLoc) => {
  //   return true;
  // };

  return (
    <div>
      <div id='overlay' onClick={()=>setItemFocus(null)}
        style={{ display: itemFocus ? '' : 'none'}}
      >
      </div>
      <div id='item-display'>
        <div id='discard'>
          discard
        </div>
        <div style={{width: 'inherit', height: 'inherit'}}>
          {items.filter((item, id) => renderItems[id] === NEW).map((item) =>
            <DraggableWrapper
              key={Math.random()*1000}
              name={Math.random()*1000}
              click={() => handleClick(item.id)}
              dropped={(dropLoc) => setCaption(caption + dropLoc)}>
              {item}
            </DraggableWrapper>,
          )}
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