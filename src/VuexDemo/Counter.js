import React, { Component } from 'react';

import store from './store'

export default class Counter extends Component {
  render () {
    return (
      <button onClick={() => store.commit('increment')}>+</button>
    )
  }
}
