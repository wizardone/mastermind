import React from 'react'

let style = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  border: '1px solid',
  float: 'left',
  padding: '5px'
}

const CodePeg = ({ hit }) => (
  <div className='code-peg-board' style={Object.assign(style, { backgroundColor: hit == 'cow' ? 'white' : 'black'})}></div>
)
export default CodePeg
