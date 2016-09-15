import React from 'react'

export default class ColorPeg extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    let color = this.props.color
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
      <div className='color-peg' style={style} color={color} onClick={this.props.onClick}></div>
    )
  }
}
