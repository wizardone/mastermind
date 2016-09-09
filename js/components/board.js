import React, {Component} from 'react';
import Combination from './combination.js'
import Guess from './guess.js'

export default class Board extends Component {
  constructor(){
    super();
    this.state = {
      turns: 8,
      selectedPeg: null,
      gameOver: false
    };
  }

  render(){
    let turnsCount = this.state.turns;

    return (
      <div className='mastermind-board'>
      {
        [...Array(turnsCount).keys()].map((key) => {
          return <Guess key={key}/>
        })
      }
        <Combination />
      </div>
    )
  }
}

