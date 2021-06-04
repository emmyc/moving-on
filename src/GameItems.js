import React, { useState } from 'react';
import Caption from './components/Caption';
import NintendoFocusElement from './components/NintendoFocusElement';
import SeashellsFocusElement from './components/SeashellsFocusElement';
import PhotosFocusElement from './components/PhotosFocusElement';
import Plants from './components/Plants';
import FrogPreview from './assets/frog-preview.svg';
import FrogSVG from './assets/frog.svg';
import IndexCardSVG from './assets/index-card.svg';
import NintendoSVG from './assets/nintendo.svg';
import DraggableWrapper from './components/DraggableWrapper';
import SeashellPreview from './assets/seashell-box-closed.svg';
import CookiePreview from './assets/cookie-preview.svg';
import FieldbookPreview from './assets/fieldbook_icon.png';
import Fieldbook from './components/Fieldbook';
import PhotosPreview from './assets/photos/photospreview.svg';
import Polaroid1SVG from './assets/photos/done1.svg';
import Polaroid1FocusSVG from './assets/photos/done1.jpg';
import Polaroid2SVG from './assets/photos/done2.svg';
import Polaroid2FocusSVG from './assets/photos/polaroid2.jpg';
import Polaroid3SVG from './assets/photos/polaroid3.svg';
import Polaroid3FocusSVG from './assets/photos/polaroid3.jpg';
import Polaroid4SVG from './assets/photos/polaroid4.svg';
import Polaroid4FocusSVG from './assets/photos/polaroid4.jpg';
import Polaroid5SVG from './assets/photos/polaroid5.svg';
import Polaroid5FocusSVG from './assets/photos/polaroid5.jpg';
import Polaroid6SVG from './assets/photos/polaroid6.svg';
import Polaroid6FocusSVG from './assets/photos/polaroid6.jpg';
import Polaroid7SVG from './assets/photos/polaroid7.svg';
import Polaroid7FocusSVG from './assets/photos/polaroid7.jpg';
import Polaroid8SVG from './assets/photos/polaroid8.svg';
import Polaroid8FocusSVG from './assets/photos/polaroid8.jpg';
import PhotoStripSVG from './assets/photos/photostrip.svg';
import PhotoStripFocusSVG from './assets/photos/photostrip.jpg';
import Polaroid1Video from './assets/photos/polaroid1video.mp4';
import PostcardSVG from './assets/photos/postcard_back.svg';
import PostcardFocusElement from './components/PostcardFocusElement';
import FoodJournal from './components/FoodJournal';
import FoodIcon from './assets/fooddiary_icon.png';
import PlantPreview from './assets/plants/plant-journal-preview.svg';
import './styles/Plants.scss';
import FortuneCookies from './components/Fortune Cookies/FortuneCookies';
import necklace from './assets/necklace.png';
function FocusElement(props) {
  const [showFocusFocus, setShowFocusFocus] = useState(false);

  return (
    <>
      <div className='over-focus'>
        <DraggableWrapper click={() => { setShowFocusFocus(true); console.log('clicked focus element'); }}>
          <img src={props.focusSVG} id={props.id} draggable='false' alt='index card' />
        </DraggableWrapper>
      </div>
      {showFocusFocus &&
        <>
          <div className={'background ' + props.cssImageClass}>
            <div className={'frog-focus-focus ' + props.cssColorClass}>
              <button className='left-center-pos underline-item' onClick={() => setShowFocusFocus(false)}>go back</button>
              <img src={props.focusFocusSVG} id={props.id} alt={'A picture of ' + props.focusFocusSVG} draggable='false'
              // style={{ visibility: showFocusFocus ? 'visible' : 'hidden' }}
              />
            </div>
          </div>
          {props.focusCaption !== undefined &&
            <Caption caption={props.focusCaption} />
          }
        </>
      }
    </>
  );
}

const FISHING_FRIEND_HR_TXT = 'Fropper.. you\'re pretty sure you have 1000+ hours on this baby';
const FISHING_FRIEND_CARD_TXT = 'A note from a friend; oh right, you almost forgot about this gift...';
const FISHING_FRIEND_KEYCHAIN_TXT = 'The main character of Fropper; what a cutie!';
const FISHING_FRIEND_KEEP = '';
const FISHING_FRIEND_DISCARD = '';

