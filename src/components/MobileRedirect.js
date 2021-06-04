import React from 'react';
import errorImage from '../assets/errorImage.png';
function MobileRedirect(){
    return(
<div>
<p style={{fontFamily: 'Prompt', fontSize: '30px'}} to='/error'>
<br/>
<br/>
<br/>
<br/>
<img src={errorImage}  height='150' width='150' alt='suitcase'></img>
<br/>
Moving (on) is best experienced on a larger resolution! Please visit on a desktop device.
</p>
</div>
    );
}
export default MobileRedirect;
