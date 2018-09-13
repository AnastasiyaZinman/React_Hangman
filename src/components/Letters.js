import React, { Component } from 'react';
import Letter from './Letter.js';
class Letters extends Component {
    generateLetterTags(){
        const letterStatus = this.props.letterStatus
        // let letterTags = [], num=0;
        return Object.keys(letterStatus).map((l, i) => {
            return (<Letter 
                letter={l}
                key={l} 
                class = {letterStatus[l] ? "selected" : null}
                selectLetter = {this.props.selectLetter}/>)   //the power of JSX!
        })
    }
    render() {
    return (
        <div>
            <div>Available letters</div>
            {/* <div><Letter letter={letter} /></div> */}
            <span>{this.generateLetterTags()}</span>
        </div>
    );
}
}

export default Letters;