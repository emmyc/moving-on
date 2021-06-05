import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import ITEM_STATES from '../constants';
import '../styles/DraggableWrapper.scss';

function DraggableWrapper(props) {
  const nodeRef = React.useRef(null);
  const prevLoc = useRef(null); // use previous location to distinguish between click and drag
  const mouseDownRef = useRef(false);
  // need a mouseDown ref and not a mouseDown hook because function passed to document.eventlistener will get copies of the outerscope variables,
  // if mouseDown hook is used in the checkHover function the mousemove event listener gets a copy of mouseDown's value
  // so even if mouseDown is updated the copy in the checkHover function won't be updated
  // if we pass a ref to checkHover the value of the ref is copied. The ref is just a reference to a value (can think of like a pointer)
  // so it is ok that the checkHover function never receives a new value
  // when checkHover follows the mouseDownRef it will read the updated value even though the mouseDownRef is still the same

  const prevHoverState = useRef(ITEM_STATES.DISPLAYING);
  const [inHover, setInHover] = useState(false);
  const bounds = useRef([]);  // bounds needs to be a reference since checkHover also uses bounds

  useEffect(() => {
    window.addEventListener('resize', updateBounds);
    document.addEventListener('mousemove', checkHover);
    updateBounds();
    return () => {
      window.removeEventListener('resize', updateBounds);
      document.removeEventListener('mousemove', checkHover);
    };
  }, []);

  const updateBounds = () => {
    bounds.current = [
      {
        left: 0,
        right: 100,
        top: 400,
        bottom: 500,
      },
      {
        left: window.innerWidth - 100,
        right: window.innerWidth,
        top: 400,
        bottom: 500,
      },
    ];
  };

  const checkHover = () => {  // all outer scope variables that checkHover and it's child functions uses must be a ref and not a hook
    if (mouseDownRef.current) { // must use mouseDownRef.current here and NOT a mouseDown hook
      const hoverLoc = inDropBox(nodeRef.current.getBoundingClientRect());
      if (hoverLoc !== prevHoverState.current && !inHover) {
        prevHoverState.current = hoverLoc;
        setInHover(true);
        props.setHover && props.setHover(hoverLoc); // check for undefined
      }
    }
  };

  const inDropBox = (currLoc) => {
    for (let i = 0; i < bounds.current.length; i++) {
      if (overlaps(bounds.current[i], currLoc) || overlaps(currLoc, bounds.current[i])) {
        return i + 1;
      }
    }
    return 0;
  };

  const overlaps = (box1, box2) => {  // checks if box1 overlaps box2, note: sometimes it isn't commutative when box1 or box2 is much bigger than the other
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
    mouseDownRef.current = true;
  };

  const handleStop = () => {
    mouseDownRef.current = false;
    const currLoc = nodeRef.current.getBoundingClientRect();
    if (currLoc.x === prevLoc.current.x && currLoc.y === prevLoc.current.y) {
      handleClick();
    } else {
      const dropLoc = inDropBox(currLoc);
      if (dropLoc) {
        props.setHover && props.setHover(ITEM_STATES.DISPLAYING); // check for undefined
        props.dropped && props.dropped(dropLoc);
        return;
      }
    }
    prevLoc.current = currLoc;
  };

  const handleClick = () => {
    props.click && props.click(); // check for undefined
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