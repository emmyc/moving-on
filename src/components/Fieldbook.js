import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import '../styles/Fieldbook.scss';
import '../styles/Yearbook.scss';
import back from '../assets/fieldbook/back.jpeg';
import cover from '../assets/fieldbook/cover.jpeg';
import fish1 from '../assets/fieldbook/fish1.jpeg';
import fish2 from '../assets/fieldbook/fish2.jpeg';
import hermit1 from '../assets/fieldbook/hermit1.jpeg';
import hermit2 from '../assets/fieldbook/hermit2.jpeg';
import sandcrab1 from '../assets/fieldbook/sandcrab1.jpeg';
import sandcrab2 from '../assets/fieldbook/sandcrab2.jpeg';
import seal1 from '../assets/fieldbook/seal1.jpeg';
import seal2 from '../assets/fieldbook/seal2.jpeg';


const Page = React.forwardRef(function Page(props, ref) {
  return (
    <div className='fpage' ref={ref}>
      {props.children}
    </div>
  );
});

function Fieldbook() {
  const bookRef = useRef();

  const goNextPage = () => {
    bookRef.current.pageFlip().flipNext();
  };

  const goPrevPage = () => {
    bookRef.current.pageFlip().flipPrev();
  };
  const pages = [
    {
      image: cover,
    },
    {
      image: hermit1,
    },
    {
      image: hermit2,
    },
    {
      image: seal1,
    },
    {
      image: seal2,
    },
    {
      image: fish1,
    },
    {
      image: fish2,
    },
    {
      image: sandcrab1,
    },
    {
      image: sandcrab2,
    },
    {
      image: back,
    },
  ];
  return (
    <div className='fieldbook-page'>
      <HTMLFlipBook
        width={480}
        height={583}
        size='stretch'
        minWidth={480}
        maxWidth={480}
        minHeight={583}
        maxHeight={583}
        showCover={true}
        mobileScrollSupport={true}
        className='fieldbook'
        ref={bookRef}
      >
        {pages.map((page, index) => {
          return (
            <Page key={'page'+index} >
                <img src={page.image}></img>
            </Page>
          );
        })}
      </HTMLFlipBook>
      <div className="icon" onClick={goPrevPage} style={{ gridColumnStart: 1 }}>
          chevron_left
      </div>
      <div className="icon" onClick={goNextPage} style={{ gridColumnStart: 3 }}>
          chevron_right
      </div>
    </div>
  );
}
export default Fieldbook;