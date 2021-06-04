import React from 'react';
import FadeIn from 'react-fade-in';
import { Link, Redirect } from 'react-router-dom';
import '../styles/Narrative.scss';
import leftArrow from '../assets/leftArrow.svg';
import rightArrow from '../assets/rightArrow.svg';
import skipButton from '../assets/skipButton.png';
import SUITCASE_GIF from '../assets/suitcase_gif.gif';
import TAKEOUT_CONTAINER from '../assets/takeout_containers.png';
import TEXT_1 from '../assets/exposition/text1.png';
import TEXT_2 from '../assets/exposition/text2.png';


function ProgressBar(props) {
    return (
        <div id='progress-bar-border'>
            <div id='progress-bar-inner' style={{ width: `${props.value}%` }}></div>
        </div>
    );
}

export const Page1 = () => (
    <NarrativeContent>
        <div className='fadeInText'>
            <FadeIn transitionDuration='1000'><p>You sit down at your desk and close down all 40 of your tabs on your laptop.
            Ahhh yes, freedom. Your friends always make fun of how many things were always
                      running on your computer. No wonder it whirred so much.</p></FadeIn>
            <br />
            <FadeIn transitionDuration='1000' delay='300'><p>You see your screensaver for
            the first time in what feels like months. It&apos;s a photo of your hometown —
            one of those small towns with the quiet beaches that tourists always overlook.
            You&apos;re excited to move back after a year in the city,
                        but you remind yourself you&apos;re not quite done packing for the summer. </p></FadeIn>
            <br />
            <FadeIn transitionDuration='1000' delay='300'><p>Exhausted by your last final
            this morning, you collapse into bed for a quick nap to recover from
                            the excruciating exam.</p></FadeIn>
        </div>
    </NarrativeContent>
);


export const Page2 = () => (
    <NarrativeContent>
        <div className='text-columns'>
            <div className='text-left'>
                <FadeIn transitionDuration='1000'> <p>
                    <i>Ding! Ding! Ding!</i>
                    <br />
                </p></FadeIn>
                <FadeIn transitionDuration='1000' delay='300'> <p>
                    You groggily check your phone and see that your best friend from
                    high school has texted you 13498 times in the past minute.
                    You smile a little as you open up the chat—they always texted like that.
            </p></FadeIn>
            </div>
            <FadeIn transitionDuration='1000' delay='1200'><div className='text-right'> <img id='text1' src={TEXT_1} /> </div></FadeIn>
        </div>
    </NarrativeContent >
);


export const Page3 = () => (
    <NarrativeContent>
        <div className='text-columns'>
            <div className='text-left'>
                <FadeIn transitionDuration='1000'> <p>
                    As you reply, your phone dings again—one of your college classmates texts you.
                <br /></p></FadeIn>
            </div>
            <FadeIn transitionDuration='1000' delay='1200'><div className='text-right'> <img id='text2' src={TEXT_2} /> </div></FadeIn>
        </div>
    </NarrativeContent >
);

export const Page4 = () => (
    <NarrativeContent>
        <div className='fadeInText'>
            <FadeIn transitionDuration='1000'> <p>
                Yay, two plans made just like that.
                It&apos;s funny how different your friends from home and college are.
                You wonder what it would be like if they all got the chance to meet each other—
                alternate universes colliding.
                To be honest, it&apos;s a bit surprising how attached you&apos;ve become to both parts of your life.
                You remember how scared you were on the first day of college —
                how were you ever going to make new friends in such a fast paced environment?
                How were you going to keep in touch with your home friends who were now so far away?
            <br />
            </p></FadeIn>
            <FadeIn transitionDuration='1000' delay='300'> <p>
                It was so hard transitioning from home to college here,
                but now you feel a tinge of sadness even thinking about packing to leave for the summer.
        </p></FadeIn>
        </div>
    </NarrativeContent>
);

