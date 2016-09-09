import React from 'react';

export default class ColorPeg extends React.Component {
  constructor(){
    super();
    this.state = {selected: false};
  }

  //onClick = (e) => {
  //  this.state.selected = true;
  //}

  render(){
    let color = this.props.color;
    let style = {
      width: '40px',
      backgroundColor: color,
      height: '40px',
      borderRadius: '50%',
      border: '1px solid',
      float: 'left',
      padding: '5px'
    }

    return (
      <div className='color-peg' color={color} style={style} onClick={this.props.onClick}></div>
    )
  }
}
