import React, { useState } from 'react';
import cookie1 from  '../../../src/assets/cookie1.svg';
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
</div>
);
}
export default FortuneCookies;