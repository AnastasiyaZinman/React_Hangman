import React, { Component } from 'react';
class Letter extends Component {
  selectLetter=() => {
      this.props.selectLetter(this.props.letter)
  }
    render(){
        return(
            <span>
             <span 
             className={this.props.class}
             onClick={this.selectLetter}>
             {this.props.letter}
             </span>   
            {/* <span> {this.props.letter}</span> */}
            </span>
        )
    }
}

// const Letter = function () {
//     return (<div className="banner">A</div>)
// }

export default Letter;