export const Page5 = () => (
    <NarrativeContent>
        <div className='fadeInText'>
            <FadeIn transitionDuration='1000'> <p>
                Remember how you got here?
                There you were, hiding in the bathroom stall of the only movie theater back home,
                phone raised trying to get a strong enough signal to open up your decision email.
        </p></FadeIn>
            <FadeIn transitionDuration='1000' delay='300'> <p>
                A big &quot;CONGRATULATIONS&quot; in caps, your name, a lengthy letter you couldn&apos;t read through
                the tears forming in your eyes, and little animated confetti fluttering from the top of the screen.
                Your new life was just around the corner —
                a new life away from these prying eyes that seem to know you, where you are just one among many.
        </p></FadeIn>
            <FadeIn transitionDuration='1000' delay='300'> <p>
                It&apos;s been more than a year since you cried in that small town movie theater bathroom.
                And you&apos;re finally going back there, but you&apos;re not quite you anymore.
        </p></FadeIn>
        </div>
    </NarrativeContent>
);

export const Page6 = () => (
    <NarrativeContent>
        <div className='fadeInText'>
            <FadeIn transitionDuration='1000'> <p>
                Going into finals for the first time, you were still so... so high school.
                You were studying for your last final that semester (which wasn&apos;t even for another FIVE (5) days)
                and your friends came knocking at your door all sloppy and drunk to invite you to party and
                destress a little — to try a new hole-in-the-wall Chinese place down the street.
                You almost said no, but now it&apos;s your favorite spot. You still remember heading down there
                — the five of you — rowdily meandering down the street, rambunctious as all hell.
        </p></FadeIn>
            <FadeIn transitionDuration='1000' delay='00'> <p>
                You still remember sneaking up to the top of the science building
                in the middle of the night all on your own,
                which isn&apos;t a big feat considering half the school has done it, but still.
                The view of the city was so lovely
                and it reminded you of home until you realized, you realized that what at first you thought were stars,
                were for the most part actually just planes. Back home, you knew where to spot every constellation...
                and so you cried. What good was big and beautiful if it only made you feel lost?
                As if you didn&apos;t have your North Star.
        </p></FadeIn>
            <FadeIn transitionDuration='1000' delay='300'>
                <p>But you found yourself here. You were here when you had your first kiss,
                which when you think about it, wasn&apos;t even all that special.
                But the stars aligned when you saw them at a club and then things happened and then...
                And then you never saw them again.</p>
            </FadeIn>
            <FadeIn transitionDuration='1000' delay='300'>
                <p>You&apos;re not quite you anymore, and that&apos;s okay,
                but you wonder... How will everyone else take it?</p>
            </FadeIn>
        </div>
    </NarrativeContent>
);

export const Page7 = () => (
    <NarrativeContent>
        <div className='flex-vertical'>
            <div className='flex-top'>
                <FadeIn className='hi' transitionDuration='1000'> <p>
                    Okay, okay. That&apos;s enough reminiscing. Your flight is in just a few hours.
                    Although at home you were able to get away with showing up to the airport
                    less than an hour before takeoff, your parents and friends have been
                    reminding you non-stop the past few days that &quot;this is the big city&quot;
                    and &quot;you need at least two hours before takeoff&quot;. It&apos;s been a bit annoying,
                    but they&apos;re right—your head is already starting to hurt just thinking
                    about traffic and all the lines you&apos;ll probably have to wait in.
                </p></FadeIn>
                <FadeIn transitionDuration='1000' delay='300'>
                    You eat one more bite of your take-out and get a drink of water before setting both off to the side.
            </FadeIn>
            </div>
            <div className='flex-bottom'>
                <FadeIn transitionDuration='1000' delay='300'>
                    <img src={TAKEOUT_CONTAINER} id='takeout-container' />
                </FadeIn>
            </div>
        </div>
    </NarrativeContent>
);

