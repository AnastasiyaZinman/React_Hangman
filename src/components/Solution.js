import React, { Component } from 'react';
import Letter from './Letter.js';
class Solution extends Component {
    generateLetterTags(){
        // let letterTags = [], num=0;
        return this.props.word.split('').map((l, i) => {
            return (<Letter 
                letter={this.props.letterStatus[l] ? l : "_"} 
                class="solutionLetter"
                key={l}
            />)   //the power of JSX!
        })
    }
    render() {
        return (
            <div>
            <div>{this.props.hint}</div>
            <div>{this.generateLetterTags()}</div>
            </div>
        )
    }
}
export default Solution;