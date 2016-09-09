import React, {Component} from 'react';
import ColorPeg from './color_peg.js'

export default class MainBoard extends Component {
  constructor(){
    super();
    this.state = {};
  }

  onClick = (e) => {
    console.log(e.target)
  }

  render(){
    let turnsCount = this.state.turns;
    let drawPegStyle = {
      display: 'block'
    }

    return (
      <div className='draw-board'>
        <ColorPeg color='red' onClick={this.props.onClick}/><br /><br /><br />
        <ColorPeg color='blue' onClick={this.props.onClick}/><br /><br /><br />
        <ColorPeg color='green' onClick={this.props.onClick}/><br /><br /><br />
        <ColorPeg color='yellow' onClick={this.props.onClick}/><br /><br /><br />
        <ColorPeg color='pink' onClick={this.props.onClick}/><br /><br /><br />
        <ColorPeg color='gray' onClick={this.props.onClick}/>
      </div>
    )
  }
}


