import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Letters from './components/Letters.js';
import Score from './components/Score.js';
import Solution from './components/Solution.js';
class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      score: 100
    }
  }
  
  reduceScore = () => {
    let newScore = this.state.score -10
    this.setState({ score: newScore })
  }
  generateLetterStatuses(){
    let letterStatus = {};
    for(let num = 65; num < 90; num++) {
        letterStatus[String.fromCharCode(num)] =false;
    };
    return letterStatus 
    }
    
    selectLetter = (l) => {
      // let newletterStatus = this.state.letterStatus;
      let newletterStatus = {...this.state.letterStatus};
      console.log("newletterStatus",newletterStatus);
      newletterStatus[l]=true;
      this.setState({ letterStatus: newletterStatus })
    }
  render() {
  return (
    <div>
  <div><Score score={this.state.score}/></div>
  <div><Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} /></div>
  <div><Solution letterStatus={this.state.letterStatus}/></div>
  {/* <button onClick={this.deleteLetter}> Remove First </button>
  <button onClick={this.reduceScore}> Reduce Score</button> */}
  </div>
  );
  }
}
export default App;
