import React, { useState } from 'react';
import cookie5 from '../assets/cookie5.svg';
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
</div>
);
}
export default FortuneCookies;