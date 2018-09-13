import React, { Component } from 'react';
import Letter from './Letter.js';
class Solution extends Component {
    constructor() {
      super()
      this.state = {
        word: 'calm',
        hint: "Your ideal mood when coding."
      }
    }
    generateLetterTags(){
        // let letterTags = [], num=0;
        return this.state.word.split('').map((l, i) => {
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
            <div>{this.state.hint}</div>
            <div>{this.generateLetterTags()}</div>
            </div>
        )
    }
}
export default Solution;