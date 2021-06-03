import React, { useRef, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import '../styles/Fieldbook.scss';
import '../styles/Yearbook.scss';
import cover from '../assets/foodjournal/fooddiary_cover.jpg';
import back from '../assets/foodjournal/fooddiary_coverback.jpg';
import august from '../assets/foodjournal/1_fooddiary__august.jpg';
import september from '../assets/foodjournal/2_fooddiary__september.jpg';
import october from '../assets/foodjournal/3_fooddiary__october.jpg';
import november from '../assets/foodjournal/4_fooddiary__november.jpg';
import december from '../assets/foodjournal/5_fooddiary__december.jpg';
import january from '../assets/foodjournal/6_fooddiary__january.jpg';
import february from '../assets/foodjournal/7_fooddiary__february.jpg';
import march from '../assets/foodjournal/8_fooddiary__march.jpg';
import april from '../assets/foodjournal/9_fooddiary__april.jpg';
import may from '../assets/foodjournal/10_fooddiary__may.jpg';
import Sound from 'react-sound';
import pageSound from '../assets/pageFlipSound.mp3';

const Page = React.forwardRef(function Page(props, ref) {
  return (
    <div className='fpage' ref={ref}>
      {props.children}
    </div>
  );
});

function FoodJournal() {
  const bookRef = useRef();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const onFlip = useCallback((e) => {
    setIsPlaying(false);
    console.log('Current page: ' + e.data);
    setIsPlaying(true);
  }, []);


  const pages = [
    {
      image: cover,
    },
    {
      image: august,
    },
    {
      image: september,
    },
    {
      image: october,
    },
    {
      image: november,
    },
    {
      image: december,
    },
    {
      image: january,
    },
    {
      image: february,
    },
    {
      image: march,
    },
    {
      image: april,
    },
    {
      image: may,
    },
    {
      image: back,
    },
  ];
  return (
    <div className='fieldbook-page'>
      <HTMLFlipBook
        width={450}
        height={585}
        size='stretch'
        minWidth={250}
        maxWidth={600}
        minHeight={320}
        maxHeight={800}
        showCover={true}
        mobileScrollSupport={true}
        className='fieldbook'
        ref={bookRef}
        onFlip={onFlip}
      >
        {pages.map((page, index) => {
          return (
            <Page key={'page' + index} >
              <img src={page.image} className='cover-img'></img>
            </Page>
          );
        })}
      </HTMLFlipBook>
      <Sound
        url={pageSound}
        playStatus={
          isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
        }
      >
      </Sound>
    </div>
  );
}
export default FoodJournal;