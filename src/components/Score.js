import React, { Component } from 'react';

class Score extends Component {
scoreState(){
    if(this.props.score>=80)
    {
    return 'high-score'
    }
    else if ((this.props.score < 80) && (this.props.score >= 50))
    {
    return 'medium-score'
    }
    else 
    return 'low-score'
    }
    render() {
        return (
            <div className={this.scoreState()} >
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