const FOOD_JOURNAL_KEEP = 'It wasn\'t just good food I kept track of and want to remember — it was also all the fun times with friends, care packages from family, and my evolution into a total food connoisseur.';
const FOOD_JOURNAL_DISCARD = 'I\'d hate to see this diary just collecting dust on the shelf, but I don\'t see myself getting much use out of it anymore. At least I can recycle it.';
const FOOD_JOURNAL_FOCUS = 'I kept this food diary over the past year. There\'s still a faint fragrance of those late-night fries I snacked on once while jotting things down.';


export const GAME_ITEMS = [
  /*
    TEMPLATE:
    {
      explore: what to render on the explore page,
      focus: what to render upon clicking the item
      trashCaption: caption when item moved to discard
      keepCaption: caption when item moved to keep
      focusCaption: caption when item clicked 1st time
      overlayColor: color of the background overlat when item is clicked
    }

    TODO: possibly change captions to a single array?
  */
  {
    explore: <img src={FrogPreview} id='frog-preview' draggable='false' alt='A Frog Keychain, Nintendo, and Index Card' />,
    focus:
      <div className='frog-focus'>
        <FocusElement focusSVG={IndexCardSVG} id='frog-card' focusFocusSVG={IndexCardSVG}
          cssImageClass='background-notebook-image' cssColorClass='frog-green-overlay' focusCaption={FISHING_FRIEND_CARD_TXT} />
        <NintendoFocusElement focusSVG={NintendoSVG} id='frog-cartridge'
          cssImageClass='background-notebook-image' cssColorClass='frog-green-overlay' focusCaption={FISHING_FRIEND_HR_TXT} />
        <FocusElement focusSVG={FrogSVG} focusFocusSVG={FrogSVG}
          cssImageClass='background-notebook-image' cssColorClass='frog-green-overlay' focusCaption={FISHING_FRIEND_KEYCHAIN_TXT} />
      </div>,
    trashCaption: FISHING_FRIEND_DISCARD,
    keepCaption: FISHING_FRIEND_KEEP,
    focusCaption: 'A pile of stuff relating to Fishing Friend; a keychain of Sailor, the game cartridge, and a note. click on each item to interact',
    // overlayColor: 'rgba(31, 202, 48, 0.45)',
    background: <div className='background-notebook-image full-size'><div className='frog-green-overlay full-size' /></div>,
  },
  //seashells
  {
    explore: <img src={SeashellPreview} draggable='false' alt='SOMETHING' />,
    focus: <SeashellsFocusElement />,
    trashCaption: 'I can keep the memories without keeping the shells. They are pretty though, maybe someone else would like these?',
    keepCaption: 'I\'ve spent a long time collecting these. It\'s ok if these two school ones are broken or small—they\'re still beautiful in their own way.',
    focusCaption: 'Some of your favorite seashells from home, and some ones from the beach near school. ',
    background: <div className='background-notebook-image full-size'><div className='seashell-blue-overlay full-size' /></div>,
  },
  //fortune cookie
  {
    explore: <img src={CookiePreview} draggable='false' alt='SOMETHING' />,
    focus: <FortuneCookies />,
    trashCaption: 'They\'re just pieces of paper—I can motivate myself intrinsically without these. ',
    keepCaption: 'This won\'t take up much room, right? They\'re bite-sized motivational quotes!',
    focusCaption: 'A collection of fortune cookies that have resonated with me. Hover over each one to take a closer look.',
    background: <div className='background-notebook-image full-size'><div className='fortune-pink-overlay full-size' /></div>,
  },
  /*fieldbook*/
  {
    explore: <img src={FieldbookPreview} draggable='false' alt='SOMETHING' />,
    focus: <Fieldbook />,
    trashCaption: 'It might be time to let this go. Tossing this might give me some more closure.',
    keepCaption: 'I can\'t believe she drew all these pictures for me. It was so sweet. I\'ll keep this for the memories. Maybe our paths will cross again someday.',
    focusCaption: 'Oh my goodness, I haven\'t opened this up since we broke up.',
    background: <div className='background-notebook-image full-size'><div className='fieldbook-blue3-overlay full-size' /></div>,
  },
  //food journal
  {
    explore: <img src={FoodIcon} draggable='false' alt='SOMETHING' />,
    focus: <FoodJournal />,
    trashCaption: FOOD_JOURNAL_DISCARD,
    keepCaption: FOOD_JOURNAL_KEEP,
    focusCaption: FOOD_JOURNAL_FOCUS,
    background: <div className='background-notebook-image full-size'><div className='foodjournal-green-overlay full-size' /></div>,
  },
  {
    explore: <img src={PhotosPreview} draggable='false' alt='Stack of polaroids'></img>,
    focus: <div className='photos-focus'>
      <PostcardFocusElement focusSVG={PostcardSVG}
        cssImageClass='background-camera-image' cssColorClass='photos-orange-overlay'
        focusCaption='Click to flip postcard.' />
      <PhotosFocusElement imgStyle='polaroid4' focusSVG={Polaroid4SVG} focusFocusSVG={Polaroid4FocusSVG}
        cssImageClass='background-camera-image' cssColorClass='photos-orange-overlay'
        focusCaption='♪ sidewalks we crossed ♪' />
      <PhotosFocusElement imgStyle='polaroid5' focusSVG={Polaroid5SVG} focusFocusSVG={Polaroid5FocusSVG}
        cssImageClass='background-camera-image' cssColorClass='photos-orange-overlay'
        focusCaption='middle school benches and the taste of home...' />
      <PhotosFocusElement imgStyle='photo-strip' focusSVG={PhotoStripSVG} focusFocusSVG={PhotoStripFocusSVG}
        cssImageClass='background-camera-image' cssColorClass='photos-orange-overlay' focusFocusCSS={{height: '550px'}}
        focusCaption='' />
      <div></div>
      <div></div>
      <PhotosFocusElement imgStyle='polaroid7' focusSVG={Polaroid7SVG} focusFocusSVG={Polaroid7FocusSVG}
        cssImageClass='background-camera-image' cssColorClass='photos-orange-overlay'
        focusCaption='warm on a cold night' />
      <div></div>
      <div></div>
      <PhotosFocusElement imgStyle='polaroid6' focusSVG={Polaroid6SVG} focusFocusSVG={Polaroid6FocusSVG}
        cssImageClass='background-camera-image' cssColorClass='photos-orange-overlay'
        focusCaption='new city, new beach, new me' />
      <PhotosFocusElement imgStyle='polaroid2' focusSVG={Polaroid2SVG} focusFocusSVG={Polaroid2FocusSVG}
        cssImageClass='background-camera-image' cssColorClass='photos-orange-overlay'
        focusCaption='c/o 2020 May 21 grad!' />
      <PhotosFocusElement imgStyle='polaroid3' focusSVG={Polaroid3SVG} focusFocusSVG={Polaroid3FocusSVG}
        cssImageClass='background-camera-image' cssColorClass='photos-orange-overlay'
        focusCaption='...and the adventure begins.' />
      <PhotosFocusElement imgStyle='polaroid1' videoSource={Polaroid1Video} focusSVG={Polaroid1SVG} focusFocusSVG={Polaroid1FocusSVG}
        cssImageClass='background-camera-image' cssColorClass='photos-orange-overlay'
        focusCaption='Senior sunrise &apos;20...you can hear the beach around you. Click to remember.' />
      <div></div>
      <PhotosFocusElement imgStyle='polaroid8' focusSVG={Polaroid8SVG} focusFocusSVG={Polaroid8FocusSVG}
        cssImageClass='background-camera-image' cssColorClass='photos-orange-overlay'
        focusCaption='first club retreat! / never been to an airbnb before : 0' />
    </div>,
    trashCaption: 'how the years have gone by...',
    keepCaption: 'i could never give this away!',
    focusCaption: 'A stack of polaroids from over the years...[click to inspect]',
    background: <div className='background-notebook-image full-size'><div className='frog-green-overlay full-size' /></div>,
  },
    //dance
  {
    explore: <img src={necklace} id='plant-preview' draggable='false' alt='SOMETHING' />,
    focus: <div><iframe src="https://drive.google.com/file/d/13TgMpI0MCeFHc7miDipKu_ciCs4HNxg4/preview" width="1008" height="567" className= 'responsive-iframe'></iframe></div>,
    trashCaption: 'It\'s time to move on. Maybe my friend will like it.',
    keepCaption: 'I miss her and what we could\'ve been, but I\'m grateful for our friendship.',
    focusCaption: 'A memory...',
    background: <div className='background-notebook-image full-size'><div className='fieldbook-blue1-overlay full-size'/></div>,
    showDiscardKeep: true,
  },
  //Plants
  {
    explore: <img src={PlantPreview} id='plant-preview' draggable='false' alt='Plant diary' width='300px' />,
    focus: <Plants />,
    background: <div className='plants-color-background full-size' />,
    showDiscardKeep: false,
  },
];
