import React from 'react';
import { Link } from "react-router-dom";  
import '../styles/Narrative.scss';

class NarrativeContent extends React.Component {

    // could also pass in page number here and render something different based on page number
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="page-content">
                <p>{this.props.text}</p>
            </div>
        )
    }
}

class Narrative extends React.Component {
    constructor(props) {
        super(props)
        this.numPages = 3;
        this.state = {
            pageNum: 1,
        }
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
            content = <NarrativeContent text="page1"/>;
            next = <button className="nextButton" onClick={() => this.handleNextClick()}>next</button>
        }
        else if (this.state.pageNum === 2) {
            prev = <button className="prevButton" onClick={() => this.handlePrevClick()}>prev</button>
            content = <NarrativeContent text="page2"/>;
            next = <button className="nextButton" onClick={() => this.handleNextClick()}>next</button>
        }
        else if (this.state.pageNum >= 3) {
            prev = <button className="prevButton" onClick={() => this.handlePrevClick()}>prev</button>
            content = <NarrativeContent text="page3"/>;
            next = <Link to="/explore">
                <button className="nextButton">next</button>
            </Link>
        }
        return(
            <div className="page-container">
                <div className="narrative-container">
                    {prev}
                    {content}
                    {next}
                </div>
                <progress value={(this.state.pageNum / this.numPages)*100} max="100">30%</progress>
            </div>
            
        )
    }
}

export default Narrative;