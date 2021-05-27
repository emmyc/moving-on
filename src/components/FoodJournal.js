import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import '../styles/Fieldbook.scss';
import '../styles/Yearbook.scss';
import tester from '../assets/foodjournal/prototype.jpg'; /*for testing purposess*/


const Page = React.forwardRef(function Page(props, ref) {
  return (
    <div className='fpage' ref={ref}>
      {props.children}
    </div>
  );
});

function FoodJournal() {
  const bookRef = useRef();

  const goNextPage = () => {
    bookRef.current.pageFlip().flipNext();
  };

  const goPrevPage = () => {
    bookRef.current.pageFlip().flipPrev();
  };
  const pages = [
    {
      image: tester,
    },
    {
      image: tester,
    },
    {
      image: tester,
    },
    {
      image: tester,
    },
    {
      image: tester,
    },
    {
      image: tester,
    },
    {
      image: tester,
    },
    {
      image: tester,
    },
    {
      image: tester,
    },
    {
      image: tester,
    },
  ];
  return (
    <div className='fieldbook-page'>
      <HTMLFlipBook
        width={450}
        height={585}
        size='stretch'
        minWidth={450}
        maxWidth={450}
        minHeight={585}
        maxHeight={585}
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
export default FoodJournal;