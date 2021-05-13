import React from 'react';

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
        this.state = {
            pageNum: 1,
        }
    }
    handlePrevClick() {
        if (this.state.pageNum > 1)
            this.setState({pageNum: this.state.pageNum - 1});
    }

    handleNextClick() {
        if (this.state.pageNum < 3) 
            this.setState({pageNum: this.state.pageNum + 1});
    }
    
    
    render() {
        let content;
        if (this.state.pageNum <= 1) {
            content = <NarrativeContent text="page1"/>;
        }
        else if (this.state.pageNum === 2) {
            content = <NarrativeContent text="page2"/>;
        }
        else if (this.state.pageNum >= 3) {
            content = <NarrativeContent text="page3"/>;
        }
        return(
            <div className="narrative-container">
                <button className="prevButton" onClick={() => this.handlePrevClick()}>prev</button>
                {content}
                <button className="nextButton" onClick={() => this.handleNextClick()}>next</button>
            </div>
        )
    }
}

export default Narrative;