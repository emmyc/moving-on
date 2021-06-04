import React, { useRef, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Caption from './Caption';
import '../styles/Yearbook.scss';
import Sound from 'react-sound';
import pageSound from '../assets/pageFlipSound.mp3';
import yearbookCoverImg from '../assets/yearbook-cover.jpeg';
import yearbookSignaturesImg from '../assets/yearbook/signatures.png';
import yearbookDrawingsImg from '../assets/yearbook/drawings.png';
import PHOTO_PLACEHOLDER from '../assets/yearbook/members/placeholder.png';
import PHOTO_ANNA from '../assets/yearbook/members/anna';
import PHOTO_MICHELLE from '../assets/yearbook/members/michelle';
import PHOTO_CATHERINE from '../assets/yearbook/members/catherine';
import PHOTO_KAYLEY from '../assets/yearbook/members/kayley';
import PHOTO_VY from '../assets/yearbook/members/vy';
import PHOTO_DARREN from '../assets/yearbook/members/darren';
import PHOTO_JASON from '../assets/yearbook/members/jason.jpeg';
import PHOTO_ALLISON from '../assets/yearbook/members/allison';
import PHOTO_ELLE from '../assets/yearbook/members/elle';
import PHOTO_SARAH from '../assets/yearbook/members/sarah';
import PHOTO_EMMY from '../assets/yearbook/members/emmy';


// import PHOTO_JOSEPH from '../assets/yearbook/members/placeholder.png';
// import PHOTO_ADELA from '../assets/yearbook/members/placeholder.png';
// import PHOTO_MAGGIE from '../assets/yearbook/members/placeholder.png';
// import PHOTO_TREVOR from '../assets/yearbook/members/placeholder.png';
// import PHOTO_DAVID from '../assets/yearbook/members/placeholder.png';


const SHE_HER = 'she/her';
const SHE_THEY = 'she/they';
const HE_HIM = 'he/him';

const URL_ANNA = 'https://www.linkedin.com/in/andersonxanna/';
const URL_MICHELLE = 'https://www.linkedin.com/in/michelletranbui';
const URL_EMMY = 'https://www.emmycao.com';
const URL_CATHERINE = 'https://www.linkedin.com/in/catherinehhu';
const URL_TREVOR = 'https://www.linkedin.com/in/trevorong/';
const URL_KAYLEY = 'https://kayleywong.myportfolio.com/';
const URL_MAGGIE = 'https://mq-ching.com';
const URL_VY = 'https://issuu.com/vytruong7/docs/vy_truong___design_portfolio';
const URL_REMAS = 'https://www.linkedin.com/in/remas-salah';
const URL_DARREN = 'https://www.linkedin.com/in/darren2hang/';
const URL_ELLE = 'https://www.linkedin.com/in/ellemccue/';
const URL_SARAH = 'https://www.linkedin.com/in/sarah-teng-4378b91a4/';


const Page = React.forwardRef(function Page(props, ref) {
  return (
    <div className='fpage' ref={ref}>
      {props.children}
    </div>
  );
});

const teams = [
  {
    title: 'Developer Team',
    members: [
      {
        name: 'Anna Anderson',
        year: 2023,
        major: 'Computer Engineering',
        photo: PHOTO_ANNA,
        url: URL_ANNA,
        pronouns: SHE_HER,
      },
      {
        name: 'Remas Bashanfar',
        year: 2024,
        major: 'Materials Engineering',
        photo: PHOTO_PLACEHOLDER,
        desc: '*googles funny yearbook quotes*',
        url: URL_REMAS,
        pronouns: SHE_HER,
      },
      {
        name: 'Emmy Cao',
        year: 2021,
        major: 'Cognitive Science',
        photo: PHOTO_EMMY,
        desc: 'castaways ahoy !',
        url: URL_EMMY,
        pronouns: SHE_THEY,
      },
      {
        name: 'Joseph Clegg',
        year: 2021,
        major: 'Computer Science',
        photo: PHOTO_PLACEHOLDER,
        desc: 'i love minecraft',
        pronouns: HE_HIM,
      },
      {
        name: 'David Nguyen',
        year: 2022,
        major: 'Computer Science',
        photo: PHOTO_PLACEHOLDER,
        pronouns: HE_HIM,
      },
      {
        name: 'Trevor Ong',
        year: 2024,
        major: 'Computer Science',
        photo: PHOTO_PLACEHOLDER,
        url: URL_TREVOR,
        pronouns: HE_HIM,
      },
      {
        name: 'Allison Zhang',
        year: 2023,
        major: 'Math of Computation',
        photo: PHOTO_ALLISON,
        pronouns: SHE_HER,
      },
      {
        name: 'Darren Zhang',
        year: 2024,
        major: 'Computer Science',
        photo: PHOTO_DARREN,
        url: URL_DARREN,
        pronouns: HE_HIM,
      },
    ],
  },
  {
    title: 'Art Team',
    members: [
      {
        name: 'Anna Anderson',
        year: 2023,
        major: 'Computer Engineering',
        photo: PHOTO_ANNA,
        url: URL_ANNA,
        pronouns: SHE_HER,
      },
      {
        name: 'Michelle Tran Bui',
        year: 2022,
        major: 'Psychology',
        photo: PHOTO_MICHELLE,
        url: URL_MICHELLE,
        pronouns: SHE_THEY,
      },
      {
        name: 'Maggie Ching',
        year: 2022,
        major: 'Cognitive Science',
        photo: PHOTO_PLACEHOLDER,
        url: URL_MAGGIE,
        pronouns: SHE_HER,
      },
      {
        name: 'Elle McCue',
        year: 2024,
        major: 'Mechanical Engineering',
        photo: PHOTO_ELLE,
        url: URL_ELLE,
        pronouns: SHE_HER,
      }, {
        name: 'Sarah Teng',
        year: 2022,
        major: 'Cognitive Science',
        photo: PHOTO_SARAH,
        url: URL_SARAH,
        pronouns: SHE_HER,
      }, {
        name: 'Vy Truong',
        year: 2023,
        major: 'Computational & Systems Bio',
        photo: PHOTO_VY,
        desc: 'would you rather',
        url: URL_VY,
        pronouns: SHE_HER,
      }, {
        name: 'Kayley Wong',
        year: 2022,
        major: 'Environmental Science',
        photo: PHOTO_KAYLEY,
        desc: 'When life gives you lemonade, make lemons',
        url: URL_KAYLEY,
        pronouns: SHE_THEY,
      },
    ],
  },
  {
    title: 'Narrative Team',
    members: [
      {
        name: 'Maggie Ching',
        year: 2022,
        major: 'Cognitive Science',
        photo: PHOTO_PLACEHOLDER,
        url: URL_MAGGIE,
        pronouns: SHE_HER,
      },
      {
        name: 'Catherine Hu',
        year: 2024,
        major: 'Computer Science',
        photo: PHOTO_CATHERINE,
        url: URL_CATHERINE,
        pronouns: SHE_HER,
      },
      {
        name: 'Jason Luna',
        year: 2021,
        major: 'Communication',
        desc: 'lit in line; smile for the photo ID',
        photo: PHOTO_JASON,
        pronouns: HE_HIM,
      },
      {
        name: 'Sarah Teng',
        year: 2022,
        major: 'Cognitive Science',
        photo: PHOTO_SARAH,
        url: URL_SARAH,
        pronouns: SHE_HER,
      },
      {
        name: 'Adela Tran',
        year: 2022,
        major: 'Psychology',
        photo: PHOTO_PLACEHOLDER,
        pronouns: SHE_HER,
      },

    ],
  },
  {
    title: 'Design Team',
    members: [
      {
        name: 'Michelle Tran Bui',
        year: 2022,
        major: 'Psychology',
        photo: PHOTO_MICHELLE,
        url: URL_MICHELLE,
        pronouns: SHE_THEY,
      }, {
        name: 'Emmy Cao',
        year: 2021,
        major: 'Cognitive Science',
        photo: PHOTO_EMMY,
        desc: 'castaways ahoy !',
        url: URL_EMMY,
        pronouns: SHE_THEY,
      },
      {
        name: 'Maggie Ching',
        year: 2022,
        major: 'Cognitive Science',
        photo: PHOTO_PLACEHOLDER,
        url: URL_MAGGIE,
        pronouns: SHE_HER,
      },
      {
        name: 'Sarah Teng',
        year: 2022,
        major: 'Cognitive Science',
        photo: PHOTO_SARAH,
        url: URL_SARAH,
        pronouns: SHE_HER,
      },
    ],
  },
];

function Yearbook(props) {
  const { toggleFunction } = props;
  const bookRef = useRef();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const onFlip = useCallback((e) => {
    setIsPlaying(false);
    console.log('Current page: ' + e.data);
    setIsPlaying(true);
  }, []);


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
        ref={bookRef}
        onFlip={onFlip}
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
                      <div className='profile-photo'>
                        <img src={member.photo} />
                        <a href={member.url} target='_blank' rel='noreferrer'>
                          <div className='overlay'>
                            <h4>{member.major}</h4>
                            <p>{member.year}</p>
                            <p>{member.desc}</p>
                          </div>
                        </a>
                      </div>
                      <div className='profile-text'>
                        <h4>{member.name}</h4>
                        <p>{member.pronouns}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Page>
          );
        })}
        <Page>
          <img className='cover-img' src={yearbookDrawingsImg} />
        </Page>
        <Page>
          <img className='cover-img' src={yearbookSignaturesImg} />
        </Page>
        <Page />
      </HTMLFlipBook>
      <Sound
        url={pageSound}
        playStatus={
          isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
        }
      >
      </Sound>
      <Caption caption='Meet the team behind moving (on)!' />
    </div>
  );
}
export default Yearbook;
