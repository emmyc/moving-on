import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import '../styles/Yearbook.scss';
import yearbookCoverImg from '../assets/yearbook-cover.jpeg';

const Page = React.forwardRef(function Page(props, ref) {
  return (
    <div className='page' ref={ref}>
      {props.children}
    </div>
  );
});

function Yearbook() {
  const bookRef = useRef();
  const teams = [
    {
      title: 'DEV TEAM',
      members: [
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
      ],
    },
    {
      title: 'NARRATIVE TEAM',
      members: [
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
      ],
    },
    {
      title: 'SUPERLATIVES',
      members: [
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
        {
          name: 'Name',
          year: 2024,
          major: 'Major',
        },
      ],
    },
  ];
  // const [pageNum, setPageNum] = useState(0);

  // const handlePageChange = (e) => {
  //   setPageNum(e.data);
  // };

  const goNextPage = () => {
    bookRef.current.pageFlip().flipNext();
  };

  const goPrevPage = () => {
    bookRef.current.pageFlip().flipPrev();
  };

  return (
    <div className='yearbook-page'>
      <HTMLFlipBook
        width={512}
        height={640}
        size='stretch'
        minWidth={315}
        maxWidth={400}
        minHeight={400}
        maxHeight={600}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        // onFlip={handlePageChange}
        className='yearbook'
        ref={bookRef}
      >
        <Page>
          <img className='cover-img' src={yearbookCoverImg} />
        </Page>
        {teams.map((team, index) => {
          return (
            <Page key={'page' + index}>
              <h1>{team.title}</h1>
              <div className='team-grid'>
                {team.members.map((member, memIdx) => {
                  return (
                    <div
                      className='profile'
                      key={`page${index}-member${memIdx}`}
                    >
                      <div className='fake-pic' />
                      {member.name}
                      <br />
                      {member.year}
                      <br />
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
      <button
        className='flip-page-btn'
        onClick={goPrevPage}
        style={{ gridColumnStart: 1 }}
      >
        Prev Page
      </button>
      <button
        className='flip-page-btn'
        onClick={goNextPage}
        style={{ gridColumnStart: 3 }}
      >
        Next Page
      </button>
    </div>
  );
}
export default Yearbook;
