import React from 'react'
import ColorPeg from './color_peg.js'
import { connect } from 'react-redux'

const Combination = ({ winningColors }) => (
  <div className='combination'>
    {
      [...winningColors.keys()].map((i) => {
        return <ColorPeg key={i} color={winningColors[i]}/>
      })
    }
  </div>
)

const mapStateToProps = (state) => {
  return {
    winningColors: state.winningCombination
  }
}

export default connect(mapStateToProps)(Combination)
