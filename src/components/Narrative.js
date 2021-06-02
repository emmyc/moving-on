import React from 'react';
import FadeIn from 'react-fade-in';
import { Link, Redirect } from 'react-router-dom';
import '../styles/Narrative.scss';
import leftArrow from '../assets/leftArrow.svg';
import rightArrow from '../assets/rightArrow.svg';
import skipButton from '../assets/skipButton.png';

function ProgressBar(props) {
    return (
        <div id='progress-bar-border'>
            <div id='progress-bar-inner' style={{width: `${props.value}%`}}></div>
        </div>
    );
}

class NarrativeContent extends React.Component {
    render() {
        return (
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
            submitted: false,
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handlePrevClick() {
        if (this.state.pageNum > 1)
            this.setState({ pageNum: this.state.pageNum - 1 });
    }

    handleNextClick() {
        if (this.state.pageNum < this.numPages)
            this.setState({ pageNum: this.state.pageNum + 1 });
        else
            this.setState({ submitted: true });
    }

    handleKeyDown(event) {
      const LEFT_ARROW_KEYCODE = 37;
      const RIGHT_ARROW_KEYCODE = 39;
      if (event.keyCode === LEFT_ARROW_KEYCODE) {
          if (this.state.pageNum > 1)
              this.setState({ pageNum: this.state.pageNum - 1 });
      }
      else if (event.keyCode === RIGHT_ARROW_KEYCODE) {
          if (this.state.pageNum < this.numPages)
              this.setState({ pageNum: this.state.pageNum + 1 });
          else
              this.setState({ submitted: true });
      }
    }

    render() {
      let content;
      let prev;
      let next;
      if (this.state.pageNum <= 1) {
          content =
              <NarrativeContent>
                  <div className='fadeInText'>
                      <FadeIn transitionDuration="1000"><p>You sit down at your desk and close down all 40 of your tabs on your laptop.
                      Ahhh yes, freedom. Your friends always make fun of how many things were always
                      running on your computer. No wonder it whirred so much.</p></FadeIn>
                  </div>
              </NarrativeContent>;
          next = true;
      }
      else if (this.state.pageNum === 2) {
          prev = true;
          content =
              <NarrativeContent>
                  <div className='fadeInText'>
                      <FadeIn transitionDuration="1000"> <p>
                        You see your screensaver for the first time in what feels like months.
                        It&apos;s a photo of your hometown—one of those small towns with the quiet
                        beaches that tourists always overlook.
                        <br />
                        <br />
                      You&apos;re excited to move back after
                      a year in the city, but you remind yourself you&apos;re not quite done packing
                      for the summer.</p></FadeIn>
                  </div>
              </NarrativeContent>;
          next = true;
      }
      else if (this.state.pageNum >= 3) {
          prev = true;
          content =
              <NarrativeContent>
                  <div className='fadeInText'>
                    <FadeIn transitionDuration="1000"> <p></p></FadeIn>
                    <FadeIn transitionDuration="1000"> <p>Exhausted by your last final this morning, you collapse into bed for a
                    quick nap to recover from the excruciating exam.
                    <br />
                    <br />
                    *Ding! Ding! Ding!*
                    <br />
                    <br />
                    You groggily check your phone and see that your best friend from high school
                    has texted you 13498 times in the past minute.
                    You smile a little as you open up the chat—they always texted like that.</p></FadeIn>
                  </div>
              </NarrativeContent>;
          next = true;
      }
      if (this.state.submitted) {
          return (
              <Redirect to="/explore" />
          );
      }
      else {
          return (
              <div className="page-container">
                  <Link to="/explore">
                    <img src={skipButton} id='skip-narrative-btn'/>
                  </Link>
                  <ProgressBar value={(this.state.pageNum / this.numPages) * 100} />
                  <div className="narrative-container">
                      {content}
                  </div>
                  <div className="button-container">
                      {prev && <img src={leftArrow} className='arrow-btn left-arrow' onClick={() => this.handlePrevClick()}/>}
                      {next && <img src={rightArrow} className='arrow-btn right-arrow' onClick={() => this.handleNextClick()}/>}
                  </div>
              </div>
          );
      }
    }
}

export default Narrative;
