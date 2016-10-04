import React from 'react'
import { connect } from 'react-redux'
import { updateSelectedPeg } from '../redux/actions.js'

class ColorPeg extends React.Component {
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
    let { onPegClick } = this.props

    return (
      <div className='`color-peg-${index}`' style={style} color={color} onClick={(e) => onPegClick(e)}></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPegClick: (e) => {
      dispatch(updateSelectedPeg(e.target.getAttribute('color')))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPeg)
