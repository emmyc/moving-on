import anime from 'animejs';
import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import '../styles/DraggableWrapper.scss';

function DraggableWrapper(props) {
  const nodeRef = React.useRef(null);
  const timeline = useRef(null);
  const prevLoc = useRef(null); //use previous location to distinguish between click and drag
  const duration = 500;
  const [opened, setOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDisplaying, SetIsDisplaying] = useState(true);   //can probably remove this once integrated with the parent, since parent would deal with conditional rendering
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
    timeline.current = anime.timeline({   //note: any animation that uses transforms will break the draggable
      autoplay: false,                    //this is because Draggable uses transform: translate to position the draggable element
      easing: 'easeInOutSine',            //possible fix: try to have a different animation each time, that is dependent on the position moved
    })
      .add({
        targets: '#' + props.name,
        scale: 5,
        duration: duration,
      });
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
    if (!isDisplaying) return;
    prevLoc.current = nodeRef.current.getBoundingClientRect();
    // console.log(nodeRef.current);
  };

  const handleStop = () => {
    if (!isDisplaying) return;
    const currLoc = nodeRef.current.getBoundingClientRect();
    if (currLoc.x === prevLoc.current.x && currLoc.y === prevLoc.current.y) {
      if (!opened) {
        handleClick();
        setOpened(true);
      }
    } else {
      const dropLoc = inDropBox(currLoc);
      if (dropLoc) {
        // console.log("i am in a drop box: " + dropLoc);
        props.dropped && props.dropped(dropLoc);
        timeline.current.add({
          targets: '#' + props.name,
          opacity: [1, 0],
          duration: duration,
        });
        timeline.current.pause();
        timeline.current.seek(duration + 1);
        timeline.current.play();
        setTimeout(() => SetIsDisplaying(false), duration);
      }
      setOpened(false);
    }
    prevLoc.current = currLoc;
  };

  const handleClick = () => {
    timeline.current.pause();
    timeline.current.seek(0);
    timeline.current.play();
    props.click && props.click(); //check for undefined
  };

  return (
    <Draggable
      handle='.draggable-wrapper'
      onStart={handleStart}
      onStop={handleStop}
      nodeRef={nodeRef}>
      <div className='draggable-wrapper' id={props.name} ref={nodeRef}>
        {props.children}
      </div >
    </Draggable>
  );
}
export default DraggableWrapper;