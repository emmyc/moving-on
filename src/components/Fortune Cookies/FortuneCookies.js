import React from 'react';
import maincookie from '../../../src/assets/maincookie.svg';
import FC1 from './FC1.js';
import FC2 from './FC2.js';
import FC3 from './FC3.js';
import FC4 from './FC4.js';
import FC5 from './FC5.js';
import FC6 from './FC6.js';
function FortuneCookies() {
    return (
        <div className='FortuneCookies'>
            <img src={maincookie} style={{
                position: 'absolute', width: '388px',
                height: '277px', left: '185px', top: '43px',
            }} />
            <FC1 />
            <FC2 />
            <FC3 />
            <FC4 />
            <FC5 />
            <FC6 />
        </div>
    );
}
export default FortuneCookies;
