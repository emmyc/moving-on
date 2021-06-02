import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import '../styles/DraggableWrapper.scss';

function DraggableWrapper(props) {
  const nodeRef = React.useRef(null);
  const prevLoc = useRef(null); //use previous location to distinguish between click and drag
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let bounds = [
    {
      left: 0,
      right: 100,
      top: 400,
      bottom: 500,
    },
    {
      left: windowWidth - 100,
      right: windowWidth,
      top: 400,
      bottom: 500,
    },
  ];

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const inDropBox = (currLoc) => {
    for (let i = 0; i < bounds.length; i++) {
      if (overlaps(bounds[i], currLoc) || overlaps(currLoc, bounds[i])) {
        return i + 1;
      }
    }
    return 0;
  };

  const overlaps = (box1, box2) => {  //checks if box1 overlaps box2, note: sometimes it isn't commutative when box1 or box2 is much bigger than the other
    let xOverlaps, yOverlaps;
    if ((box1.left >= box2.left && box1.left <= box2.right) || (box1.right >= box2.left && box1.right <= box2.right)) {
      xOverlaps = true;
    } else {
      xOverlaps = false;
    }
    if ((box1.top >= box2.top && box1.top <= box2.bottom) || (box1.bottom >= box2.top && box1.bottom <= box2.bottom)) {
      yOverlaps = true;
    } else {
      yOverlaps = false;
    }
    return xOverlaps && yOverlaps;
  };

  const handleStart = () => {
    prevLoc.current = nodeRef.current.getBoundingClientRect();
  };

  const handleStop = () => {
    const currLoc = nodeRef.current.getBoundingClientRect();
    if (currLoc.x === prevLoc.current.x && currLoc.y === prevLoc.current.y) {
        handleClick();
    } else {
      const dropLoc = inDropBox(currLoc);
      if (dropLoc) {
        props.dropped && props.dropped(dropLoc);
      }
    }
    prevLoc.current = currLoc;
  };

  const handleClick = () => {
    props.click && props.click(); //check for undefined
  };

  return (
    <Draggable
      handle='.draggable-wrapper'
      onStart={handleStart}
      onStop={handleStop}
      nodeRef={nodeRef}>
      <div className='draggable-wrapper' id={props.id} ref={nodeRef}>
        {props.children}
      </div >
    </Draggable>
  );
}
export default DraggableWrapper;