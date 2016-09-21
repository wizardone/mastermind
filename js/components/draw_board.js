import React, {Component} from 'react';
import ColorPeg from './color_peg.js'

const DrawBoard = () => (
  <div className='draw-board'>
    <ColorPeg color='red' /><br /><br /><br />
    <ColorPeg color='blue' /><br /><br /><br />
    <ColorPeg color='green' /><br /><br /><br />
    <ColorPeg color='yellow' /><br /><br /><br />
    <ColorPeg color='pink' /><br /><br /><br />
    <ColorPeg color='gray' />
  </div>
)
export default DrawBoard
