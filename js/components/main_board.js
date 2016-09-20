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
    let { onEndTurnClick } = this.props;

    return (
      <div>
        <div className='mastermind-board' style={masterMindStyle}>
          <div className='guess-board'>
          {
            [...Array(turnsCount).keys()].map((key) => {
              return <GuessRow key={key} className={key} />
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
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEndTurnClick: () => dispatch(updateCurrentTurn(6))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBoard)
