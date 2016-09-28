import MainBoard from './components/main_board.js'
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { mastermind, initialState } from './redux/reducer.js'

const store = createStore(mastermind, window.devToolsExtension && window.devToolsExtension())

ReactDom.render(
  <Provider store={store}>
    <MainBoard />
  </Provider>, document.getElementById('mastermind')
);
