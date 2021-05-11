import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../styles/IntroPage.css';
import boxIcon from '../images/boxIcon.png';
import Narrative from './Narrative.js';

function IntroPage() {
    return (
        <div className="intro-page">
            <div className="title">
                <p>moving (on)</p>
            </div>
            <div className="icon">
                <img src={boxIcon} height="150" width="150" alt="box"></img>
            </div>
            <div className="options">
                <div>
                    <Link className="narrative-option" to='/narrative'>on why we&apos;re moving</Link>
                    <p className="narrative-desc">take me through the scenic route; extra narrative content and background information on character</p>
                </div>
                <div>
                    <Link className="explore-option" to='/explore'> on what we&apos;re packing</Link>
                    <p className="explore-desc">take me straight to the gameplay babey; interact with the objects you have to pack</p>
                </div>
            </div>
        </div>

    );
}

function IntroPageWrapper() {
    return (
        <Router>
            <Switch>
                <Route path='/narrative'>
                    <Narrative />
                </Route>
                <Route path='/explore'>

                </Route>
                <Route path='/'>
                    <IntroPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default IntroPageWrapper;