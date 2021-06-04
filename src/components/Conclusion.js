import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import BoxImg from '../assets/discardbox_quarterview.png';
import '../styles/Conclusion.scss';
import anime from 'animejs';
import ITEM_STATES from '../constants';
import { GAME_ITEMS } from '../GameItems';

import Video from './video.mp4';

const ITEMS = [
  {
    visual:
      <div id='conclusion-left-box'>
        <img id='conclusion-box' src={BoxImg} />
      </div>,
    poem:
      <>
        <div className='packed-up-title'>All packed up!</div>
        {/* <p className='poem-title'>I. </p> */}
        <p id='poem1' className='poem' key={0}>
          Packing these bags, I&apos;m packing these words to ship alongside myself<br />
          back home to you <br />
          You being pretty much everyone I haven&apos;t seen in a year<br />
          Pretty much everyone that hasn&apos;t seen me in a year
          <br /><br />
          So long it&apos;ll be hard to recognize who I am and where I fit in<br />
          and if I ever did <br /><br />
          I&apos;m too anxious to say the words<br />
          that let you know<br />
          I&apos;m anxious to go back<br />
          to a place I no longer call home
          <br /><br />
          but still call my house
          and will still welcome me with open arms <br />
          and hopefully embrace me for who I am <br />
          even if I&apos;m still figuring out who that is.
        </p>
      </>,
  },
  {
    visual:
      <div id='conclusion-left-plane'>
        <div id='plane-window'>
          <video controls autoPlay muted loop>
            <source src={Video} type='video/mp4' />
          </video>
        </div>
      </div>,
    poem:
      <p id='poem2' className='poem' key={1}>
        Look at this stuff all around me<br />
        Who knew what the cost of memories could be?
        <br /><br />
        I can&apos;t bear to say one is better than another<br />
        that one deserves to be thrown away any more than the other.
        <br /><br />
        To me, it all means something.<br />
        It&apos;s all part of me, my story, my upbringing.
        <br /><br />
        Necklace, frog game, polaroids<br />
        It&apos;s kind of lame but throwing them away&apos;s something I&apos;ll always avoid
        <br /><br />
        without one, my collection&apos;s incomplete<br />
        A treasure trove without the gold<br />
        A picture but no people<br />
        A life lived and all the memories lost
        <br /><br />
        I&apos;m no longer that person who has everything<br />
        and I&apos;m still picking up the pieces<br />
        and maybe that&apos;s okay.
      </p>,
  },
];

function Frame(props) {
  const { frame, setFrame } = props;
  const timeline = useRef(null);
  useEffect(() => {
    timeline.current = anime.timeline({
      easing: 'easeInSine',
    }).add({
      targets: ['#conclusion-left', '#conclusion-right'],
      opacity: [0, 1],
      duration: 3000,
    }).add({
      targets: '#poem1',
      translateY: '-90vh',
      duration: 10000,
      changeComplete: () => {
        timeline.current?.pause();
      },
    }).add({
      targets: ['#conclusion-left', '#conclusion-right'],
      opacity: [1, 0],
      duration: 2000,
      changeComplete: () => {
        setFrame(frame + 1);
      },
    }).add({
      duration: 1000,
    }).add({
      targets: ['#conclusion-left', '#conclusion-right'],
      opacity: [0, 1],
      duration: 2000,
    }).add({
      duration: 1000,
      changeComplete: () => {
        console.log('translate poem 2');
        timeline.current?.pause();
      },
    }).add({
      targets: ['#conclusion-left', '#conclusion-right'],
      opacity: [1, 0],
      duration: 3000,
    }).add({
      duration: 2000,
      changeComplete: () => {
        timeline.current?.pause();
        skip();
      },
    });

    timeline.current?.pause();
    timeline.current?.seek(0);
    const timeout = setTimeout(() => {
      timeline.current?.play();
    }, 250);
    return () => clearTimeout(timeout);
  }, []);

  const skip = () => {
    setFrame(2);
  };

  const next = () => {
    // setFrame(frame+1);
    timeline.current?.play();
  };

  return (
    <>
      <div id='conclusion-left'>
        {ITEMS[props.frame].visual}
        <div id='skip-conclusion' onClick={skip}>
          skip &gt;
        </div>
      </div>
      <div id='conclusion-right'>
        {ITEMS[props.frame].poem}
        <div id='next-conclusion-btn' onClick={next}>
          next &gt;
        </div>
      </div>
    </>
  );
}

function RestartScreen(props) {
  const { SAVED } = ITEM_STATES;
  const { itemStates } = props;
  return (
    <div id='restart-screen'>
      <div className='conclude-title'>
        <p>moving (on)</p>
      </div>
      <div id='saved-items'>
        {itemStates.map((_state, id) =>
          <div className='item' key={id}>{GAME_ITEMS[id].explore}</div>)
          .filter((_item, id) => itemStates[id] === SAVED)}
      </div>
      <div id='restart-btn-container'>
        <Link to='/explore'>
          <div className='restart-btn'>explore again</div>
        </Link>
        <Link to='/'>
          <div className='restart-btn'>back to home page</div>
        </Link>
      </div>
    </div>
  );
}

export default function Conclusion() {
  const [frame, setFrame] = useState(0);
  const history = useHistory();
  const items = history.location?.state?.items ?? [];
  const plants = history.location?.state?.plants ?? [];
  return (
    <div id='conclusion'>
      {frame < 2 && <Frame frame={frame} setFrame={setFrame} />}
      {frame === 2 && <RestartScreen itemStates={items} plantStates={plants} />}
    </div>
  );
}
