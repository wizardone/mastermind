import React, {Component} from 'react';
import DrawBoard from './draw_board.js';
import Combination from './combination.js';
import Guess from './guess.js';

export default class MainBoard extends Component {
  constructor(){
    super();
    this.state = {
      turns: 8,
      selectedPeg: null,
      currentTurn: 0,
      gameOver: false
    };
  }

  onDrawBoardClick = (e) => {
    this.state.selectedPeg = e.target.getAttribute('color');
  }

  onGuessPegClick = (e) => {
    let peg = e.target;
    peg.setAttribute('color', this.state.selectedPeg);
    peg.style.backgroundColor = this.state.selectedPeg;
  }

  render(){
    let turnsCount = this.state.turns;
    let masterMindStyle = {
      float: 'left',
      marginRight: '20%'
    }

    return (
      <div>
        <div className='mastermind-board' style={masterMindStyle}>
          <div className='guess-board'>
            {
              [...Array(turnsCount).keys()].map((key) => {
                return <Guess key={key} className={key} onClick={this.onGuessPegClick}/>
              })
            }
          </div>
          <Combination />
        </div>
        <div className='draw-board'>
          <DrawBoard onClick={this.onDrawBoardClick}/>
        </div>
      </div>
    )
  }
}