export const Page8 = () => (
    <NarrativeContent>
        <div className='flex-vertical'>
            <FadeIn transitionDuration='1000'> <p>
                Just one last thing before you can get packing—music!
                You take a deep breath, and face the disaster strewn across your living space.
                This is going to take a while.
        </p></FadeIn>
            <FadeIn transitionDuration='1000' delay='300'>
                You start gathering all the essentials—your favorite clothes,
                your laptop and chargers, your toothbrush.
                Before long, you find yourself playing Tetris in your suitcase,
                finding odd ways to make use of each crevice.
        </FadeIn>
            <FadeIn transitionDuration='1000' delay='300'>

            </FadeIn>
            <FadeIn transitionDuration='1000' delay='300'>
                Not much more will fit, but the sight of a pile of items still on your desk makes you anxious.
                Some things are artifacts of the past, and some things are newly accumulated.
                You turn around to see your suitcase, almost filled to its brim, a meager space for excess.
        </FadeIn>
            <FadeIn transitionDuration='1000' delay='300'>
                <img src={SUITCASE_GIF} id='suitcase-gif'></img>
            </FadeIn>
        </div>
    </NarrativeContent>
);

export const Page9 = () => (
    <NarrativeContent>
        <div className='fadeInText'>
            <FadeIn transitionDuration='1000'> <p>
                You can&apos;t help but love everything all too much, even the empty takeout containers
                from the dining halls and the pile of old receipts you&apos;ve gathered over the year.
                Some things leave you wondering why you&apos;ve kept them for so long in the first place,
                and other things feel indispensable.
                You&apos;re surprised by how much you&apos;ve changed in just a year.
        </p></FadeIn>
            <FadeIn transitionDuration='1000' delay='300'>
                Though some things can stay, some must go,
                and that&apos;s the reality you have to deal with right now,
                one last task before you go home.
                It was so hard transitioning from home to college here,
                but now you feel a tinge of sadness even thinking about packing to leave for the summer.
        </FadeIn>
            <FadeIn transitionDuration='1000' delay='300'>
                <br></br>
                They&apos;re just some objects — so why do you find it so hard to part with them?
                <br></br>
                <b>You sit down and decide to spend some time going through your things one last time.</b>
        </FadeIn>
        </div>
    </NarrativeContent>
);


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
        this.numPages = 9;
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
        let content = [];
        let prev;
        let next;
        // const pages = [<Page3 key='page3' />, <Page4 key='page4' />, <Page5 key='page5' />];

        if (this.state.pageNum <= 1) {
            content.push(<Page1 key='page1' />);
            next = true;
        }
        else if (this.state.pageNum === 2) {
            prev = true;
            content.push(<Page2 key='page2' />);
            next = true;
        }
        else if (this.state.pageNum === 3) {
            prev = true;
            content.push(<Page3 key='page3' />);
            next = true;
        }
        else if (this.state.pageNum === 4) {
            prev = true;
            content.push(<Page4 key='page4' />);
            next = true;
        }
        else if (this.state.pageNum === 5) {
            prev = true;
            content.push(<Page5 key='page5' />);
            next = true;
        }
        else if (this.state.pageNum === 6) {
            prev = true;
            content.push(<Page6 key='page6' />);
            next = true;
        }
        else if (this.state.pageNum === 7) {
            prev = true;
            content.push(<Page7 key='page7' />);
            next = true;
        }
        else if (this.state.pageNum === 8) {
            prev = true;
            content.push(<Page8 key='page8' />);
            next = true;
        }
        else if (this.state.pageNum >= 9) {
            prev = true;
            content.push(<Page9 key='page9' />);
            next = true;
        }
        if (this.state.submitted) {
            return (
                <Redirect to='/explore' />
            );
        }
        else {
            return (
                <div className="page-container">
                    <Link to="/explore">
                        <img src={skipButton} id='skip-narrative-btn' />
                    </Link>
                    <ProgressBar value={(this.state.pageNum / this.numPages) * 100} />
                    <div className="narrative-container">
                        {console.log(typeof (content))}
                        {content}
                    </div>
                    <div className="button-container">
                        {prev && <img src={leftArrow} className='arrow-btn left-arrow' onClick={() => this.handlePrevClick()} />}
                        {next && <img src={rightArrow} className='arrow-btn right-arrow' onClick={() => this.handleNextClick()} />}
                    </div>
                </div>
            );
        }
    }
}

export default Narrative;
