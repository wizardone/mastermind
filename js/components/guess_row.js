import React from 'react'
import ReactDom from 'react-dom'
import WhitePeg from './white_peg.js'
import CodePeg from './code_peg.js'
import { connect } from 'react-redux'
import * as actions from '../redux/actions.js'
import * as helpers from '../helpers.js'

class GuessRow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const turnClass = `guess-${this.props.turn}`
    const buttonClass = `button-${this.props.turn}`
    const buttonStyle = {
      width: '100px',
      margin: 'auto',
      float: 'none'
    }
    const guessStyle = {
      height: '60px'
    }
    let { onCheckCombinationClick, winningCombo, currentTurn } = this.props

    return (
      <div id={turnClass} style={guessStyle}>
        {[...Array(4).keys()].map((i) => {
          return (
            <WhitePeg key={i} index={i}/>
          )
        })
        }
          <button style={buttonStyle} className={buttonClass} onClick={(e) => onCheckCombinationClick(e, winningCombo, currentTurn)}>Check</button>
          <div className='combination-checker-0'></div>
          <div className='combination-checker-1'></div>
          <div className='combination-checker-2'></div>
          <div className='combination-checker-3'></div>
        <br /><br /><br />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedColor: state.selectedPeg,
    currentTurn: state.currentTurn,
    winningCombo: state.winningCombination
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCheckCombinationClick: (e, winningColors, currentTurn) => {
      if (e.target.className == `button-${currentTurn}`) {
        // This method has grown too much, need to find a way to refactor it
        // Also consider using middleware like redux thunk
        let newTurn = currentTurn + 1
        let selectedColors = helpers.fetchSelectedColors(e.target)
        let hits = helpers.compareColors(selectedColors, winningColors)

        hits = helpers.shuffle(hits)
        if ((hits.length == 4 && helpers.isOnlyBulls(hits)) ||
             newTurn == 8) {
          dispatch(actions.gameOver(true))
        } else {
          dispatch(actions.updateCurrentTurnCombination(selectedColors))
          setTimeout(() => {
            dispatch(actions.updateCurrentTurnHits(hits))
          }, 100)
          setTimeout(() => {
            dispatch(actions.updateCurrentTurn(newTurn))
          }, 200)
          e.target.remove()
          helpers.renderCodePegs(hits, currentTurn)
        }
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuessRow)
