import React, { Component } from 'react'
import DrawBoard from './draw_board.js'
import Combination from './combination.js'
import GuessRow from './guess_row.js'
import { connect } from 'react-redux'

class MainBoard extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    let turnsCount = this.state.turns
    let masterMindStyle = {
      float: 'left',
      marginRight: '20%'
    }
    let { currentTurn, gameOver, totalTurns } = this.props

    return (
      <div>
      <div className='mastermind-board' style={masterMindStyle}>
          <div className='guess-board'>
          {
            [...Array(totalTurns).keys()].map((key) => {
              return <GuessRow key={key} index={key} />
            })
          }
          </div>
        <Combination hidden={gameOver}/>
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
    currentTurn: state.currentTurn,
    gameOver: state.gameOver,
    totalTurns: state.totalTurns
  }
}

export default connect(mapStateToProps)(MainBoard)
