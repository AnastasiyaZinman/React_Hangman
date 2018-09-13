import React, { Component } from 'react';
class Solution extends Component {
    constructor() {
      super()
      this.state = {
        word: 'word',
        hint: "Hint"
      }
    }
    render() {
        return (
            <div>{this.state.hint}</div>

        )
    }
}
export default Solution;