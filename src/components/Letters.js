import React, { Component } from 'react';
import Letter from './Letter.js';
class Letters extends Component {

    generateLetterStatuses(){
    let letterStatus = {};
    for(let num = 65; num < 90; num++) {
        letterStatus[String.fromCharCode(num)] =false;
    };
    return letterStatus 
    }

    generateLetterTags(ls)
    {
    return Object.keys(ls) ;
    }
    
    render() {
    let letterStatuses = this.generateLetterStatuses();
    const letters = this.generateLetterTags(letterStatuses);
    return (
        <div>
            <div>Letters will be here</div>
            {/* <div><Letter letter={letter} /></div> */}
            <div>{letters}</div>
            <div>{console.log(this.generateLetterStatuses())}</div>
        </div>
    );
}
}

export default Letters;