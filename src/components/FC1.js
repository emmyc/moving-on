import React, { useState } from 'react';
import cookie1 from '../assets/cookie1.svg';
//import cookie1big from '../assets/cookie1big.svg';
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
<img src={cookie1} style={{position: 'absolute', width: '559.7px',
height: '183.06px', left: '335.35px', top: '159px'  }} />
</span>
) : (
<span>
<img src={cookie1} style={{position: 'absolute', width: '407.61px',
height: '150.24px', left: '422px', top: '192px' }}/>
</span>
)}
</a>
{/*<Caption/>*/}
</div>
);
}
export default FortuneCookies;