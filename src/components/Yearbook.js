import React, { useRef, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import '../styles/Yearbook.scss';
import Sound from 'react-sound';
import pageSound from '../assets/pageFlipSound.mp3';
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
  const [isPlaying, setIsPlaying] = React.useState(false);
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
  const onFlip = useCallback((e) => {
    setIsPlaying(false);
    console.log('Current page: ' + e.data);
    setIsPlaying(true);
  }, []);

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
        onFlip={onFlip}
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
      <Sound
        url = {pageSound}
        playStatus = {
          isPlaying ? Sound.status.PLAYING: Sound.status.STOPPED
        }
        >
      </Sound>
    </div>
  );
}
export default Yearbook;
