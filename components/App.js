import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './Main';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
const defaultState = {
  arrayPlayers: [],
  isDelete: false
};
const reducer = (state = defaultState, action) => {
  console.log(state.arrayPlayers.player)
  switch (action.type) {

    case 'DELETING': return {
      ...state, isDelete: !state.isDelete
    }

    case 'ADD_PLAYER': return {

      ...state,
      arrayPlayers: [{
        id: state.arrayPlayers.length + 1,
        player: action.player,
      }].concat(state.arrayPlayers)

    }
    default:
      break;
  }

  return state;
}
const store = createStore(reducer);
