import React, { useState, useEffect, useRef } from 'react';
import anime from 'animejs';
import '../styles/CustomDraggable.scss';

function CustomDraggable(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const timeline = useRef(null);
  const prevLoc = useRef(null);

  useEffect(() => {
    timeline.current = anime.timeline({   //note: any animation that uses transforms will break the draggable
      autoplay: false,                    //this is because Draggable uses transform: translate to position the draggable element
      easing: 'easeInOutSine',            //possible fix: try to have a different animation each time, that is dependent on the position moved
    })
    .add({
      targets: '.custom-drag-wrapper',
      rotate: 360,
      duration: 500,
    });
  }, []);

  const handleStart = (e) => {
    const loc = {
      x: e.clientX,
      y: e.clientY,
    };
    prevLoc.current = loc;
    console.log('clicked: '+prevLoc.current.x +", "+prevLoc.current.y);
  }

  const handleRelease = (e) => {
    // const currLoc = {
    //   x: e.clientX,
    //   y: e.clientY,
    // };
    const dX = e.clientX - prevLoc.current.x;
    const dY = e.clientY - prevLoc.current.y;
    // if (dX === 0 && dY === 0) {
    //   click();
    // }
    setX(x + dX);
    setY(y +dY);
    // console.log("released: "+currLoc.x +", "+currLoc.y);

  }

  const setDragCSS = (e) => {
    // const item = e.currentTarget;
    // item.classList.add('drag');
  };

  const handleDrop = (e) => {
    console.log('drop');
    e.preventDefault();
    console.log(e.currentTarget);
    console.log(e.target);
    if (e.target.className== 'dropzone') {
      e.target.style.backgroundColor= 'green';
      console.log("succesful drop");
    }
  }

  const click = () => {
    timeline.current.pause();
    timeline.current.seek(0);
    timeline.current.play();
  };

  return (
    <div className='custom-drag-wrapper'
      style={{top: y, left: x}}
      draggable='true'
      onDragStart={handleStart}
      onDrag={setDragCSS}
      onDragEnter={handleDrop}
      onDragEnd={handleRelease}
      onDrop={handleDrop}
      onClick={click}>
      {props.children}
    </div>
  );
}

export default CustomDraggable;