import React from 'react';
import ColorPeg from './color_peg.js'

export default class Guess extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  generateColorPeg(index){
    const color = 'white';

    return (
      <ColorPeg key={index} color={color} guess={true} onClick={this.props.onClick}/>
    )
  }

  render(){
    let turn = `guess-${this.props.className}`;

    return(
      <div className={turn}>
        {[...Array(4).keys()].map((i) => {
          return this.generateColorPeg(i);
        })
        }
        <br /><br /><br />
      </div>
    )
  }
}
