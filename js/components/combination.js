import React from 'react';
import ColorPeg from './color_peg.js'

export default class Combination extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div className='combination'>
        <ColorPeg color='red'/>
        <ColorPeg color='yellow'/>
        <ColorPeg color='blue'/>
        <ColorPeg color='green'/>
      </div>
    )
  }
}
