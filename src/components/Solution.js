import React, { Component } from 'react';
import Letter from './Letter.js';
class Solution extends Component {
    constructor() {
      super()
      this.state = {
        word: 'word',
        hint: "Hint"
      }
    }
    generateLetterTags(){
        // let letterTags = [], num=0;
        return this.state.word.split('').map((l, i) => {
            return (<Letter letter={l} key={l}/>)   //the power of JSX!
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