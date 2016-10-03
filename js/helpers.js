export let fetchSelectedColors = (target) => {
  let parentClass = target.parentElement.className
  let pegs = document.getElementsByClassName(parentClass)[0].childNodes
  let selectedColors = []
  for (let peg of pegs) {
    if (peg.tagName == 'DIV') {
      selectedColors.push(peg.getAttribute('color'))
    }
  }
  return selectedColors
}

export let compareColors = (selectedColors, winningColors) => {
  let cows = []
  let bulls = []
  selectedColors.forEach((el, index) => {
    if (winningColors.indexOf(el) == index) {
      bulls.push(el)
    } else if (winningColors.indexOf(el) >= 0) {
      cows.push(el)
    }
  })

  return {
    'cows': cows.length,
    'bulls': bulls.length
  }
}
