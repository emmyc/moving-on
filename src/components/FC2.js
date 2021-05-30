import React, { useState } from 'react';
import cookie2 from '../assets/cookie2.svg';
function FortuneCookies() {
const [isShown, setIsShown] = useState(false);
return (
<div>
<a href='#' onMouseEnter={() => setIsShown(true)}
onMouseLeave={() => setIsShown(false)}>
{isShown ? (
<span>
<img src={cookie2} style={{position: 'absolute',width: '440px',
height: '206px',left: '877px',top: '269px'}} />
</span>
) : (
<span>
<img src={cookie2} style={{position: 'absolute', width: '438px',
height: '140px',left: '887px',top: '295px' }}/>
</span>
)}
</a>
</div>
);
}
export default FortuneCookies;