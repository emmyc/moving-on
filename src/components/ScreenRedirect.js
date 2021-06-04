import React from 'react';
import App from '../App';
import MobileRedirect from './MobileRedirect';

function ScreenResizing() {
    return (
        <div>
        {(window.innerWidth <= 768) ? (<MobileRedirect/>): (<App/>)}
        </div>
    );
}
export default ScreenResizing;
