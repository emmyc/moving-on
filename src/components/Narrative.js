import React from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import '../styles/Narrative.scss';
import leftArrow from '../assets/leftArrow.svg';
import rightArrow from '../assets/rightArrow.svg';


function ProgressBar(props){
    return (
        <div style={{height: 5, width: '80%', borderRadius: 70, borderStyle: 'solid', borderWidth: 'thin', margin: 750}}>
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
                <div className='fadeInText'>
                    <FadeIn><p>You sit down at your desk and close down all 40 of your tabs on your laptop.
                        Ahhh yes, freedom. Your friends always make fun of how many things were always
                        running on your computer. No wonder it whirred so much.</p></FadeIn>
                </div>
            </NarrativeContent>;
            next = <div><img src={rightArrow} onClick={() => this.handleNextClick()} style={{height: '50px', position: 'absolute', top: '100px', right: '7px'}}/>
            </div>;
        }
        else if (this.state.pageNum === 2) {
            prev =<div><img src={leftArrow} onClick={() => this.handlePrevClick()} style={{height: '50px', position: 'absolute', top: '100px', left: '7px'}}/>
            </div>;
            content =
            <NarrativeContent>
                <div className='fadeInText'>
                   <FadeIn> <p>
                   You see your screensaver for the first time in what feels like months.
                        It&apos;s a photo of your hometown—one of those small towns with the quiet
                        beaches that tourists always overlook.
                   <br/>
                  <br/>
                   You&apos;re excited to move back after
                        a year in the city, but you remind yourself you&apos;re not quite done packing
                        for the summer.</p></FadeIn>
                </div>
            </NarrativeContent>;
            next = <div><img src={rightArrow} onClick={() => this.handleNextClick()} style={{height: '50px', position: 'absolute', top: '100px', right: '7px'}}/></div>;
        }
        else if (this.state.pageNum >= 3) {
            prev = <div><img src={leftArrow} onClick={() => this.handlePrevClick()} style={{height: '50px', position: 'absolute', top: '100px', left: '7px'}}/>
            </div>;
            content =
            <NarrativeContent>
                <div className='fadeInText'>
                    <FadeIn> <p></p></FadeIn>
                    <FadeIn> <p>Exhausted by your last final this morning, you collapse into bed for a
                        quick nap to recover from the excruciating exam.
                        <br/>
                        <br/>
                        *Ding! Ding! Ding!*
                        <br/>
                        <br/>
                    You groggily check your phone and see that your best friend from high school
                     has texted you 13498 times in the past minute.
                     You smile a little as you open up the chat—they always texted like that.</p></FadeIn>
                </div>
            </NarrativeContent>;
            next = <div><Link to="/explore">
                <img src={rightArrow} style={{height: '50px', position: 'absolute', top: '100px', right: '7px'}}/></Link>
                </div>;}
        return(
            <div className="page-container">
             <ProgressBar style={{position: 'absolute', width: '1138px',height: '12px', left: '170px',top: '887px'}} value={(this.state.pageNum / this.numPages)*100}></ProgressBar>

                <div className="narrative-container">
                    {content}
                </div>
                <div className="button-container">
                    {prev}
                    {next}
                </div>
            </div>
        );
    }
}

export default Narrative;