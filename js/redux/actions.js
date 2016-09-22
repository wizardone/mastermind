export let updateCurrentTurn = (turn) => {
  return {
    type: 'UPDATE_CURRENT_TURN',
    currentTurn: turn
  }
}

export let updateSelectedPeg = (target) => {
  return {
    type: 'UPDATE_SELECTED_PEG',
    selectedPeg: target
  }
}

export let updateCurrentTurnCombination = (combo) => {
  return {
    type: 'UPDATE_CURRENT_COMBINATION',
    currentTurnCombination: combo
  }
}
