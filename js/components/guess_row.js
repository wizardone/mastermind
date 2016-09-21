import React from 'react'
import WhitePeg from './white_peg.js'
import { connect } from 'react-redux'
import { updateCurrentTurn } from '../redux/actions.js'

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
            <WhitePeg key={i} index={i} color={color}/>
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
    currentTurn: state.currentTurn,
    winningCombo: state.winningCombination
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCheckCombinationClick: () => {
      let newTurn = ownProps.currentTurn + 1
      dispatch(updateCurrentTurn(newTurn))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuessRow)
