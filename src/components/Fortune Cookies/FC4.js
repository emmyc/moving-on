import React, { useState } from 'react';
import cookie4 from '../../assets/cookie4.svg';
function FortuneCookies() {
    const [isShown, setIsShown] = useState(false);
    return (
        <div>
            <a href='#' onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                {isShown ? (
                    <span>
                        <img src={cookie4} style={{
                            position: 'absolute', width: '671.33px',
                            height: '311.33px', left: '436.92px', top: '292px',
                        }} />
                    </span>
                ) : (
                    <span>
                        <img src={cookie4} style={{
                            position: 'absolute', width: '617.88px',
                            height: '255.04px', left: '454.9px', top: '292px',
                        }} />
                    </span>
                )}
            </a>
        </div>
    );
}
export default FortuneCookies;