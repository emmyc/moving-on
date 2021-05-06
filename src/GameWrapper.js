import React, {useState} from 'react';
import './styles/GameWrapper.scss';
import DraggableWrapper from './components/DraggableWrapper';

function GameWrapper(props) {
  const items = props.children;
  const [caption, setCaption] = useState('text text');
  const [itemFocus, setItemFocus] = useState(false);

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
            <DraggableWrapper name={item.id} click={() => handleClick(item.id)}>
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