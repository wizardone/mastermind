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
    let turnClass = `guess-${this.props.index}`
    let buttonClass = `button-${this.props.index}`
    let { selectedColor, index, onCheckCombinationClick, winningCombo } = this.props

    return (
      <div className={turnClass}>
        {[...Array(4).keys()].map((i) => {
          return (
            <WhitePeg key={i} index={i}/>
          )
        })
        }
        <button className={buttonClass} onClick={(e) => onCheckCombinationClick(e, winningCombo)}>Check combination</button>
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

  let fetchSelectedColors = (target) => {
    let parentClass = target.parentElement.className
    let pegs = document.getElementsByClassName(parentClass)[0].childNodes
    let selectedColors = []
    for (let peg of pegs) {
      if (peg.tagName == 'DIV') {
        selectedColors.push(peg.getAttribute('color'))
      }
    }
    return selectedColors
  }

  let compareColors = (selectedColors, winningColors) => {
    let cows = []
    let bulls = []
    selectedColors.forEach((el, index) => {
      if (winningColors.indexOf(el) == index) {
        bulls.push(el)
      } else if (winningColors.indexOf(el) >= 0) {
        cows.push(el)
      }
    })
  }

  return {
    onCheckCombinationClick: (e, winningColors) => {
      let newTurn = ownProps.index + 1
      let selectedColors = fetchSelectedColors(e.target)

      compareColors(selectedColors, winningColors)

      dispatch(updateCurrentTurnCombination(selectedColors))
      setTimeout(() => {
        dispatch(updateCurrentTurn(newTurn))
      }, 100)
      e.target.remove()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuessRow)
