import chai from 'chai'
import * as reducer from '../js/redux/reducer.js'
const expect = chai.expect

describe('Redux store', function(){
  describe('Initial State', function(){
    it('returns the initial state of the application', function(){
      let state = reducer.initialState

      expect(state).to.be.a('object')
      expect(state.totalTurns).to.eq(8)
      expect(state.currentTurn).to.eq(0)
      expect(state.currentTurnCombination).to.eq(null)
      expect(state.selectedPeg).to.eq(null)
      expect(state.gameOver).to.eq(false)
      expect(state.winningCombination).to.be.a('array')
    })
  })
})
