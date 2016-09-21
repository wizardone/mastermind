import React from 'react'
import { connect } from 'react-redux'
import { updateSelectedPeg } from '../redux/actions.js'

class WhitePeg extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  fillGuessPeg = (e, color, turn) => {
    let parentClass = e.target.parentElement.className
    if (color != undefined && parentClass == `guess-${turn}`) {
      e.target.style.backgroundColor = color
    }
    let pegs = document.getElementsByClassName(parentClass)[0].childNodes
  }

  render () {
    let style = {
      width: '40px',
      backgroundColor: 'white',
      height: '40px',
      borderRadius: '50%',
      border: '1px solid',
      float: 'left',
      padding: '5px'
    }
    let { index, selectedColor, currentTurn } = this.props
    let color = 'white'

    return (
      <div className='`white-peg-${index}`' style={style} color={color} onClick={(e) => this.fillGuessPeg(e, selectedColor, currentTurn)}></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(WhitePeg)
