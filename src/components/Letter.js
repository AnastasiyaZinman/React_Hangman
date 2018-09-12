import React, { Component } from 'react';
class Letter extends Component {
    render(){
        return(
            <span> {this.props.letter}</span>
        )
    }
}

// const Letter = function () {
//     return (<div className="banner">A</div>)
// }

export default Letter;