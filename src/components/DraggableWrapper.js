import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Draggable from 'react-draggable';
import '../styles/DraggableWrapper.scss';

function DraggableWrapper(props) {
  const nodeRef = React.useRef(null);
  const timeline = useRef(null);
  const previousBoxLocation = useRef(null); //use previous location to distinguish between click and drag

  const handleStart = (e) => {
    previousBoxLocation.current = e.target.getBoundingClientRect();
  };

  const handleStop = (e) => {
    const currentBoxLocation = e.target.getBoundingClientRect();
    if (currentBoxLocation.top === previousBoxLocation.current.top && currentBoxLocation.left === previousBoxLocation.current.left) {
      handleClick();
    }
  }

  const handleClick = () => { //TODO: animation only happens on 1st click
    console.log("i was clicked");
    timeline.current = anime.timeline({
      autoplay: false,
      easing: 'easeInOutSine',
    }).add({
      targets: '.draggable-wrapper',
      rotate: 360,
      duration: 1000,
    });
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