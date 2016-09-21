import React from 'react'
import ColorPeg from './color_peg.js'
import { connect } from 'react-redux'
import { updateCurrentTurn } from '../redux/actions.js'

class GuessRow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  fillGuessPeg = (e, color, turn) => {
    let parentClass = e.target.parentElement.className
    if (color != undefined && parentClass == `guess-${turn}`) {
      e.target.style.backgroundColor = color
    }
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
            <ColorPeg key={i} color={color} onClick={(e) => this.fillGuessPeg(e, selectedColor, currentTurn)}/>
          )
        })
        }
        <button className={buttonClass} onClick={onCheckCombinationClick}>Check combination</button>
        <br /><br /><br />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedColor: state.selectedPeg,
    currentTurn: state.currentTurn
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCheckCombinationClick: () => {
      let newTurn = ownProps.currentTurn+1
      dispatch(updateCurrentTurn(newTurn))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuessRow)
