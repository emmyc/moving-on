import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import '../styles/Yearbook.scss';
import yearbookCoverImg from '../assets/yearbook-cover.jpeg';
import Caption from './Caption';


const Page = React.forwardRef(function Page(props, ref) {
  return (
    <div className='page' ref={ref}>
      {props.children}
    </div>
  );
});

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

function Yearbook(props) {

  const { toggleFunction } = props;
  // function dismiss() {
  //   document.getElementById('yearbook-close').parentNode.style.display = 'none';
  // }

  return (
    <div id='yearbook-page'>
      <span className='minimal-button top-right-pos x-btn' id='yearbook-close' onClick={toggleFunction}>X</span>
      <HTMLFlipBook
        width={512}
        height={640}
        size='stretch'
        minWidth={200}
        maxWidth={550}
        minHeight={400}
        maxHeight={775}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        // onFlip={handlePageChange}
        className='yearbook'
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
      <Caption caption='the cutest team!!' />
    </div>
  );
}
export default Yearbook;
