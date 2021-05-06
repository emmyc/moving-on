import React, { useRef } from 'react';
import FlipPage from 'react-flip-page';
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
      title: 'Superlatives',
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
  const devs = [
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
  ];
  return (
    // <div className='yearbook'>
    <HTMLFlipBook
      width={400}
      height={600}
      // showCover={true}
      className='yearbook'
    // ref={bookRef}
    >
      {/* <div>page 1</div>
        <div>page 2</div> */}
      {teams.map((team) => {
        return (
          <Page>
            <h1>{team.title}</h1>
            <div className='team-grid'>
              {devs.map((member) => {
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

      <Page>2nd page</Page>
      <Page>third page</Page>
      <Page>fourth page</Page>
      <Page>fifth page</Page>
      <Page>sixth page</Page>
    </HTMLFlipBook>
    // </div>
  );
};
export default Yearbook;


{/* <FlipPage showHint={true}>
<article>Hello this is a test</article>
<article>this is page 2, testing testing</article>
{/* {Array(5).fill("hello world").map((text,index) => <article>{text + index}</article>)} */}
// </FlipPage> */}