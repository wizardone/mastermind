import React, { Component } from 'react'
import DrawBoard from './draw_board.js'
import Combination from './combination.js'
import GuessRow from './guess_row.js'
import GameOver from './game_over.js'
import { connect } from 'react-redux'

class MainBoard extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    const masterMindStyle = {
      float: 'left',
      marginRight: '10%'
    }

    const mainStyle = {
      margin: 'auto'
    }

    let { gameOver, totalTurns } = this.props

    return (
      <div style={mainStyle}>
      { gameOver === true ?
        (<GameOver />) :
        (<div>
          <div className='mastermind-board' style={masterMindStyle}>
            <div className='guess-board'>
            {
              [...Array(totalTurns).keys()].map((key) => {
                return <GuessRow key={key} turn={key} />
              })
            }
            </div>
          </div>
          <div className='draw-board'>
            <DrawBoard />
          </div>
         </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameOver: state.gameOver,
    totalTurns: state.totalTurns
  }
}

export default connect(mapStateToProps)(MainBoard)
