import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import '../styles/Conclusion.scss';

const POEMS = [
  <p className='poem' key={0}>
    I&apos;m too anxious to say the words<br/>
    Words I already know<br/>
    Words I&apos;ve known for so long<br/>
    Words I&apos;ve yet to speak aloud<br/>
    so I write them
    <br/><br/>
    I write them here on paper and in my mind and pretty much anywhere
    but there.
    <br/><br/>
    Packing these bags, I&apos;m packing these words to ship alongside myself<br/>
    back home to you
    You being pretty much everyone I haven&apos;t seen in a year<br/>
    Pretty much everyone that hasn&apos;t seen me in a year
    <br/><br/>
    So long it&apos;ll be hard to recognize who I am and where I fit in<br/>
    and if I ever do
    I&apos;m too anxious to say the words<br/>
    that let you know<br/>
    I&apos;m anxious to go back<br/>
    to a place I no longer call home but still call my house
    <br/><br/>
    because home is here and I&apos;m not sure who I am there.
  </p>,
  <p className='poem' key={1}>
    All packed up!
    <br/><br/>
    Look at this stuff all around me<br/>
    Who knew what the cost of memories could be?
    <br/><br/>
    I can&apos;t bear to say one is better than another<br/>
    that one deserves to be thrown away any more than the other.
    <br/><br/>
    To me, it all means something.<br/>
    It&apos;s all part of me, my story, my upbringing.
    <br/><br/>
    Necklace, frog game, polaroids<br/>
    It&apos;s kind of lame but throwing them away&apos;s something I&apos;ll always avoid
    <br/><br/>
    without one, my collection&apos;s incomplete<br/>
    A treasure trove without the gold<br/>
    A picture but no people<br/>
    A life lived and all the memories lost
    <br/><br/>
    I&apos;m no longer that person who has everything<br/>
    and I&apos;m still picking up the pieces<br/>
    So why do I have to give away this piece of myself?
  </p>,
];

function Frame() {
  return (
    <>
      <div id='conclusion-left'>
        <div id='plane-window'>
          <video controls autoPlay muted>
            <source src='/assets/videos/plane-window.mp4' type='video/mp4'/>
          </video>
        </div>
        <div id='skip-conclusion'>
          skip
        </div>
      </div>
      <div id='conclusion-right'>
        {POEMS[0]}
      </div>
    </>
  );
}

function RestartScreen() {
  return (
    <div id='restart-screen'>
        <Link to='/explore'>
          <div>explore again</div>
        </Link>
        <Link to='/'>
          <div>go back to home page</div>
        </Link>
    </div>
  );
}

export default function Conclusion() {
  const [frame, setFrame] = useState(0);
  setFrame;
  return (
    <div id='conclusion'>
      {frame === 2 && <Frame/>}
      {frame === 0 && <RestartScreen/>}
    </div>
  );
}
