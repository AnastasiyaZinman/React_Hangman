import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Letters from './components/Letters.js';
import Score from './components/Score.js';
import Solution from './components/Solution.js';
class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      score: 100,
      word: ['CALM','HAPPYNESS','THIRDANSWER'],
      guessedLetters: 0,
      hint: ["Your ideal mood when coding.","Your usual mood on hollidays.","THIRDHINT"],
      level: 0
    }
  }
  newGame = () => {
    let newLevel = this.newLevel();
    console.log("newLevel",newLevel);
    this.setState({
      letterStatus: this.generateLetterStatuses(),
      score: 100,
      guessedLetters: 0,
      level: newLevel
    })
  }
  newLevel (){
    if (this.state.level < this.state.word.length - 1)
    {
      return (this.state.level + 1)
    }
    else return -1
  }

countOfSelectedLetterInAnswer (letter,answer){
  let count = 0;
  let pos = answer.indexOf(letter);
  while (pos !== -1) {
  count++;
  pos = answer.indexOf(letter, pos + 1);
  }
  return count;
}

  changeScore = (letter) => {
    var newScore = this.state.score,
    word = this.state.word[this.state.level];
    // console.log("word",word, "newScore",newScore);
    let countOfSelectedLetter = this.countOfSelectedLetterInAnswer(letter,word);
    if (countOfSelectedLetter)
    { newScore = newScore + 5;
     this.addCountOfGuessedLetter(countOfSelectedLetter)
    }
    else {
    newScore = newScore - 20
    }  
    this.setState({score: newScore })
    }
   
  generateLetterStatuses(){
    let letterStatus = {};
    for(let num = 65; num < 90; num++) {
        letterStatus[String.fromCharCode(num)] =false;
    };
    return letterStatus 
    }
    
    addCountOfGuessedLetter(count){
      // this.state.guessedLetters++
      console.log();
      let newGuessedLetters= this.state.guessedLetters + count;
      // console.log("newGuessedLetters",newGuessedLetters);
      this.setState({guessedLetters: newGuessedLetters})
    }
    selectLetter = (l) => {
      this.changeScore(l);
      console.log(l);
      // let newletterStatus = this.state.letterStatus;
      let newletterStatus = {...this.state.letterStatus};
      console.log("newletterStatus",newletterStatus);
      newletterStatus[l]=true;
      this.setState({ letterStatus: newletterStatus })
    }
  render() {
    // console.log("this.state.level",this.state.level)
    if (this.state.level!==-1) 
    {
    if (this.state.score<=0) 
    {return (
      <div className="container">
      <div className="game-over">:( try again </div>
      <button onClick={this.newGame}><span> Restart Game</span> </button>
      </div>)
    }
    else if ((this.state.score>0) && (this.state.guessedLetters===this.state.word[this.state.level].length))
    {
      return (
      <div className="container">
      <div className="game-win">WIN!</div>
      <button onClick={this.newGame}><span>Restart Game</span></button>
      </div>)
    }
  } else return (<div className="container game-over">GAME OVER <br /> sorry we haven't more levels for you</div>)
  return (
  <div className="container">
  <div className="score"><Score score={this.state.score}/></div>
  <div><Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} /></div>
  <div><Solution word={this.state.word[this.state.level]} hint={this.state.hint[this.state.level]}  letterStatus={this.state.letterStatus}/></div>
  {/* <button onClick={this.deleteLetter}> Remove First </button>
  <button onClick={this.reduceScore}> Reduce Score</button> */}
  </div>
  );
  }
}
export default App;
