import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Narrative.scss';

function ProgressBar(props){
    return (
        <div style={{height: 5, width: '80%', borderRadius: 70, borderStyle: 'solid', borderWidth: 'thin', margin: 50}}>
            <div style={{height: '100%', width: `${props.value}%`, backgroundColor: 'black', borderRadius: 70}}></div>
        </div>
    );
}

class NarrativeContent extends React.Component {

    render() {
        return(
            <div className='page-content'>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

class Narrative extends React.Component {
    constructor(props) {
        super(props);
        this.numPages = 3;
        this.state = {
            pageNum: 1,
        };
    }
    handlePrevClick() {
        if (this.state.pageNum > 1)
            this.setState({pageNum: this.state.pageNum - 1});
    }

    handleNextClick() {
        if (this.state.pageNum < this.numPages)
            this.setState({pageNum: this.state.pageNum + 1});
    }


    render() {
        let content;
        let prev;
        let next;
        if (this.state.pageNum <= 1) {
            content =
            <NarrativeContent>
                <div>
                    <p>You sit down at your desk and close down all 40 of your tabs on your laptop.
                        Ahhh yes, freedom. Your friends always make fun of how many things were always
                        running on your computer. No wonder it whirred so much.
                    </p>
                    <p>You&apos;re excited to move back after a year in the city, but you remind yourself
                        you&apos;re not quite done packing for the summer.
                    </p>
                </div>
            </NarrativeContent>;
            next = <button style={{height: '50px', position: 'absolute', top: '5px', right: '7px'}} onClick={() => this.handleNextClick()}>next</button>;
        }
        else if (this.state.pageNum === 2) {
            prev = <button className="prevButton" onClick={() => this.handlePrevClick()}>prev</button>;
            content =
            <NarrativeContent>
                <div>
                    <p>You see your screensaver for the first time in what feels like months.
                        It&apos;s a photo of your hometown—one of those small towns with the quiet
                        beaches that tourists always overlook.
                    </p>
                    <p>
                        You&apos;re excited to move back after
                        a year in the city, but you remind yourself you&apos;re not quite done packing
                        for the summer.
                    </p>
                </div>
            </NarrativeContent>;
            next = <button className="nextButton" onClick={() => this.handleNextClick()}>next</button>;
        }
        else if (this.state.pageNum >= 3) {
            prev = <button className="prevButton" onClick={() => this.handlePrevClick()}>prev</button>;
            content =
            <NarrativeContent>
                <div>
                    <p>Exhausted by your last final this morning, you collapse into bed for a
                        quick nap to recover from the excruciating exam.
                    </p>
                    <p>*Ding! Ding! Ding!*</p>
                </div>
            </NarrativeContent>;
            next = <Link to="/explore">
                <button className="nextButton">next</button>
            </Link>;
        }
        return(
            <div className="page-container">
                <div className="narrative-container">
                    {content}
                </div>
                <div className="button-container">
                    {prev}
                    {next}
                </div>
                <ProgressBar value={(this.state.pageNum / this.numPages)*100}></ProgressBar>
            </div>
        );
    }
}

export default Narrative;