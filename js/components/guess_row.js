import React from 'react'
import WhitePeg from './white_peg.js'
import { connect } from 'react-redux'
import { updateCurrentTurn, updateCurrentTurnCombination } from '../redux/actions.js'

class GuessRow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const color = 'white'
    let turnClass = `guess-${this.props.className}`
    let buttonClass = `button-${this.props.className}`
    let { selectedColor, currentTurn, onCheckCombinationClick } = this.props

    return (
      <div className={turnClass}>
        {[...Array(4).keys()].map((i) => {
          return (
            <WhitePeg key={i} index={i}/>
          )
        })
        }
        <button className={buttonClass} onClick={(e) => onCheckCombinationClick(e)}>Check combination</button>
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
    onCheckCombinationClick: (e) => {
      let newTurn = ownProps.currentTurn + 1
      let parentClass = e.target.parentElement.className
      let pegs = document.getElementsByClassName(parentClass)[0].childNodes
      let colors = []
      for (let peg of pegs) {
        if (peg.tagName == 'DIV') {
          colors.push(peg.getAttribute('color'))
        }
      }
      // Do not dispatch actions simultaneously, this causes problems
      dispatch(updateCurrentTurnCombination(colors))
      setTimeout(() => {
        dispatch(updateCurrentTurn(newTurn))
      }, 100)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuessRow)
