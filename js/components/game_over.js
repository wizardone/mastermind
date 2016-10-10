import React from 'react'
import Combination from './combination.js'

const gameOverStyle = {
  textAlign: 'center',
  margin: 'auto'
}

const GameOver = ({ win }) => (
  <div style={gameOverStyle}>
    Game over! Winning combination is:
    { win == true ? 'You won!' : (<Combination />) }
    <br /><br /><br /><hr />
  </div>
)

export default GameOver
