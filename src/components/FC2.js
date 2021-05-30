import React, { useState } from 'react';
import cookie2 from '../assets/cookie2.svg';
//import cookie2big from '../assets/cookie2big.svg';
//import './src/App.css';
//import cookie1small from './src/assets/cookie1small.svg';
//import Caption from './src/components/Caption.js';
//import fortuneCookiesBackground from '../assets/fortuneCookiesBackground.svg';
function FortuneCookies() {
const [isShown, setIsShown] = useState(false);
return (
<div>
<a href='#' onMouseEnter={() => setIsShown(true)}
onMouseLeave={() => setIsShown(false)}>
{isShown ? (
<span>
<img src={cookie2} style={{position: 'absolute',width: '440px',
height: '206px',left: '877px',top: '269px'}} />{/*doesnt change size and moves on hover*/}
</span>
) : (
<span>
<img src={cookie2} style={{position: 'absolute', width: '438px',
height: '140px',left: '887px',top: '295px' }}/>
</span>
)}
</a>
{/*<Caption/>*/}
</div>
);
}
export default FortuneCookies;