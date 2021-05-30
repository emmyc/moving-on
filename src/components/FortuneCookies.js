import React from 'react';
//import FCbg from '../assets/FCbg.png';
import maincookie from '../assets/maincookie.svg';
//import Caption from '../components/Caption.js';
import FC1 from '../components/FC1.js';
import FC2 from '../components/FC2.js';
import FC3 from '../components/FC3.js';
import FC4 from '../components/FC4.js';
import FC5 from '../components/FC5.js';
import FC6 from '../components/FC6.js';
function FortuneCookies() {
return (
<div className='FortuneCookies'>
<img src={maincookie} style={{position: 'absolute',width: '388px',
height: '277px',left: '185px',top: '43px'}}/>
<FC1/>
<FC2/>
<FC3/>
<FC4/>
<FC5/>
<FC6/>
{/*<Caption className='fortuneCookiesCaption' caption='Various fortune cookie fortunes that have resonated with you in some way.'/>
*/}
</div>
);
}
export default FortuneCookies;
