import React, { useState, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import '../styles/Yearbook.scss';

const Page = React.forwardRef((props, ref) => {
  return (
    <div className='page' ref={ref}>
      {props.children}
    </div>
  )
});

function Yearbook() {
  const bookRef = useRef();
  const teams = [
    {
      title: 'DEV TEAM',
      members: [
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
      ]
    },
    {
      title: 'NARRATIVE TEAM',
      members: [
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
      ]
    },
    {
      title: 'SUPERLATIVES',
      members: [
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
        {
          name: "Name",
          year: 2024,
          major: 'Major',
        },
      ]
    },
  ]
  const [pageNum, setPageNum] = useState(0);

  const handlePageChange = (e) => {
    setPageNum(e.data);
  };

  const goNextPage = () => {
    bookRef.current.pageFlip().flipNext();
  };

  const goPrevPage = () => {
    bookRef.current.pageFlip().flipPrev();
  };

  return (
    <div className='yearbook-page'>
      <HTMLFlipBook
        width={400}
        height={600}
        size='stretch'
        minWidth={315}
        maxWidth={400}
        minHeight={400}
        maxHeight={600}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={handlePageChange}
        className='yearbook'
        ref={bookRef}
      >
        <Page>
          <h1>Yearbook</h1>
        </Page>
        {teams.map((team) => {
          return (
            <Page>
              <h1>{team.title}</h1>
              <div className='team-grid'>
                {team.members.map((member) => {
                  return (
                    <div className='profile'>
                      <div className='fake-pic' />
                      {member.name}<br />
                      {member.year}<br />
                      {member.major}
                    </div>
                  );
                })}
              </div>
            </Page>
          );
        })}
        <Page>
          <h1>AUTOGRAPHS</h1>
        </Page>
        <Page />
      </HTMLFlipBook>

      <button className='flip-page-btn' onClick={goPrevPage} style={{ gridColumnStart: 1 }}>Prev Page</button>
      <button className='flip-page-btn' onClick={goNextPage} style={{ gridColumnStart: 3 }}>Next Page</button>
    </div>
  );
};
export default Yearbook;


{/* <FlipPage showHint={true}>
<article>Hello this is a test</article>
<article>this is page 2, testing testing</article>
{/* {Array(5).fill("hello world").map((text,index) => <article>{text + index}</article>)} */}
// </FlipPage> */}