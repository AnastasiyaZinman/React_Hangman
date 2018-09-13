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
    
    deleteLetter = () => {
      let letterStatus = this.state.letterStatus
      console.log(letterStatus);
      const letters = Object.keys(letterStatus)
      let firstLetter = letters[0]  
      delete letterStatus[firstLetter]
      this.setState({ letterStatus: letterStatus })
    }
  render() {
  return (
    <div>
  <div><Score score={this.state.score}/></div>
  <span><Letters letterStatus={this.state.letterStatus} deleteLetter={this.deleteLetter} /></span>
  <span><Solution letterStatus={this.state.letterStatus}/></span>
  {/* <button onClick={this.deleteLetter}> Remove First </button>
  <button onClick={this.reduceScore}> Reduce Score</button> */}
  </div>
  );
  }
}
export default App;
