import React, {Component} from 'react';
import Combination from './combination.js'

export default class Board extends Component {
  constructor(){
    super();
    this.state = { turns: 8 };
  }

  render(){
    let turnsCount = this.state.turns;

    return (
      <div className='mastermind-board'>
      {
        [...Array(turnsCount).keys()].map((key) => {
          return <div className='guess' key={key}>Guess {key} here</div>
        })
      }
        <Combination />
      </div>
    )
  }
}

