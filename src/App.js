import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Letters from './components/Letters.js';
import Score from './components/Score.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses()
    }
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
  <div><Score /></div>
  <div><Letters letterStatus={this.state.letterStatus} /></div>
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
