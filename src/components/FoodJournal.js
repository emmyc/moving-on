import React, { useRef, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import '../styles/Fieldbook.scss';
import '../styles/Yearbook.scss';
import tester from '../assets/foodjournal/prototype.jpg'; /*for testing purposess*/
import cover from '../assets/foodjournal/fooddiary_cover.jpg';
import back from '../assets/foodjournal/fooddiary_coverback.jpg';
import august from '../assets/foodjournal/fooddiary__august.jpg';
import september from '../assets/foodjournal/fooddiary__september.jpg';
import december from '../assets/foodjournal/fooddiary__december.jpg';
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
      image: tester,
    },
    {
      image: december,
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