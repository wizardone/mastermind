import React, { Component } from 'react'
import DrawBoard from './draw_board.js'
import Combination from './combination.js'
import GuessRow from './guess_row.js'
import { updateCurrentTurn } from '../redux/actions.js'
import { connect } from 'react-redux'

class MainBoard extends Component {
  constructor( ){
    super();
    this.state = {
      turns: 8,
      selectedPeg: null,
      currentTurn: 0,
      gameOver: false
    };
  }

  render() {
    let turnsCount = this.state.turns;
    let masterMindStyle = {
      float: 'left',
      marginRight: '20%'
    }
    let { currentTurn } = this.props;

    return (
      <div>
        <div className='mastermind-board' style={masterMindStyle}>
          <div className='guess-board'>
          {
            [...Array(turnsCount).keys()].map((key) => {
              return <GuessRow key={key} className={key} currentTurn={currentTurn} />
            })
          }
          </div>
        <Combination />
        </div>
        <div className='draw-board'>
          <DrawBoard />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentTurn: state.currentTurn
  }
}

export default connect(mapStateToProps)(MainBoard)
