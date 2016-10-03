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

export let updateCurrentTurnHits = (hits) => {
  return {
    type: 'UPDATE_CURRENT_TURN_HITS',
    currentTurnHits: hits
  }
}

export let gameOver = (win = true) => {
  return {
    type: 'GAME_OVER',
    gameOver: true
  }
}
