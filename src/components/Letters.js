import React, { Component } from 'react';
import Letter from './Letter.js';
class Letters extends Component {
    generateLetterTags(letterStatus){
        // let letterTags = [], num=0;
        return Object.keys(letterStatus).map((l, i) => {
            return (<Letter letter={l} key={l} deleteLetter={this.props.deleteLetter}/>)   //the power of JSX!
        })
    }
    render() {
    return (
        <div>
            <div>Available letters</div>
            {/* <div><Letter letter={letter} /></div> */}
            <span>{this.generateLetterTags(this.props.letterStatus)}</span>
        </div>
    );
}
}

export default Letters;