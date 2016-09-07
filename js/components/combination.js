import React from 'react';
import ColorPeg from './color_peg.js'

export default class Combination extends React.Component {
  constructor(){
    super();
    this.state = {
      freeColors: ['red', 'blue', 'yellow', 'green', 'pink', 'gray'],
      usedColors: []
    }
  }

  generateColorPeg(){
    let colors = this.state.freeColors;
    let color = colors[Math.floor(Math.random() * colors.length)];
    this.state.usedColors.push(color);

    return (
      <ColorPeg color={color}/>
    )
  }


  render(){
    let colors = this.state.freeColors;

    return(
      <div className='combination'>
        {this.generateColorPeg()}
        {this.generateColorPeg()}
        {this.generateColorPeg()}
        {this.generateColorPeg()}
      </div>
    )
  }
}
