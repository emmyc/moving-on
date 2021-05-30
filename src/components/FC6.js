import React, { useState } from 'react';
import cookie6part1 from '../assets/cookie6part1.svg';
import cookie6part2 from '../assets/cookie6part2.svg';
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
<img src={cookie6part2} style={{position: 'absolute',width: '300.87px',
height: '386.08px',left: '923.01px',top: '420.74px'}} />
</span>
) : (
<span>
<img src={cookie6part1} style={{position: 'absolute',width: '300.87px',
height: '386.08px',left: '923.01px',top: '420.74px'}}/>
</span>
)}
</a>
{/*<Caption/>*/}
</div>
);
}
export default FortuneCookies;