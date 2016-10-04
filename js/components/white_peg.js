import React from 'react'
import { connect } from 'react-redux'
import { updateSelectedPeg } from '../redux/actions.js'

class WhitePeg extends React.Component {
  constructor () {
    super()
    this.state = { color: 'white' }
  }

  fillGuessPeg = (e, color, turn) => {
    let id = e.target.parentElement.id
    if (color != undefined && id == `guess-${turn}`) {
      e.target.style.backgroundColor = color
      this.setState({ color: color })
    }
    let pegs = document.getElementById(id).childNodes
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
    let { color } = this.state

    return (
      <div style={style} color={color} onClick={(e) => this.fillGuessPeg(e, selectedColor, currentTurn)}></div>
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

export default connect(mapStateToProps)(WhitePeg)
