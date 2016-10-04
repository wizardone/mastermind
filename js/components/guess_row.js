import React from 'react'
import ReactDom from 'react-dom'
import WhitePeg from './white_peg.js'
import CodePeg from './code_peg.js'
import { connect } from 'react-redux'
import { updateCurrentTurn, updateCurrentTurnCombination, updateCurrentTurnHits, gameOver } from '../redux/actions.js'
import { fetchSelectedColors, compareColors, renderCodePegs } from '../helpers.js'

class GuessRow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    let turnClass = `guess-${this.props.index}`
    let buttonClass = `button-${this.props.index}`
    let { onCheckCombinationClick, winningCombo } = this.props

    return (
      <div id={turnClass}>
        {[...Array(4).keys()].map((i) => {
          return (
            <WhitePeg key={i} index={i}/>
          )
        })
        }
          <button className={buttonClass} onClick={(e) => onCheckCombinationClick(e, winningCombo)}>Check combination</button>
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
    onCheckCombinationClick: (e, winningColors) => {
      // This method has grown too much, need to find a way to refactor it
      let newTurn = ownProps.index + 1
      let selectedColors = fetchSelectedColors(e.target)

      let hits = compareColors(selectedColors, winningColors)
      if (hits['bulls'] === 4) {
        dispatch(gameOver(true))
      } else {
        dispatch(updateCurrentTurnCombination(selectedColors))
        setTimeout(() => {
          dispatch(updateCurrentTurnHits(hits))
        }, 100)
        setTimeout(() => {
          dispatch(updateCurrentTurn(newTurn))
        }, 200)
        e.target.remove()
        renderCodePegs(hits, ownProps.index)
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuessRow)
