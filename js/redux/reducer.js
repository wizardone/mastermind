let setWinningCombination = () => {
  let winningCombination = [];
  [...Array(4).keys()].map((i) => {
    let freeColors = ['red', 'blue', 'yellow', 'green', 'pink', 'gray']
    let color = freeColors[Math.floor(Math.random() * freeColors.length)]
    winningCombination.push(color)
  })
  return winningCombination
}

export const initialState = {
  totalTurns: 8,
  currentTurn: 0,
  currentTurnCombination: null,
  selectedPeg: null,
  winningCombination: setWinningCombination()
}

export let mastermind = (state, action) => {
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
    default:
      return state
  }
}