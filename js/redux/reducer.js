let setWinningCombination = () => {
  let winningCombination = []
  let freeColors = ['red', 'blue', 'yellow', 'green', 'pink', 'gray'];
  [...Array(4).keys()].map((i) => {
    let index = Math.floor(Math.random() * freeColors.length)
    let color = freeColors[index]
    freeColors.splice(index, 1)
    winningCombination.push(color)
  })
  return winningCombination
}

export const initialState = {
  totalTurns: 8,
  currentTurn: 0,
  currentTurnCombination: null,
  currentTurnHits: {},
  selectedPeg: null,
  gameOver: false,
  winningCombination: setWinningCombination()
}

export let mastermind = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WINNING_COMBINATION':
      return Object.assign({}, state, {
        winningCombination: action.winningCombination
      })
    case 'UPDATE_CURRENT_TURN':
      return Object.assign({}, state, {
        currentTurn: action.currentTurn
      })
    case 'UPDATE_SELECTED_PEG':
      return Object.assign({}, state, {
        selectedPeg: action.selectedPeg
      })
    case 'UPDATE_CURRENT_COMBINATION':
      return Object.assign({}, state, {
        currentTurnCombination: action.currentTurnCombination
      })
    case 'UPDATE_CURRENT_TURN_HITS':
      return Object.assign({}, state, {
        currentTurnHits: action.currentTurnHits
      })
    case 'GAME_OVER':
      return Object.assign({}, state, {
        gameOver: action.gameOver
      })
    default:
      return state
  }
}
