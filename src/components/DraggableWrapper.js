import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import Draggable from 'react-draggable';
import '../styles/DraggableWrapper.scss';

function DraggableWrapper(props) {
  const nodeRef = React.useRef(null);
  const timeline = useRef(null);
  const previousBoxLocation = useRef(null); //use previous location to distinguish between click and drag

  useEffect(() => {
    timeline.current = anime.timeline({   //note: any animation that uses transforms will break the draggable
      autoplay: false,                    //this is because Draggable uses transform: translate to position the draggable element
      easing: 'easeInOutSine',            //possible fix: try to have a different animation each time, that is dependent on the position moved
    }).add({
      targets: '.draggable-wrapper',
      backgroundColor: ['inherit', 'rgb(255, 0, 0)'],
      duration: 50,
    }).add({
      targets: '.draggable-wrapper',
      backgroundColor: ['rgb(255,0,0,1)', 'rgb(0,0,0,0)'],
      duration: 400,
    });
  }, []);

  const handleStart = (e) => {
    previousBoxLocation.current = e.target.getBoundingClientRect();
  };

  const handleStop = (e) => {
    const currentBoxLocation = e.target.getBoundingClientRect();
    if (currentBoxLocation.x === previousBoxLocation.current.x && currentBoxLocation.y === previousBoxLocation.current.y) {
      handleClick();
    }
    previousBoxLocation.current = currentBoxLocation;
  }

  const handleClick = () => {
    timeline.current.pause();
    timeline.current.seek(0);
    timeline.current.play();
  };

  return (
    <Draggable
      onStart={handleStart}
      onStop={handleStop}
      nodeRef={nodeRef}>
      <div className='draggable-wrapper' ref={nodeRef}>
        {props.children}
      </div >
    </Draggable>
  );
};
export default DraggableWrapper;