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
  deleteLetter = () => {
    let letterStatus = this.state.letterStatus
    console.log(letterStatus);
    const letters = Object.keys(letterStatus)
    let firstLetter = letters[0]  
    // console.log("firstLetter",firstLetter);
    delete letterStatus[firstLetter]
    this.setState({ letterStatus: letterStatus })
    console.log("letterStatus",letterStatus);
  }
  generateLetterStatuses(){
    let letterStatus = {};
    for(let num = 65; num < 90; num++) {
        letterStatus[String.fromCharCode(num)] =false;
    };
    return letterStatus 
    }
  render() {
  return (
    <div>
  <div><Score score={this.state.score}/></div>
  <div><Letters letterStatus={this.state.letterStatus} /></div>
  <div><Solution letterStatus={this.state.letterStatus}/></div>
  <button onClick={this.deleteLetter}> Remove First </button>
  </div>
  );
  }
}

// class App extends Component {
// render() {
//     return (
//       <Letters />
//     );
//   }
// }
export default App;
