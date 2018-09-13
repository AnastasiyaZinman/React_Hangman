import React, { Component } from 'react';
class Letter extends Component {
    render(){
        return(
            <span>
             <span onClick={this.props.deleteLetter}>{this.props.letter}</span>   
            {/* <span> {this.props.letter}</span> */}
            </span>
        )
    }
}

// const Letter = function () {
//     return (<div className="banner">A</div>)
// }

export default Letter;