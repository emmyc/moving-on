import React, { useState } from 'react';
import cookie5 from '../assets/cookie5.svg';
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
<img src={cookie5} style={{position: 'absolute',width: '704.43px',
height: '228.83px',left: '390.53px',top: '505px'}} />
</span>
) : (
<span>
<img src={cookie5} style={{position: 'absolute',width: '433.63px',
height: '181.973px',left: ' 515.1px',top: '505px'}}/>
</span>
)}
</a>
{/*<Caption/>*/}
</div>
);
}
export default FortuneCookies;