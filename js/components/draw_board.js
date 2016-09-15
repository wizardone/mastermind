import React, {Component} from 'react';
import ColorPeg from './color_peg.js'
import { connect } from 'react-redux'
import { updateSelectedPeg } from '../redux/actions.js'
import { bindActionCreators } from 'redux'

class DrawBoard extends Component {
  constructor(){
    super();
    this.state = {};
  }

  render(){
    let turnsCount = this.state.turns;
    let drawPegStyle = {
      display: 'block'
    }
    let { onDrawBoardClick } = this.props

    return (
      <div className='draw-board'>
        <ColorPeg color='red' guess={false} onClick={(e) => onDrawBoardClick(e)}/><br /><br /><br />
        <ColorPeg color='blue' guess={false} onClick={(e) => onDrawBoardClick(e)}/><br /><br /><br />
        <ColorPeg color='green' guess={false} onClick={(e) => onDrawBoardClick(e)}/><br /><br /><br />
        <ColorPeg color='yellow' guess={false} onClick={(e) => onDrawBoardClick(e)} /><br /><br /><br />
        <ColorPeg color='pink' guess={false} onClick={(e) => onDrawBoardClick(e)}/><br /><br /><br />
        <ColorPeg color='gray' guess={false} onClick={(e) => onDrawBoardClick(e)}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDrawBoardClick: (e) => dispatch(updateSelectedPeg(e.target.getAttribute('color')))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawBoard)
