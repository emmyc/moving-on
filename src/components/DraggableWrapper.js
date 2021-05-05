import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import Draggable from 'react-draggable';
import '../styles/DraggableWrapper.scss';

function DraggableWrapper(props) {
  const nodeRef = React.useRef(null);
  const timeline = useRef(null);
  const prevLoc = useRef(null); //use previous location to distinguish between click and drag
  const duration = 500;
  const [opened, setOpened] = useState(false);
  let bounds = [
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
    }
  ];

  useEffect(() => {
    timeline.current = anime.timeline({   //note: any animation that uses transforms will break the draggable
      autoplay: false,                    //this is because Draggable uses transform: translate to position the draggable element
      easing: 'easeInOutSine',            //possible fix: try to have a different animation each time, that is dependent on the position moved
    })
      .add({
        targets: '.draggable-wrapper',
        scale: 5,
        duration: duration,
      })
  }, []);

  const inDropBox = (currLoc) => {
    for (let i =0; i < bounds.length; i++) {
      if (overlaps(bounds[i], currLoc) || overlaps(currLoc, bounds[i])) {
        return true;
      }
    }
    return false;
  }

  const overlaps = (box1, box2) => {  //checks if box1 overlaps box2, note: sometimes it isn't commutative when box1 or box2 is much bigger than the other
    let xOverlaps, yOverlaps;
    if ((box1.left >= box2.left && box1.left <= box2.right) || (box1.right >= box2.left && box1.rigth <= box2.right)) {
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
  }

  const handleStart = (e) => {
    prevLoc.current = e.target.getBoundingClientRect();
  };

  const handleStop = (e) => {
    const currLoc = e.target.getBoundingClientRect();
    if (currLoc.x === prevLoc.current.x && currLoc.y === prevLoc.current.y) {
      if (!opened) {
        handleClick();
        setOpened(true);
      }
    } else {
      if (inDropBox(currLoc)) {
        console.log("i am in a drop bound");
        timeline.current.add({
          targets: '.draggable-wrapper',
          opacity: [1,0],
          duration: duration
        });
        timeline.current.pause();
        timeline.current.seek(duration+1);
        timeline.current.play();
      }
      setOpened(false);
    }
    prevLoc.current = currLoc;
  }

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
      <div className='draggable-wrapper' ref={nodeRef}>
        {props.children}
      </div >
    </Draggable>
  );
};
export default DraggableWrapper;