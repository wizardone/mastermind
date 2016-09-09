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

  generateColorPeg(index){
    let colors = this.state.freeColors;
    let color = colors[Math.floor(Math.random() * colors.length)];
    this.state.usedColors.push(color);

    return (
      <ColorPeg key={index} color={color}/>
    )
  }


  render(){
    let colors = this.state.freeColors;

    return(
      <div className='combination'>
      {[...Array(4).keys()].map((i) => {
          return this.generateColorPeg(i);
        })
        }
      </div>
    )
  }
}
