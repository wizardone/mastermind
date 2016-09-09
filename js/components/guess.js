import React from 'react';
import ColorPeg from './color_peg.js'

export default class Guess extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  generateColorPeg(index){
    let color = 'white';
    return (
      <ColorPeg key={index} color={color} guess={true}/>
    )
  }

  render(){
    return(
      <div className='guess'>
        {[...Array(4).keys()].map((i) => {
          return this.generateColorPeg(i);
        })
        }
        <br /><br /><br />
      </div>
    )
  }
}
