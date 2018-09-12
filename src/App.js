import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Letters from './components/Letters.js';
import Score from './components/Score.js';

class App extends Component {
  render() {
  return (
    <div>
  <div><Score /></div>
  <div><Letters /></div>
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
