import React from 'react';

export default class ColorPeg extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  render(){
    let color = this.props.color;
    let style = {
      width: '50px',
      backgroundColor: color,
      height: '50px',
      borderRadius: '50%',
      float: 'left',
      padding: '5px'
    }
    return (
      <div className='color-peg' style={style}></div>
    )
  }
}
