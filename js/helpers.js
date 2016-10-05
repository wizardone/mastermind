import React from 'react'
import ReactDom from 'react-dom'
import CodePeg from './components/code_peg.js'

export let fetchSelectedColors = (target) => {
  let parentId = target.parentElement.id
  let pegs = document.getElementById(parentId).childNodes
  let selectedColors = []
  for (let peg of pegs) {
    if (peg.tagName == 'DIV') {
      selectedColors.push(peg.getAttribute('color'))
    }
  }
  return selectedColors
}

export let compareColors = (selectedColors, winningColors) => {
  let hits = []
  selectedColors.forEach((el, index) => {
    if (winningColors.indexOf(el) == index) {
      hits.push('bull')
    } else if (winningColors.indexOf(el) >= 0) {
      hits.push('cow')
    }
  })
  return hits
}

export let renderCodePegs = (hits, index) => {
  for (let hit = 0; hit < hits.length; hit++) {
    let elementToRender = document.getElementById(`guess-${index}`).getElementsByClassName(`combination-checker-${hit}`)[0]
    ReactDom.render(<CodePeg hit={hits[hit]} key={hit}/>, elementToRender)
  }
}

export let shuffle = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex
  let newAr = []
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
  	currentIndex --
    let temp = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temp
  }
  return array
}

export let isOnlyBulls = (array) => {
  return array.every((el) => {
    return el == 'bull'
  })
}
