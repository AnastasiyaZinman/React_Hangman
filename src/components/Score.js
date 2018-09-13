import React, { Component } from 'react';

class Score extends Component {
    render() {
        return (
            <div>
             {this.props.score}
            </div>
    );
}
}

// const Score = function () {
//     return (<div className="banner">5</div>)
// }

// const Score = () => {
//     return (<div>5</div>)
// }

export default Score;