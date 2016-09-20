import React from 'react'
import ColorPeg from './color_peg.js'
import { connect } from 'react-redux'

class GuessRow extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  fillGuessPeg = (e, color) => {
    if (color != undefined) {
      e.target.style.backgroundColor = color
    }
  }

  render () {
    const color = 'white'
    let turn = `guess-${this.props.className}`
    let { selectedColor } = this.props

    return (
      <div className={turn}>
        {[...Array(4).keys()].map((i) => {
          return (
            <ColorPeg key={i} color={color} guess={true} onClick={(e) => this.fillGuessPeg(e, selectedColor)}/>
          )
        })
        }
        <br /><br /><br />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedColor: state.selectedPeg
  }
}

export default connect(mapStateToProps)(GuessRow)
