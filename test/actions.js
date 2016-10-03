import chai from 'chai'
import * as actions from '../js/redux/actions.js'
const expect = chai.expect

describe('Redux Actions', function(){
  describe('#updateCurrentTurn', function(){
    it('returns the proper action parameters', function(){
      let turn = 2
      let action = actions.updateCurrentTurn(turn)

      expect(action).to.be.a('object')
      expect(action.type).to.eq('UPDATE_CURRENT_TURN')
      expect(action.currentTurn).to.eq(turn)
    })
  })
  describe('#updateSelectedPeg', function(){
    it('returns the proper action parameters', function(){
      let target = '<div></div>'
      let action = actions.updateSelectedPeg(target)

      expect(action).to.be.a('object')
      expect(action.type).to.eq('UPDATE_SELECTED_PEG')
      expect(action.selectedPeg).to.eq(target)
    })
  })
  describe('#updateCurrentTurnCombination', function(){
    it('returns the proper action parameters', function(){
      let combo = ['red', 'blue', 'green', 'ping']
      let action = actions.updateCurrentTurnCombination(combo)

      expect(action).to.be.a('object')
      expect(action.type).to.eq('UPDATE_CURRENT_COMBINATION')
      expect(action.currentTurnCombination).to.eq(combo)
    })
  })
  describe('#updateCurrentTurnHits', function(){
    it('returns the proper action parameters', function(){
      let hits = {
        'cows': 3,
        'bulls': 1
      }
      let action = actions.updateCurrentTurnHits(hits)

      expect(action).to.be.a('object')
      expect(action.type).to.eq('UPDATE_CURRENT_TURN_HITS')
      expect(action.currentTurnHits).to.eq(hits)
    })
  })
  describe('#gameOver', function(){
    it('returns the proper action parameters', function(){
      let win = true
      let action = actions.gameOver(win)

      expect(action).to.be.a('object')
      expect(action.type).to.eq('GAME_OVER')
      expect(action.gameOver).to.eq(win)
    })
  })
})
