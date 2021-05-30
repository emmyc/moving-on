import React, { useState } from 'react';
import cookie3 from '../assets/cookie3.svg';
function FortuneCookies() {
const [isShown, setIsShown] = useState(false);
return (
<div>
<a href='#' onMouseEnter={() => setIsShown(true)}
onMouseLeave={() => setIsShown(false)}>
{isShown ? (
<span>
<img src={cookie3} style={{position: 'absolute',width: '428.3px',
height: '344.96px',left: '175.96px',top: '371px'}} />
</span>
) : (
<span>
<img src={cookie3} style={{position: 'absolute',width: '405px',
height: '262px',left: '195px',top: '415px'}}/>
</span>
)}
</a>
</div>
);
}
export default FortuneCookies;