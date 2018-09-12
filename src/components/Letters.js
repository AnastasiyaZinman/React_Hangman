import React, { Component } from 'react';
import Letter from './Letter.js';
class Letters extends Component {

    
    generateLetterTags(letterStatus){
        // let letterTags = [], num=0;
        return Object.keys(letterStatus).map((l, i) => {
            return (<Letter letter={l} key={l}/>)   //the power of JSX!
        })
    }
    render() {
    // let letterStatuses = this.generateLetterStatuses();
    return (
        <div>
            <div>Available letters</div>
            {/* <div><Letter letter={letter} /></div> */}
            <div>{this.generateLetterTags(this.props.letterStatus)}</div>
        </div>
    );
}
}

export default Letters;